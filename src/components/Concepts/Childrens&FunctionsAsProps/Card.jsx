import React from "react";

const Card = (props) => {
  return (
    <div>
      {props.title}
      {props.children}
    </div>
  );
};

export default Card;
