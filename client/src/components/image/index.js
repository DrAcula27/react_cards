import React from "react";
import "./index.css";

const Image = (props) => {
  return (
    <div>
      <img className="card-image" src={props.img} alt={props.title} />
    </div>
  );
};

export default Image;
