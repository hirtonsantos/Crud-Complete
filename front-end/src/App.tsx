import { Container, Content, Header } from "./style";
import Button from "./components/Button";
import { Users } from "./components/Users";
import { useEffect, useState } from "react";
import PopUpCreateProduct from "./components/PopUpCreateProducts";
import PopUpRemove from "./components/PopUpDelete";
import PopUpEditUser from "./components/PopUpEditUser";
import { api } from "./Services/api";

export const App = () => {
  const [usersDatabase, setUsersDatabase] = useState<any[]>([]);
  const [popUpCreate, setPopUpCreate] = useState(false);
  const [popUpDelete, setPopUpDelete] = useState(false);
  const [popUpUpdate, setPopUpUpdate] = useState(false);
  const [item, setItem] = useState({})

  const changePopUpCreateValue = () => {
    setPopUpCreate(true);
  };

  const changePopUpDeleteValue = (item: any) => {
    setPopUpDelete(true);
    setItem(item)
  };

  const changePopUpUpdateValue = (item: any) => {
    setPopUpUpdate(true);
    setItem(item)
  };

  useEffect(() => {
      api
        .get("/users")
        .then((response) => {
          setUsersDatabase(response.data.data);
        })
        .catch((err) => console.log(err))
  }, [usersDatabase]);

  return (
    <Container>
      {popUpCreate && <PopUpCreateProduct setPopup={setPopUpCreate} />}
      {popUpDelete && <PopUpRemove setPopup={setPopUpDelete} user={item} />}
      {popUpUpdate && <PopUpEditUser setPopup={setPopUpUpdate} user={item}/>}
      <Header>
        <h1> CRUD BASICO </h1>
      </Header>
      <Content>
        <Button
          text="Create"
          color="#0DA50D"
          onclick={changePopUpCreateValue}
        />
        <header>
          <span> Name </span>
          <span> Phone </span>
          <span> Email </span>
          <span> Actions </span>
        </header>
        {usersDatabase.map((item) => {
          return (
            <Users
              name={item.name}
              phone={item.phone}
              email={item.email}
              deleteEvent={() => changePopUpDeleteValue(item)}
              updateEvent={() => changePopUpUpdateValue(item)}
            />
          );
        })}
      </Content>
    </Container>
  );
};
