import ButtonYesOrNo from "../ButtonYesOrNo";
import { DivA, DivContainer, Div } from "./style";

// interface Product {
//   id?: number;
//   name: string;
//   email: string;
//   phone: string;
// }

interface PopupRemoveProps {
  setPopup: (valor: boolean) => void;
}

function PopUpRemove({ setPopup }: PopupRemoveProps) {
  function removerCard() {
    setPopup(false);
  }

  return (
    <DivA>
      <DivContainer>
        <Div>
          <h3>Remover ?</h3>
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
