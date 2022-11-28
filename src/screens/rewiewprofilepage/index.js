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
const Rewiewpage = () => {
  let navigate = useNavigate(); 
  const goto =()=>{
    navigate('/paybutton');
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
        <Col lg="12"className="d-flex justify-content-center flex-column align-items-center pb-5">
          <div  className="d-flex justify-content-between  align-items-center ww">
            <div>
              <h3>Review your Health Profile </h3>
              
            </div>
           
           
          </div>
          <div  className="d-flex justify-content-between  align-items-center ww">
            <div>
              <h4>Question </h4>
              <p>Answer</p>
              
            </div>
           
           
          </div>
          <div  className="d-flex justify-content-between  align-items-center ww">
            <div>
            <h4>Question </h4>
              <p>Answer</p>
              
            </div>
           
           
          </div>
          <div  className="d-flex justify-content-between  align-items-center ww">
            <div>
              <h4>Question </h4>
              <p>Answer</p>
              
            </div>
           
           
          </div>
          <div  className="d-flex justify-content-between  align-items-center ww">
            <div>
              <h4>Question </h4>
              <p>Answer</p>
              
            </div>
           
           
          </div>
          <div  className="d-flex justify-content-between  align-items-center ww ">
            <div>
              <h4>Question </h4>
              <p>Answer</p>
              
            </div>
           
           
          </div>
          <div  className="d-flex justify-content-center  align-items-center  ">
          
             <Button className="reviewbutton" onClick={goto}>submit</Button>
              
            
           
           
          </div>

        </Col>
      
      </Row>
    </div>
  );
};

export default Rewiewpage;
