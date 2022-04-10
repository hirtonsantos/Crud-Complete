import { TextField } from "@mui/material";
import Button from "../Button";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Div, Form, DivA, DivContainer } from "./style";
import { IoCloseCircle } from "react-icons/io5";

interface PopUpPrios {
    setPopup: (valor: boolean) => void;
    user?: User;
}

interface User {
    id?: Number;
    username?: String;
    email?: String;
}


function PopUpEditUser({ setPopup, user }: PopUpPrios) {
  const formSchema = yup.object().shape({
    username: yup
      .string()
      .required("Username obrigatório")
      .matches(
        /^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$/,
        "Minimo 5 caracteres;Sem espaço;Deve começar com uma letra;Pode ter . - _;Não pode começar nem terminar com . - _"
      ),
    email: yup.string().required("E-mail obrigatório").email("E-mail invalido"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  // const onSubmitFunction = (data: User) => {
  //   data = { ...data, id: user.id };
  //   setPopup(false);
  // };
  return (
    <DivA>
      <DivContainer>
        <Div>
          <Form /*onSubmit={handleSubmit(onSubmitFunction)}*/>
            <IoCloseCircle onClick={() => setPopup(false)} />
            <h3>Editar Perfil</h3>
            <TextField
              defaultValue={"user.username"}
              margin="normal"
              fullWidth
              id="login-basic"
              label="Usuário"
              variant="outlined"
              error={!!errors.username?.message}
              {...register("username")}
            />
            <TextField
              defaultValue={"user.email"}
              margin="normal"
              fullWidth
              id="login-basic"
              label="E-mail"
              variant="outlined"
              error={!!errors.email?.message}
              {...register("email")}
            />
            <Button type="submit" text={"Alterar"}></Button>
          </Form>
        </Div>
      </DivContainer>
    </DivA>
  );
}

export default PopUpEditUser;