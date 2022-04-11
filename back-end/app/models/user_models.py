from flask import request
from app.models import DatabaseConnector
from psycopg2 import sql


class User(DatabaseConnector):
    def __init__(self, **kwargs) -> None:
        self.name = kwargs["name"].title()
        self.email = kwargs["email"].lower()
        self.phone = kwargs["phone"]
        # self.create_date =
        # self.update_date =

    @classmethod
    def users(cls):
        try:
            cls.get_conn_cur()

            query = "SELECT * FROM users"

            cls.cur.execute(query)

            users_list = cls.cur.fetchall()

            FIELDNAMES = ["id", "name", "email", "phone"]

            processed_data = [dict(zip(FIELDNAMES, row)) for row in users_list]

            # for user in processed_data:
            #     user[]

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
                phone VARCHAR(14) NOT NULL UNIQUE
                );
            """)

            cls.commit_and_close()

            return []

    @classmethod
    def create_user(cls, table):

        data = request.get_json()

        data['name'] = data['name'].title()

        cls.get_conn_cur()

        if len(table) > 0:
            print(f"if is {table}")
            query = """
                INSERT INTO users
                    (id, name, email, phone)
                VALUES
                    ((select max(id) + 1 from users),%s, %s, %s)
                RETURNING *
            """
        else:
            print(f"else is {table}")
            query = """
                INSERT INTO users
                    (id, name, email, phone)
                VALUES
                    (1, %s, %s, %s)
                RETURNING *
            """
        values = ["name", "email", "phone"]

        FIELDNAMES = [data['name'], data['email']]
        FIELDNAMES.extend([data['phone']])

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
