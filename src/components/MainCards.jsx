import React from "react";
import { Link } from "react-router-dom";

const MainCards = (props) => {
  return props.data.map((data, index) => (
    <Link to={`/order/${index}`}>
      <div
        className="maincards"
        key={index}
        style={{ backgroundImage: "url(../assets/" + data[0].mainimg + ")" }}
      >
        <img
          className="mainimg"
          src={require("../assets/" + data[0].mainimg)}
          alt=""
        />
        <h4>{data[0].mainname}</h4>
        <p>Lorem, ipsum dolor.</p>
        <div>
          <p>starts from: </p>
          <h3>{data[0].price}</h3>
        </div>
      </div>
    </Link>
  ));
};

export default MainCards;
