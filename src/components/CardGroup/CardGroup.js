import React, { useState, useEffect } from "react";

//components
import Card from "../Card/Card";
//style
import "./CardGroup.scss";

export default function CardGroup({ number, data }) {
  const [cardGroup, setCardGroup] = useState(null);

  const init = () => {
    let cards = [];
    const group = [];

    data.forEach((d, i) => {
      const { types } = d;
      const pokemonTypes = types.map(t => t.type.name);
      console.log(pokemonTypes);
      if ((i + 1) % number === 0) {
        cards.push(
          <Card
            key={i}
            img={d.img}
            title={d.name}
            type="button"
            types={pokemonTypes}
          />
        );
        group.push(
          <div className={`CardGroup CardGroup--${number}`} key={i}>
            {cards}
          </div>
        );

        cards = [];
      } else {
        cards.push(
          <Card
            key={i}
            img={d.img}
            title={d.name}
            type="button"
            types={pokemonTypes}
          />
        );
      }
    });

    setCardGroup(group);
  };

  useEffect(init, [data]);

  return <>{cardGroup}</>;
}
