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
import { BasicExample, CardHome, SideBar, Visitcom } from "../../component";
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
       <Col>
        <SideBar/>
       </Col>
        
        <Col lg="9">
          <div className="vishpage">
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
