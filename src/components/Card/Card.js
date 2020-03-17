import React, { useEffect, useState } from "react";

//style
import "./Card.scss";

export default function Card({
  onClick,
  type,
  cardStyle,
  cardClassName,
  img,
  title,
  variant = "square"
}) {
  const [containerStyle, setContainerStyle] = useState(cardStyle);

  return (
    <div
      className={`Card Card--${variant} Card--${type}`}
      tabIndex={type === "button" ? 0 : -1}
      type={type}
      onClick={onClick}
    >
      <div
        className={`Card__Container ${cardClassName}`}
        style={containerStyle}
      >
        <img className="Card__Image" src={img} alt={title} />
        <div className="Card__title">{title}</div>
      </div>
    </div>
  );
}
