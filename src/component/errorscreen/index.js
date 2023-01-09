import { useState, CSSProperties } from "react";
import "./error.css";
import MoonLoader from "react-spinners/MoonLoader";
import { Button } from "react-bootstrap";
const Error = ({ onClick, tittle, congrats,rating }) => {
  return (
    <div className="container-fluid d-flex flex-column justify-content-center align-items-center overlay">
      <h2 style={{ color: "#fff" }}>
        {congrats ? "Congratulations!" : "Oops!"}
        {/* {rating &&  "Your rating is submitted!"} */}
      </h2>
      <h4 style={{ color: "#fff" }}>{tittle}</h4>
      <div className="butwidth">
        <Button onClick={onClick}>Ok</Button>
      </div>
    </div>
  );
};

export default Error;
