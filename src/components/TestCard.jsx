import React from "react";
import { Link } from "react-router-dom";
let index = -1;



const TestCard = (props) => {
  return props.data.map((data, index) => (
    <div
      key={index}
      onClick={() => {
        props.setAngle(45 + index * 90);
        props.setLeft(60 + index * 169);
      }}
      style={{
        width: "150px",
        height: "250px",
        margin: "10px",
        zIndex: 3,
      }}
    >
      <div>
        <img
          className="testimg"
          src={require("../assets/" + data[0].mainimg)}
          alt=""
        />
      </div>
      <br></br>
      <h3 style={{ zIndex: 10 }}>{data[0].mainname}</h3>
      <br></br>
      <Link to={`/order/${index}`}>
        <button
          style={{
            background: "black",
            width: "60px",
            height: "30px",
            borderRadius: "15px",
            border: "black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={require("../assets/arrow.png")}
            style={{ objectFit: "contain", height: "20px", width: "40px" }}
            alt=""
          />
        </button>
      </Link>
    </div>
  ));
};

export default TestCard;
