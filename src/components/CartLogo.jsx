import { useState } from "react";
import React from "react";
import { useSelector } from "react-redux";
import Cart from "./Cart";

const CartLogo = () => {
  const orders = useSelector((state) => state.length);
  const [Click, setClick] = useState(false);
  const amount = useSelector((state) =>
    state.reduce((total, item) => total + item.order * item.price, 0)
  );

  return (
    <div>
      {Click ? (
        <Cart setClick={setClick} />
      ) : (
        <div className="cartlogo" onClick={() => setClick(true)}>
          <img src={require("../assets/cartLogoCyan.png")} alt="" />
          <h5 style={{ color: "white" }}>{amount} ₹ </h5>
          <div className="cartlabel">{orders}</div>
        </div>
      )}
    </div>
  );
};

export default CartLogo;
