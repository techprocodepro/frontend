import React from "react";
import SpecificCards2 from "./SpecificCards2";

const SpecificCards = (props) => {
  return props.data.map((data, index, sttyle) => {
    return (
      <SpecificCards2 sttyle={props.sttyle} data={data} key={index} />
    );
  });
};

export default SpecificCards;
