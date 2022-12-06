import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import book from "../../assets/book.png";
import Navbar from "react-bootstrap/Navbar";
import { Button, Col, Container, Nav, Row } from "react-bootstrap";
import "./vi.css";
import Form from "react-bootstrap/Form";
// import Button from 'react-bootstrap/Button';
import Card from "react-bootstrap/Card";
import { MdExpandLess } from "@react-icons/all-files/md/MdExpandLess";
import { GiHamburgerMenu } from "@react-icons/all-files/gi/GiHamburgerMenu";
import { BasicExample, CardHome, Visitcom } from "../../component";
import { Link, useNavigate } from "react-router-dom";



const Visitpage = () => {
  let navigate = useNavigate();
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
  const goto =()=>{
    navigate('/booksession');
  }
  return (
    <div className="wi55" fluid>
       <BasicExample/>
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
                    My Consultants
                  </Link>
                  <Link className="tit" to="/document">
                    Document
                  </Link>
                  <Link className="tit" to="/chat">
                    Message
                  </Link>
                </div>
              </div>
            ) : null}
          </div>
        </Col>
        <Col lg="9">
          <div className={drawer?"vishpage":'vish2P'}>
            <div className="visitt">
              <p className="tit">SESSIONS REQUESTS</p>
            </div>
            <div className="visitt2">
              <p >No follow up requests</p>
            </div>
            <div className="visitt">
              <p className="tit">UPCOMING SESSIONS</p>
            </div>
            <div className="visitt2">
              <p >No upcoming sessions</p>
            </div>
            <div className="visitt">
              <p className="tit">Jeff PAST SESSIONS</p>
            </div>
            <div className="visitt2">
              <p>No past sessions</p>
            </div>
            <div className="visitt2but">
              <Button onClick={goto} className="bbbb visit-book-btn">Book a Sessions</Button>
            </div>
          </div>
          
        </Col>
       
      </Row>
    </div>
  );
};

export default Visitpage;
