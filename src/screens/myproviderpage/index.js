import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import book from "../../assets/book.png";
import Nav from 'react-bootstrap/Nav';
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Button, Col, Container, Row } from "react-bootstrap";
import "./provider.css";
import Form from "react-bootstrap/Form";
// import Button from 'react-bootstrap/Button';
import Card from "react-bootstrap/Card";
import { MdExpandLess } from "@react-icons/all-files/md/MdExpandLess";
import { GiHamburgerMenu } from "@react-icons/all-files/gi/GiHamburgerMenu";
import { BasicExample, CardHome, SideBar, Visitcom } from "../../component";
import { Link } from "react-router-dom";

// function getWindowDimensions() {
//   const { innerWidth: width, innerHeight: height } = window;
//   return {
//     width,
//     height
//   };
// }

//  function useWindowDimensions() {
//   const [windowDimensions, setWindowDimensions] = useState(
//     getWindowDimensions()
//   );

//   useEffect(() => {
//     function handleResize() {
//       setWindowDimensions(getWindowDimensions());
//     }

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return windowDimensions;
// }

const Provider = () => {
  const [show, setshow] = useState(false);
  const [drawer, setdrawer] = useState(true);
  const [Visit, setVisit] = useState("");
  const [trainer, settrainer] = useState();
  const [Document, setDocument] = useState();
  const [Message, setMessage] = useState();
  const [home, sethome] = useState("");
  const open = () => {
    setshow(!show);
  };
  const opendarwer = () => {
    setdrawer(!drawer);
  };
  const visit = () => {
    setVisit("'0'");
  };
  return (
    <div className="wi55" fluid>
       <BasicExample/>
      {/* <Navbar variant="light" bg="light" className="main-header">
        <Navbar.Brand href="#">
          <img className="main-logo" src={logo} />
        </Navbar.Brand>
        <div className="nav-links">
        <Nav.Link href="https://weightlossondemand.com/">Home</Nav.Link>
        <Nav.Link href="https://weightlossondemand.com/services" className="center-link">Services</Nav.Link>
        <Nav.Link href="https://weightlossondemand.com/contact-us">Contact Us</Nav.Link>
        </div>
        
      </Navbar> */}

      <Row>
        <Col lg="3">
        <SideBar/>
        </Col>
        <Col lg="9">
          <div className={drawer ? "vish" : "vish2"}>
            <div className="divprov">
            <h3 style={{color: "#be1d2d"}}>My Favorite consultants</h3>
            <p>
              When you give your consultant a positive rating, we'll automatically
              add them to your favorites list. Return here to see if any of your
              favorite consultants are currently online, or to schedule a sessions
              with them directly.
            </p>
            <p>No favorite consultant.</p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Provider;
