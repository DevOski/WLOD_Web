import React, { useState } from "react";
import "./forpass.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Navbarmenu, TopBar } from "../../component";
import bg2 from "../../assets/bg2.png";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/logo.png";
const Forget = () => {
  let navigate = useNavigate(); 
  const [password, setpassword] = useState('');
const [email, setemail] = useState('')
  const handleChangeemail = event => {
    setemail(event.target.value);

    console.log('value is:', event.target.value);
  };
  const handleChangepass = event => {
    setpassword(event.target.value);

    // console.log('value is:', event.target.value);
  };
  const goNewpass=()=>{
  //  if(email && password){
    navigate('/newpass');
    
  //  }
  }
  return (
    <>
      <Container fluid>
        <Navbar expand="lg" variant="light" bg="light">
          <Container>
            <Navbar.Brand href="#"><img src={logo}/></Navbar.Brand>
          </Container>
        </Navbar>
      </Container>
      <Row>
        <Col lg='10'>
           <div className="box1">
           <h6>Enter your email address and we will send you a link to reset your password.</h6>
           </div>

           <div className="box2"> 
            <input type='text' placeholder="enter your email" className="forgetinput"/>
            <button onClick={goNewpass} className="recoverbutt">Recover My password </button>
           </div>
        </Col>
      </Row>

      
    </>
  );
};

export default Forget;
