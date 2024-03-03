import React from "react";
import SpecificCards from "./SpecificCards";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";

const SpecificItems = (props) => {
    var a = useParams();
  return (<>
    <Navbar/>
    <center>
      <h1 className="homeheading">specific Items</h1>
      <div
       style={{
         display: "flex",
         flexWrap:"wrap",
         position: "relative",
         justifyContent: "center",
         justifyItems: "center",
         top: "150px",
        }}>
          
      <SpecificCards data ={props.data[a.index]}  style={{display:"flex"}}/>
      </div>
    </center>

        </>
  );
};

export default SpecificItems;
