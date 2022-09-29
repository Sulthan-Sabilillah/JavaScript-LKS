import React, { useState } from "react";

const Hook = (props) => {
  const [fruitState, setFruitSatet] = useState({
    fruits: [
      { name: "Mangga", weight: "420gm" },
      { name: "Apel", weight: "20gm" },
      { name: "Jeruk", weight: "120gm" },
    ],
  });

  const klikhandler = () => {
    setFruitSatet({
      fruits: [
        { name: "Susan", weight: "420gm" },
        { name: "Apple", weight: "20gm" },
        { name: "Nokia", weight: "120gm" },
      ],
    });
  };

  return (
    <div>
      <button onClick={klikhandler}>Change Me</button>
      <h1> Fruit Name Is {fruitState.fruits[0].name}</h1>
      <h1> Fruit Name Is {fruitState.fruits[1].name}</h1>
      <h1> Fruit Name Is {fruitState.fruits[2].name}</h1>
    </div>
  );
};

export default Hook;
