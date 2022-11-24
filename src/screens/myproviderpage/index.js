import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import book from "../../assets/book.png";
import Navbar from "react-bootstrap/Navbar";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./provider.css";
import Form from "react-bootstrap/Form";
// import Button from 'react-bootstrap/Button';
import Card from "react-bootstrap/Card";
import { MdExpandLess } from "@react-icons/all-files/md/MdExpandLess";
import { GiHamburgerMenu } from "@react-icons/all-files/gi/GiHamburgerMenu";
import { CardHome, Visitcom } from "../../component";
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
      <Navbar variant="light" bg="light">
        <Navbar.Brand href="#">
          <img style={{ width: "50%" }} src={logo} />
        </Navbar.Brand>
      </Navbar>
      <Row>
        <Col lg="3">
          <div
            className={!drawer ? "maindeowercontainer2" : "maindeowercontainer"}
          >
            <GiHamburgerMenu onClick={opendarwer} className="ham" />

            <div className="cent">
              <div
                className="back"
              
              >
               <Link className="tit" to="/home">
                  home
                </Link>
              </div>
            </div>
            <div className="cent">
              <div className="back2">
                <p className="tit">my Health</p>
                <p>
                  <MdExpandLess onClick={open} className="expand" />
                </p>
              </div>
            </div>
            {!show ? (
              <div className="cent2">
                <div className="backkk"></div>
                <div className="back3">
                <Link className="tit" to="/visit">
                Sessions
                  </Link>

                  <Link className="tit" to="/provider">
                    My consultants
                  </Link>
                  <Link className="tit" to="/document">
                    Document
                  </Link>
                  <Link className="tit" to="/provider">
                    Message
                  </Link>
                </div>
              </div>
            ) : null}
          </div>
        </Col>
        <Col lg="9">
          <div className={drawer ? "vish" : "vish2"}>
            <div className="divprov">
            <h3>My Favorite consultants</h3>
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
