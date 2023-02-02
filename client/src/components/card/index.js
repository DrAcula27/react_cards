import React from "react";
import Image from "../image";
import CardBody from "../card_body";
import Button from "../button";
import "./index.css";

const Card = (props) => {
  let { img, title, text, url } = props.obj;

  return (
    <div className="card-container">
      <Image img={img} title={title} />
      <CardBody title={title} text={text} />
      <Button url={url} />
    </div>
  );
};

export default Card;
