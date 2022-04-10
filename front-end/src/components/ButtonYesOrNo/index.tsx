import {Container} from "./style"

interface ButtonYesOrNoProps{
    onclickYes: () => void;
    onclickNo: () => void;
}

function ButtonYesOrNo ({onclickYes, onclickNo}:ButtonYesOrNoProps) {

  return (
    <Container>
      <button onClick={onclickYes}>Sim</button>
      <button onClick={onclickNo}>Não</button>
    </Container>
  )
}

export default ButtonYesOrNo;