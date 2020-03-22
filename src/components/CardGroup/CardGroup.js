import React, { useState, useEffect, memo } from "react";
import { withRouter } from "react-router-dom";

//components
import Card from "../Card/Card";
//style
import "./CardGroup.scss";

const CardGroup = memo(({ number, data, history }) => {
  const [cardGroup, setCardGroup] = useState(null);
  const handleOnClick = id => {
    history.push(`/pokemon/${id}`);
  };
  const init = () => {
    let cards = [];
    const group = [];
    const maxCards = data.length < number ? data.length : number;

    data.forEach((d, i) => {
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
          onClick={() => handleOnClick(d.id)}
          cardClassName={d.types.map(t => t.type.name).join(" ")}
        />
      );

      if ((i + 1) % maxCards === 0) {
        group.push(
          <div className={`CardGroup CardGroup--${number}`} key={i}>
            {cards}
          </div>
        );

        cards = [];
      }
    });

    setCardGroup(group);
  };

  useEffect(init, [data]);

  return <>{cardGroup}</>;
});

export default withRouter(CardGroup);
