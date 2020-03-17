import React, { useState, useEffect, memo } from "react";

//components
import Card from "../Card/Card";
//style
import "./CardGroup.scss";

const CardGroup = memo(({ number, data }) => {
  const [cardGroup, setCardGroup] = useState(null);

  const init = () => {
    let cards = [];
    const group = [];

    data.forEach((d, i) => {
      if ((i + 1) % number === 0) {
        cards.push(
          <Card
            key={i}
            img={d.img}
            title={d.name}
            type="button"
            cardStyle={{
              background:
                d.typesColor.length > 1
                  ? `linear-gradient(90deg, ${d.typesColor[0]} 50%, ${d.typesColor[1]} 50%)`
                  : d.typesColor[0]
            }}
            cardClassName={d.types.map(t => t.type.name).join(" ")}
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
            cardStyle={{
              background:
                d.typesColor.length > 1
                  ? `linear-gradient(90deg, ${d.typesColor[0]} 50%, ${d.typesColor[1]} 50%)`
                  : d.typesColor[0]
            }}
            cardClassName={d.types.map(t => t.type.name).join(" ")}
          />
        );
      }
    });

    setCardGroup(group);
  };

  useEffect(init, [data]);

  return <>{cardGroup}</>;
});

export default CardGroup;
