import React from "react";
import buttonCss from "./button.module.css";

export interface ButtonProps {
  children: React.ReactNode;
}

const Button = (props: ButtonProps) => {
  return <button className={buttonCss.btnDefault} {...props} />;
};

export default Button;
