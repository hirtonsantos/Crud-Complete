import { Container, Content, Header } from "./style";
import Button from "./components/Button";
import { Users } from "./components/Users";
import { usersList } from "./Users_List";
import { useState } from "react";
import PopUpCreateProduct from "./components/PopUpCreateProducts";
import PopUpRemove from "./components/PopUpDelete";
import PopUpEditUser from "./components/PopUpEditUser";

export const App = () => {
  const [popUpCreate, setPopUpCreate] = useState(false);
  const [popUpDelete, setPopUpDelete] = useState(false);
  const [popUpUpdate, setPopUpUpdate] = useState(false);

  const changePopUpCreateValue = () => {
    setPopUpCreate(true);
  };

  const changePopUpDeleteValue = () => {
    setPopUpDelete(true);
  };

  const changePopUpUpdateValue = () => {
    setPopUpUpdate(true);
  };

  return (
    <Container>
      {popUpCreate && <PopUpCreateProduct setPopup={setPopUpCreate} />}
      {popUpDelete && <PopUpRemove setPopup={setPopUpDelete} />}
      {popUpUpdate && <PopUpEditUser setPopup={setPopUpUpdate} />}
      <Header>
        <h1> CRUD BASICO </h1>
      </Header>
      <Content>
        <Button text="Create" color="#0DA50D" onclick={changePopUpCreateValue} />
        <header>
          <span> Name </span>
          <span> Phone </span>
          <span> Email </span>
          <span> Actions </span>
        </header>
        {usersList.map((item) => {
          return (
            <Users 
              name={item.name} 
              phone={item.phone} 
              email={item.email} 
              deleteEvent={changePopUpDeleteValue}
              updateEvent={changePopUpUpdateValue}
              />
          );
        })}
      </Content>
    </Container>
  );
};
