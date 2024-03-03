import React from "react";
import SpecificCards from "./SpecificCards";
import { useSelector } from "react-redux";
import CartLogo from "./CartLogo";

const Cart = (props) => {
  const cartItems = useSelector((state) => state);
  const sttyle = {
    boxShadow: "none",
    background: "#ffffff",
    border: "1px solid #000000",
  };
  return (
    <>
      <div
        style={{
          position: "absolute",
          height: "100vh",
          width: "100vw",
          // backgroundColor: "white",
          bottom: "0px",
          left: "0px",
          zIndex: "50",
          backgroundColor: "rgba(0, 0, 0, 0.01)",
          backdropFilter: "blur(2px)",
        }}
        onClick={() => props.setClick(false)}
      ></div>
      <div className="cartlist">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            width: "100%",
          }}
        >
          <div style={{ position: "relative", right: "498px", bottom: "40px" }}>
            <CartLogo />
          </div>
          {/* <button className="proceed" style={{ position: "absolute", right:"100px", top:"30px" }}>
            proceed
          </button> */}
          <div onClick={() => props.setClick(false)}>
            <img
              src={require("../assets/closeIcon.png")}
              style={{ width: "20px", padding: "20px 20px 0px 0px" }}
              alt=""
            />
          </div>
        </div>
        {cartItems.length === 0 ? (
          <h1 style={{ color: "grey", margin: "8% auto", fontSize: "50px" }}>
            NO ITEMS IN CART
          </h1>
        ) : (
          <>
            <SpecificCards sttyle={sttyle} data={cartItems} />
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
