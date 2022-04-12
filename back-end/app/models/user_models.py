import datetime
import pytz
from flask import request
from app.models import DatabaseConnector
from psycopg2 import sql


class User(DatabaseConnector):
    def __init__(self, **kwargs) -> None:
        self.name = kwargs["name"].title()
        self.email = kwargs["email"].lower()
        self.phone = kwargs["phone"]

    @classmethod
    def users(cls):
        try:
            cls.get_conn_cur()

            query = "SELECT * FROM users"

            cls.cur.execute(query)

            users_list = cls.cur.fetchall()

            FIELDNAMES = ["id", "name", "email",
                          "phone", "create_date", "update_date"]

            processed_data = [dict(zip(FIELDNAMES, row)) for row in users_list]

            cls.cur.close()
            cls.conn.close()

            return processed_data
        except Exception:
            cls.get_conn_cur()

            cls.cur.execute("""
                create table users (
                id BIGSERIAL PRIMARY key,
                name VARCHAR(100) NOT NULL,
                email VARCHAR(100) NOT NULL UNIQUE,
                phone VARCHAR(14) NOT NULL UNIQUE,
                create_date VARCHAR,
                last_update_date VARCHAR
                );
            """)

            cls.commit_and_close()

            return []

    @classmethod
    def read_user_by_id(cls, id):
        cls.get_conn_cur()

        user_id = sql.Literal(id)

        query = sql.SQL("""
            SELECT * FROM users WHERE id = {id_user};
        """).format(id_user=user_id)

        cls.cur.execute(query)

        users = cls.cur.fetchall()

        FIELDNAMES = ["id", "name", "email", "phone",
                      "create_date", "last_update_date"]
        processed_data = [dict(zip(FIELDNAMES, row)) for row in users]

        cls.commit_and_close()

        return processed_data

    @classmethod
    def create_user(cls, table):

        data = request.get_json()

        timezone = pytz.timezone('America/Sao_Paulo')

        data = {
            "name": data["name"].title(),
            "email": data["email"],
            "phone": data["phone"].lower(),
            "create_date": datetime.datetime.now(tz=timezone).strftime(
                '%d %B %Y - %H:%M:%S Brazil'),
            "last_update_date": datetime.datetime.now(tz=timezone).strftime(
                '%d %B %Y - %H:%M:%S Brazil')
        }

        # datetime.datetime.now(tz=-2)

        # BR = pytz.timezone('America/Sao_Paulo')
        # ISBR = datetime.now(tz=BR)
        # isBR.strftime('%d %B %Y - %H:%M:%S')

        cls.get_conn_cur()

        if len(table) > 0:
            print(f"if is {table}")
            query = """
                INSERT INTO users
                    (id, name, email, phone, create_date, last_update_date)
                VALUES
                    ((select max(id) + 1 from users),%s, %s, %s, %s, %s)
                RETURNING *
            """
        else:
            print(f"else is {table}")
            query = """
                INSERT INTO users
                    (id, name, email, phone, create_date, last_update_date)
                VALUES
                    (1, %s, %s, %s, %s, %s)
                RETURNING *
            """
        values = ["name", "email", "phone", "create_date", "last_update_date"]

        FIELDNAMES = [data['name'], data['email']]
        FIELDNAMES.extend(
            [data['phone'], data['create_date'], data['last_update_date']])

        processed_data = [dict(zip(values, row))
                          for row in [FIELDNAMES]][0]

        cls.cur.execute(query, tuple(FIELDNAMES))
        cls.conn.commit()

        id = cls.cur.fetchone()[0]

        processed_data.update({"id": id})

        cls.cur.close()
        cls.conn.close()

        return processed_data, 201

    @classmethod
    def delete_user(cls, user_id):
        cls.get_conn_cur()

        query = sql.SQL(
            """
            DELETE FROM
                users
            WHERE
                id = {user_id}
            RETURNING *;
            """
        ).format(
            user_id=sql.Literal(user_id)
        )

        cls.cur.execute(query)

        deleted_user = cls.cur.fetchone()

        cls.commit_and_close()

        return deleted_user

    @classmethod
    def update_user(cls, payload: dict, user_id):
        cls.get_conn_cur()

        if "name" in list(payload.keys()):
            payload['name'] = payload['name'].title()

        timezone = pytz.timezone('America/Sao_Paulo')

        payload.update(
            {"last_update_date": datetime.datetime.now(tz=timezone).strftime(
                '%d %B %Y - %H:%M:%S Brazil')})

        columns = [sql.Identifier(key) for key in payload.keys()]
        values = [sql.Literal(value) for value in payload.values()]

        print(columns, values)

        query = sql.SQL(
            """
                UPDATE
                    users
                SET
                    ({columns}) = ROW({values})
                WHERE
                    id = {user_id}
                RETURNING *;
                """
        ).format(
            columns=sql.SQL(",").join(columns),
            values=sql.SQL(",").join(values),
            user_id=sql.Literal(user_id)
        )

        cls.cur.execute(query)

        processed_data = cls.cur.fetchone()

        print(processed_data)

        values = list(processed_data)
        keys = ["id", "name", "email", "phone",
                "create_date", "last_update_date"]

        processed_data = [dict(zip(keys, values))]

        print(processed_data)

        cls.commit_and_close()

        return processed_data
