import React from "react";
import { useHistory } from "react-router-dom";

const Button = ({ title, path }) => {
  const history = useHistory();
  const clickHandler = () => {
    history.push(path);
  };
  return (
    <div className="go_btn">
      <button type="button" onClick={clickHandler}>
        {title}
      </button>
    </div>
  );
};

export default Button;
