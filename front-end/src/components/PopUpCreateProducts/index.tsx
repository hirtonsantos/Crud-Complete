import { TextField } from "@mui/material";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Div, Form, DivA, DivContainer } from "./style";
import { IoCloseCircle } from "react-icons/io5";
import Button from "../Button";


interface User {
  id?: number;
  name: string;
  phoneNumber: string;
  email: number;
}

interface PopUpProps {
  setPopup: (value: boolean) => void;
}

function PopUpCreateUser({ setPopup }: PopUpProps) {
  const formSchema = yup.object().shape({
    name: yup.string().required("name required"),
    phoneNumber: yup.string().required("Telefone required"),
    email: yup.string().required("Email required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data: User) => {
    console.log(data);
  };

  const closePopUp = () => {
    setPopup(false);
  };

  return (
    <DivA>
      <DivContainer>
        <Div>
          <Form onSubmit={handleSubmit(onSubmitFunction)}>
            <IoCloseCircle onClick={() => closePopUp()} />
            <h3>Register New User</h3>
            <TextField
              id="outlined-number"
              label="Name"
              type="text"
              margin="normal"
              {...register("name")}
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id="outlined-number"
              label="Email"
              type="email"
              margin="normal"
              {...register("email")}
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id="outlined-number"
              label="Telefone"
              type="tel"
              margin="normal"
              {...register("phoneNumber")}
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
            />
            <Button type="submit" text="Register" />
          </Form>
        </Div>
      </DivContainer>
    </DivA>
  );
}

export default PopUpCreateUser;
