import Button from "../Button";
import { BoxButtons, Conteiner } from "./style";

interface userProps {
  name: String;
  phone: String;
  email: String;
  deleteEvent?: () => void;
  updateEvent: () => void;
}

export const Users = ({ name, phone, email, deleteEvent, updateEvent}: userProps) => {
  

  return (
    <Conteiner>
      <span> {name} </span>
      <span> {phone} </span>
      <span> {email} </span>
      <BoxButtons>
        <Button text="Read" color="gray"/>
        <Button text="Update" color="yellow" onclick={updateEvent}/>
        <Button text="Delete" color="red" onclick={deleteEvent}/>
      </BoxButtons>
    </Conteiner>
  );
};
