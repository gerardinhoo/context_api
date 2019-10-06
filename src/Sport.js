import React, { useContext } from "react";
import { SportContext } from "./Store";
import Fruit from "./Fruit";

const Sport = () => {
  const [sport, setSport] = useContext(SportContext);
  return (
    <div>
      <h2>Soccer is life</h2>
      <button
        onClick={() => {
          setSport("Soccer");
        }}
      >
        Change Sport
      </button>
      <h4>I love {sport}</h4>
      <Fruit />
    </div>
  );
};

export default Sport;
