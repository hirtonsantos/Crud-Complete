import { TextField } from "@mui/material";
import Button from "../Button";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Div, Form, DivA, DivContainer } from "./style";
import { IoCloseCircle } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { UpdateUserThunk } from "../../Store/modules/users/thunk";

interface PopUpPrios {
  setPopup: (valor: boolean) => void;
  user?: any;
}

interface User {
  id?: any;
  name?: String | undefined;
  email?: String;
  phone?: String;
}

function PopUpEditUser({ setPopup, user }: PopUpPrios) {
  const formSchema = yup.object().shape({
    name: yup.string().required("name obrigatório"),
    email: yup.string().required("E-mail obrigatório"),
    phone: yup.string().required("Phone obrigatório"),
  });

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data: User) => {
    dispatch(UpdateUserThunk(data, user.id));
    setPopup(false);
  };

  return (
    <DivA>
      <DivContainer>
        <Div>
          <Form onSubmit={handleSubmit(onSubmitFunction)}>
            <IoCloseCircle onClick={() => setPopup(false)} />
            <h3>Editar Perfil</h3>
            <TextField
              defaultValue={user.name}
              margin="normal"
              fullWidth
              id="login-basic"
              label="Usuário"
              variant="outlined"
              error={!!errors.name?.message}
              {...register("name")}
            />
            <TextField
              defaultValue={user.email}
              margin="normal"
              fullWidth
              id="login-basic"
              label="E-mail"
              variant="outlined"
              error={!!errors.email?.message}
              {...register("email")}
            />
            <TextField
              defaultValue={user.phone}
              margin="normal"
              fullWidth
              id="login-basic"
              label="Phone"
              variant="outlined"
              {...register("phone")}
            />
            <Button type="submit" text={"Alterar"}></Button>
          </Form>
        </Div>
      </DivContainer>
    </DivA>
  );
}

export default PopUpEditUser;
