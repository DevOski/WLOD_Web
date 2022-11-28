import React, { useState } from "react";
import "./Siging.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Navbarmenu, TopBar } from "../../component";
import bg2 from "../../assets/bg2.png";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/logo.png";
const Siging = () => {
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
   if(email && password){
    navigate('/home');
    
   }
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
      <div className='cen'>
        <p className='well'>Welcome</p>
      </div>

      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign in to your account</h3>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
                onChange={handleChangeemail}
                value={email}
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                onChange={handleChangepass}
                value={password}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button  onClick={Sigin} className="btn btn-primary">
                Submit
              </button>
              
            </div>
            <p className="forgot-password text-right mt-2">
              Forgot <a href="/forget">password?</a>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Siging;
