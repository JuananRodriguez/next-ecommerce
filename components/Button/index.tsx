import React from "react";
import { ButtonStyle } from "./styles";

const Button = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const { ...rest } = props;
  return <ButtonStyle {...rest} />;
};

export default Button;
