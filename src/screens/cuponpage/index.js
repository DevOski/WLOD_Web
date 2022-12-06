import React, { useState } from "react";
import "./vt.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Navbarmenu, TopBar } from "../../component";
import bg2 from "../../assets/bg2.png";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/logo.png";
// import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { IoIosArrowForward } from "@react-icons/all-files/io/IoIosArrowForward";
import { Button } from "react-bootstrap";
const Cupon = () => {
  let navigate = useNavigate(); 
  const [ApplyCupon, setApplyCupon] = useState('')
  const goto =()=>{
    navigate('/question');
  }
  return (
      <Container fluid>
    <div className="of">
        <Navbar expand="lg" variant="light" bg="light">
         
            <Navbar.Brand href="#">
              <img className="header-logo" src={logo} />
            </Navbar.Brand>
          
        </Navbar>
      <Row class="d-flex justify-content-center  align-items-center gap-5 pt-5">

     <Col lg='12' className="d-flex justify-content-center  align-items-center coupon-col">
     <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Apply Cupon</Form.Label>
        <Form.Control type="numberic" placeholder="Add Cupon" onChange={event =>  setApplyCupon(event.target.value)} />
        <Form.Text className="text-muted">
          Add your Cupon Number Here
        </Form.Text>
      </Form.Group>

     
      <Button variant="primary"  className="coupon-submit">
        Submit
      </Button>
    </Form>
     </Col>

       
      
      </Row>
    </div>
      </Container>
  );
};

export default Cupon;
