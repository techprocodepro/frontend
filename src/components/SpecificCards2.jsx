import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { addAmount, subAmount } from "../redux/action-creators";

const SpecificCards2 = (props) => {
  const data = props.data;
  const dispatch = useDispatch();
  
    // order = useSelector(state => state[state.findIndex(item => item.name===data.name)].order)
    const order = useSelector((state) =>
    state.find((item) => item.name === data.name)?.order || 0
  );
  const handleAdd = (data) => {
    dispatch(addAmount(data));
  };

  const handleSub = (data) => {
    dispatch(subAmount(data));
  };

  return (
    <div className="maincards" style={props.sttyle}>
      <img className="mainimg" src={require("../assets/" + data.img)} alt="" />
      <div className="cardmiddiv">
        <h4>{data.name}</h4>
        <p>Lorem, ipsum dolor.</p>
        <div>
          <p>Starts from: </p>
          <h3>{data.price} price</h3>
          <div className="btnparent">
            <div className="addbtn" onClick={() => handleAdd(data)}>
              +
            </div>
            <div className="subbtn" onClick={() => handleSub(data)}>
              -
            </div>
          </div>
          <h3>{order}</h3>
        </div>
      </div>
    </div>
  );
};

export default SpecificCards2;
