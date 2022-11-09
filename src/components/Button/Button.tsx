import React from "react";

export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return <button className="bg-blue-400 p-2 rounded-md text-white font-bold text-lg">{props.label}</button>;
};

export default Button;