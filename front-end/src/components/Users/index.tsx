import Button from "../Button";
import { BoxButtons, Conteiner } from "./style";
import { IoMdCreate } from "react-icons/io"
import { FcReading } from "react-icons/fc"
import { TiDelete } from "react-icons/ti"

interface userProps {
  name: String;
  phone: String;
  email: String;
  deleteEvent?: () => void;
  updateEvent?: () => void;
  readEvent?: () => void;
}

export const Users = ({ name, phone, email, deleteEvent, updateEvent, readEvent}: userProps) => {
  

  

  return (
    <Conteiner>
      <span> {name} </span>
      <span> {phone} </span>
      <span> {email} </span>
      <BoxButtons>
        <FcReading onClick={readEvent}/>
        <IoMdCreate onClick={updateEvent}/>
        <TiDelete onClick={deleteEvent}/>
        <Button text="Read" color="gray" onclick={readEvent}/>
        <Button text="Update" color="yellow" onclick={updateEvent} id="btn-2"/>
        <Button text="Delete" color="red" onclick={deleteEvent}/>
      </BoxButtons>
    </Conteiner>
  );
};
