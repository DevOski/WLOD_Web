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
const Confirmpay = () => {
  let navigate = useNavigate(); 
  const goto =()=>{
    navigate('/question');
  }
  return (
      <Container fluid>
    <div className="of">
        <Navbar expand="lg" variant="light" bg="light">
         
            <Navbar.Brand href="#">
              <img src={logo} />
            </Navbar.Brand>
          
        </Navbar>
      <Row class="d-flex justify-content-center flex-column align-items-center gap-5 pt-5">
        <Col lg="12"className="d-flex justify-content-center flex-column align-items-center">
          <div  className="d-flex justify-content-center flex-column   ww">
            <div className="indi">
              <h5 className="CAP">ADD PAYMENT </h5>
              <input type='text' className="in" placeholder="Add your payment type here"/>
            </div>
            <div className="indi">
              <h5 className="CAP" >Coupon </h5>
              <input type='text' className="in" placeholder="Coupon"/>
            </div>
            <div className="indi">
              <h5 className="CAP">Your cost </h5>
              <p>25$</p>
            </div>
            <div>
              <Button>Confirm and pay</Button>
            </div>
           
           
          </div>
        </Col>
      
      </Row>
    </div>
      </Container>
  );
};

export default Confirmpay;
