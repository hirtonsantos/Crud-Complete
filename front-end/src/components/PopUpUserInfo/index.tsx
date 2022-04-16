import { Content, Div, DivA, DivContainer, Header, InfoUser, Profile } from "./style";
import { IoCloseCircle } from "react-icons/io5";
import {HiUserCircle} from "react-icons/hi"

interface PopUpPrios {
  setPopup: (valor: boolean) => void;
  user?: any;
}

function PopUpEditUser({ setPopup, user }: PopUpPrios) {

  return (
    <DivA>
      <DivContainer>
        <Div>
          <Header>
            <Profile> 
              <HiUserCircle/>  
              <h1>{user.name}</h1>
            </Profile>
            <IoCloseCircle onClick={() => setPopup(false)} />
          </Header>
            <Content>
            <InfoUser>
            <span>
              <p>Nome de registro:</p>
              <p>{user.name}</p>
            </span>

            <span>
              <p>Email de registro:</p>
              <p>{user.email}</p>
            </span>

            <span>
              <p>Telefone de registro:</p>
              <p>{user.phone}</p>
            </span>

            <span>
              <p>Criação:</p>
              <p>{user.create_date}</p>
            </span>

            <span>
              <p>Última atualização:</p>
              <p>{user.update_date}</p>
            </span>
            </InfoUser>
            </Content>
        </Div>
      </DivContainer>
    </DivA>
  );
}

export default PopUpEditUser;
