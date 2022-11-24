import React from "react";
import "./q.css";
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
import Form from 'react-bootstrap/Form';
const Questionpage = () => {
  let navigate = useNavigate(); 
  const goto =()=>{
    navigate('/question2');
  }
  return (
    <>
      <Container fluid>
        <Navbar expand="lg" variant="light" bg="light">
          <Container>
            <Navbar.Brand href="#">
              <img src={logo} />
            </Navbar.Brand>
          </Container>
        </Navbar>
      </Container>
      <Row class="d-flex justify-content-center flex-column align-items-center  pt-5 pb-5">
        <Col lg="12"className="d-flex justify-content-center flex-column align-items-center">
          <div className="d-flex justify-content-between   align-items-center ww">
            
        <p>Question no 1</p>
          </div>
          <div className="d-flex justify-content-between  flex-column  align-items-center ww">
          <div className="d-flex justify-content-between  align-items-center  ww">
          <div>
              <p>reaon</p>
            </div>
          <div>
          {['checkbox', ].map((type) => (
        <div key={`default-${type}`} className="mb-3">
          <Form.Check 
            type={type}
            id={`default-${type}`}
            // label={`default ${type}`}
          />      
          </div>))}
          </div>
          </div>
          <div className="d-flex justify-content-between  align-items-center ww">
          <div>
              <p>reason</p>
            </div>
          <div>
          {['checkbox',].map((type) => (
        <div key={`default-${type}`} className="mb-3">
          <Form.Check 
            type={type}
            id={`default-${type}`}
            // label={`default ${type}`}
          />      
          </div>))}
          </div>
          </div>
          <div className="d-flex justify-content-between  align-items-center ww">
          <div>
              <p>reason</p>
            </div>
          <div>
          {['checkbox',].map((type) => (
        <div key={`default-${type}`} className="mb-3">
          <Form.Check 
            type={type}
            id={`default-${type}`}
            // label={`default ${type}`}
          />      
          </div>))}
          </div>
          </div>
          <div >

          <Button className="bdiv" onClick={goto}>submit</Button>
          </div>
          </div>
        </Col>
       
      </Row> 
    </>
  );
};

export default Questionpage;
