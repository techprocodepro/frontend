import React from "react";
import MainItems from "./MainItems"
import { BrowserRouter, Routes, Route} from "react-router-dom"
import SpecificItems from "./SpecificItems"


const Home = (props) => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainItems data = {props.data} />}/>
      <Route path="/order/:index" element={<SpecificItems data = {props.data} />}/>
    </Routes>
    </BrowserRouter>
  );
};

export default Home;