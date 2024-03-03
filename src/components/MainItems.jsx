// import React, { useEffect, useState } from "react";
// import MainCards from "./MainCards";
// import Navbar from "./Navbar";
// import TestCard from "./TestCard";

// setInterval(() => {
//   console.log((index += 1) % 4);
// }, 2000);

// useEffect(() => {
//   props.setAngle(45 + index * 90);
//   props.setLeft(60 + index * 169);
// }, [index]);

// const MainItems = (props) => {
//   const [angle, setAngle] = useState(45);
//   const [left, setLeft] = useState(60);
//   const sttyle = { left: `${left}px` };
//   const stylle = { transform: ` rotate(${angle}deg)` };
import React, { useEffect, useState } from "react";
import MainCards from "./MainCards";
import Navbar from "./Navbar";
import TestCard from "./TestCard";

const MainItems = (props) => {
  const [angle, setAngle] = useState(45);
  const [left, setLeft] = useState(60);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((Index) => (Index + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setAngle(45 + index * 90);
    setLeft(60 + index * 169);
  }, [index]);

  const sttyle = { left: `${left}px` };
  const stylle = { transform: `rotate(${angle}deg)` };
  return (
    <>
      <Navbar />
      <center>
        <div>
          <div
            style={{
              // border: "2px solid black",
              display: "flex",
              flexDirection: "",
              justifyContent: "flex-end",
              height: "100px",
            }}
          >
            <div>
              <h1 className="homeheading">healthy and tasty food</h1>
              <p style={{ marginRight: "30px", fontWeight: "bolder" }}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Dolorem lorem lorem34
              </p>
            </div>
          </div>
          <div
            className="cardsparent"
            style={{
              display: "flex",
              flexWrap: "wrap",
              position: "absolute",
              justifyContent: "center",
              alignItems: "center",
              top: "45%",
              left: "38%",
              right: "",
              width: "800px",
              height: "280px",
              // border: "2px solid black",
            }}
          >
            <div className="animationbg" style={sttyle}></div>
            {/* <MainCards data={props.data} /> */}
            <TestCard
              data={props.data}
              setAngle={setAngle}
              angle={angle}
              setLeft={setLeft}
            />

            <div className="rotate" style={stylle}>
              <img src={require("../assets/burger1.png")} alt="" />
              <img src={require("../assets/pizza1.png")} alt="" />
              <img src={require("../assets/drink1.png")} alt="" />
              <img src={require("../assets/snacks1.png")} alt="" />
            </div>
          </div>
        </div>
      </center>
    </>
  );
};

export default MainItems;
