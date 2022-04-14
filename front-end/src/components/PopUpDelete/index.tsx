import { useDispatch } from "react-redux";
import ButtonYesOrNo from "../ButtonYesOrNo";
import { DivA, DivContainer, Div } from "./style";
import  { DeleteUserThunk }  from "../../Store/modules/users/thunk"

interface PopupRemoveProps {
  setPopup: (valor: boolean) => void;
  user: User
}

interface User {
  id?: any;
  name?: String | undefined;
  email?: String;
  phone?: String;
}

function PopUpRemove({ setPopup, user }: PopupRemoveProps) {

  const dispatch = useDispatch()

  function removerCard() {
    console.log(user.id)
    dispatch(DeleteUserThunk(user.id))
    setPopup(false);
  }

  return (
    <DivA>
      <DivContainer>
        <Div>
          <h3>Remover o usuário {user.name}?</h3>
          <ButtonYesOrNo
            onclickYes={removerCard}
            onclickNo={() => setPopup(false)}
          ></ButtonYesOrNo>
        </Div>
      </DivContainer>
    </DivA>
  );
}

export default PopUpRemove;
