import React, { useState } from "react";
import "./verify.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Navbarmenu, TopBar } from "../../component";
import bg2 from "../../assets/bg2.png";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/logo.png";
import VerificationInput from "react-verification-input";
const VerificationCode = () => {
  let navigate = useNavigate(); 
  const [Verification, setVerification] = useState('')
  const [code, setcode] = useState('')
 
  const submit=()=>{
    navigate('/newpass')
  }
  return (
    <>
      <Container fluid>
        <Navbar expand="lg" variant="light" bg="light">
          <Container>
            <Navbar.Brand href="#"><img className="header-logo" src={logo}/></Navbar.Brand>
          </Container>
        </Navbar>
      </Container>
      <Row>
        <Col lg='12'>
           <div className="box1">
           <h6>Enter your Verificationcode</h6>
           </div>

           <div className="box2"> 
           <div className="d-flex justify-content-center">

           <VerificationInput
           length={4}
           onChange={(text)=>{setcode(text)}}
          //  validChars={0-9}
           />
          </div>
           {/* <div className="d-flex justify-content-center">
           <input type='text' placeholder="enter your Code here" className="forgetinput1"
             onChange={(event) => setVerification(event.target.value)}
            />
            <input type='text' placeholder="enter your Code here" className="forgetinput1"
             onChange={(event) => setVerification(event.target.value)}
            />
            <input type='text' placeholder="enter your Code here" className="forgetinput1"
             onChange={(event) => setVerification(event.target.value)}
            />
            <input type='text' placeholder="enter your Code here" className="forgetinput1"
             onChange={(event) => setVerification(event.target.value)}
            />
           </div> */}
            <button  className="recoverbutt" onClick={submit}>submit</button>
           </div>
        </Col>
      </Row>

      
    </>
  );
};

export default VerificationCode;
