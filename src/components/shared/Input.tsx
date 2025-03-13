import React from "react";
import { InputPropsInterface } from "../../interfaces/Interfaces";
// import "./Input.css"; // Import CSS

const Input: React.FC<InputPropsInterface> = (props) => {
  const { value, onChange } = props;
  return (
    <div className="input-container">
      <input 
        type="text" 
        value={value} 
        onChange={onChange} 
        placeholder="Type something..."
        className="styled-input"
      />
    </div>
  );
};

export default Input;
