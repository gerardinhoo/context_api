import React, { useContext } from "react";
import { FruitContext } from "./Store";

const Fruit = () => {
  const [fruit, setFruit] = useContext(FruitContext);
  return (
    <div>
      <h2>Eat good fruit</h2>
      <button
        onClick={() => {
          setFruit("Mangoe");
        }}
      >
        Change Fruit
      </button>

      <h4>I love to eat {fruit}</h4>
    </div>
  );
};

export default Fruit;
