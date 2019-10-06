import React from "react";
import Person from "./Person";

const Family = props => {
  return (
    <div>
      <Person name={props.name} />
    </div>
  );
};

export default Family;
