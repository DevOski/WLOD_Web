import { useState, CSSProperties } from "react";
import "./loder.css";
import MoonLoader from "react-spinners/MoonLoader";
const Loader = () => {
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center overlay">
      <MoonLoader color="#fff" size={60} className="loader-icon"/>
    </div>
  );
};

export default Loader;
