import React from "react";
import "./index.css";

const Button = (props) => {
  return (
    <button>
      <a href={props.url} target="_blank" rel="noreferrer">
        See More Pictures
      </a>
    </button>
  );
};

export default Button;
