import React from "react";
import "./vt.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Navbarmenu, TopBar } from "../../component";
import bg2 from "../../assets/bg2.png";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/logo.png";
import { IoIosArrowForward } from "@react-icons/all-files/io/IoIosArrowForward";
import { Button } from "react-bootstrap";
const VType = () => {
  let navigate = useNavigate(); 
  const goto =()=>{
    navigate('/question');
  }
  return (
    <div className="of">
      <Container fluid>
        <Navbar expand="lg" variant="light" bg="light">
         
            <Navbar.Brand href="#">
              <img src={logo} />
            </Navbar.Brand>
          
        </Navbar>
      </Container>
      <Row class="d-flex justify-content-center flex-column align-items-center gap-5 pt-5">
        <Col lg="12"className="d-flex justify-content-center flex-column align-items-center">
          <div onClick={goto} className="d-flex justify-content-between  align-items-center ww">
            <div>
              <h3>Jeff </h3>
              
            </div>
           
            <div>
              <IoIosArrowForward className="iconcolor" />
            </div>
          </div>
        </Col>
      
      </Row>
    </div>
  );
};

export default VType;
