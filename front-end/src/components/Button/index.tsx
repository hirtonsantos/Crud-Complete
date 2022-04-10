import { ButtonHTMLAttributes } from "react";
import { ButtonStyled } from "./style";

interface ButtonProps extends ButtonHTMLAttributes<HTMLAnchorElement> {
    text: string;
    color?: string;
    onclick?: () => void;
}

const Button = ({ onclick, color, type, text }: ButtonProps) => {

  return (
    <ButtonStyled onClick={onclick} color={color} type={type}>
      {text}
    </ButtonStyled>
  );
};
export default Button;