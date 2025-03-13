import React from "react";
import { buttonPropsTypes } from "../../interfaces/Interfaces";

const Button: React.FC<buttonPropsTypes> = React.memo((props) => {
  console.log("button");
  return (
    <button className="styled-button" onClick={props.onClick}>
      {props.title}
    </button>
  );
});

export default Button;
