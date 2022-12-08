import { useState, CSSProperties } from "react";
import "./error.css";
import MoonLoader from "react-spinners/MoonLoader";
import { Button } from "react-bootstrap";
const Error2 = ({onClick,tittle}) => {
  return (
    <div className="container-fluid d-flex flex-column justify-content-center align-items-center overlay">
      {/* <h2 style={{color:'#fff'}}>Opps</h2> */}
      <h2 style={{color:'#fff'}}>{tittle}</h2>
      <div className="butwidth">
      <Button onClick={onClick}>ok</Button>
      </div>
    </div>
  );
};

export default Error2;
