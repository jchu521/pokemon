import React, { useEffect, useState } from "react";

//style
import "./Card.scss";

export default function Card({
  onClick,
  type,
  types,
  img,
  title,
  variant = "square"
}) {
  const [containerStyle, setContainerStyle] = useState(null);

  const getColor = type =>
    ({
      normal: " #a8a878",
      fire: "#f08030",
      water: "#6890f0",
      electric: "#f8d030",
      grass: " #78c850",
      ice: "#98d8d8",
      ground: "#e0c068",
      flying: "#a890f0",
      ghost: "#705898",
      rock: "#b8a038",
      fighting: "#c03028",
      poison: "#a040a0",
      psychic: "#f85888",
      bug: "#a8b820",
      darker: "#705848",
      steel: " #b8b8d0",
      dragon: "#7038f8"
    }[type]);

  useEffect(() => {
    const color1 = getColor(types[0]);
    const color2 = getColor(types[1]);

    if (types.length > 1) {
      setContainerStyle({
        background: `linear-gradient(90deg, ${color1} 50%, ${color2} 50%)`
      });
    } else {
      setContainerStyle({
        background: color1
      });
    }
  }, [types]);

  return (
    <div
      className={`Card Card--${variant} Card--${type}`}
      tabIndex={type === "button" ? 0 : -1}
      type={type}
      onClick={onClick}
    >
      <div className={`Card__Container ${types}`} style={containerStyle}>
        <img className="Card__Image" src={img} alt={title} />
        <div className="Card__title">{title}</div>
      </div>
    </div>
  );
}
