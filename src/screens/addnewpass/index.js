import React, { useState } from "react";
import "./addnew.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Navbarmenu, TopBar } from "../../component";
import bg2 from "../../assets/bg2.png";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/logo.png";
const Addnew = () => {
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
  const Sigin=()=>{
   
    navigate('/sigin');
    
 
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
         

           <div className="boxadd"> 
           <label>New Password</label>
            <input type='text' placeholder="enter your email" className="forgetinput"/>
            <label>Confirm Password</label>
            <input type='text' placeholder="enter your email" className="forgetinput"/>
            
            <button onClick={Sigin} className="newpassbutt">Submit</button>
           </div>
        </Col>
      </Row>

      
    </>
  );
};

export default Addnew;
