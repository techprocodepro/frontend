import React from "react";
import Home from "./components/Home";

import data from "./api";


const MainComponent = () => {
  return (
    <div className="main">
      <Home data={data} />
    </div>
  );
};

export default MainComponent;
