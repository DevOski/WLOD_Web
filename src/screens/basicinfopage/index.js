import React from "react";
import logo from "../../assets/logo.png";
import Navbar from "react-bootstrap/Navbar";
import { Button, Col, Container, Row } from "react-bootstrap"
import './basic.css';
import Form from 'react-bootstrap/Form';
const Basic = () => {
  return (
    <>
      <Navbar expand="lg" variant="light" bg="light">
        <Container fluid>
          <Navbar.Brand href="#">
            <img style={{ width: "50%" }} src={logo} />
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Container className="pad">
      <form>
        <h3>Sign Up</h3>
        <div className="mb-3">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
          />
        </div>
        <div className="mb-3">
          <label>Last name</label>
          <input type="text" className="form-control" placeholder="Last name" />
        </div>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
     
 
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p>
      </form>

        {/* <Row className="d-flex justify-content-center ">
        <h2 className="d-flex justify-content-center wo">Basic Info</h2>
          <Col lg='5'className="d-flex justify-content-center align-items-center flex-column bg2">
            <div lg='10' className="d-flex justify-content-center align-items-center flex-column">
                <h2>Set Up Your Profile</h2>
                <p>Let’s get started with some basic information</p>
            </div>
            <div className="d-flex justify-content-center  flex-column wi">
                <label>First Name</label>
                <input className="input" type='first name' placeholder="first name"/>
            </div>
            <div className="d-flex justify-content-center  flex-column wi">
                <label>Middle Name (optional)</label>
                <input  className="input" type='first name' placeholder="Middle Name (optional)"/>
            </div>
            <div className="d-flex justify-content-center  flex-column wi">
                <label>Last Name</label>
                <input className="input" type='first name' placeholder="Last Name"/>
            </div>
            <div className="d-flex justify-content-between f2">
            <div className="d-flex justify-content-center  flex-column  ">
                <label>Phone Number</label>
                <input className="input2" type='first name' placeholder="Last Name"/>
            </div>
            
           
            <div className="d-flex justify-content-center  flex-column ">
                <label>Type</label>
                <input className="input2" type='first name' placeholder="Last Name"/>
            </div>
            </div>
            <div className="d-flex justify-content-center  flex-column wi">
                <label> Marital Status:</label>
                <input className="input" type='first name' placeholder="Last Name"/>
            </div>
            <div className="d-flex justify-content-center  flex-column wi">
                <label> Occupation</label>
                <input className="input" type='first name' placeholder="Last Name"/>
            </div>
            <div className="d-flex justify-content-center  flex-column wi">
                <label>  Work Hours:</label>
                <input className="input" type='first name' placeholder="Last Name"/>
            </div>
            <div className="d-flex justify-content-center  flex-column wi">
                <label> Highest Level of Education:</label>
                <input className="input" type='first name' placeholder="Last Name"/>
            </div>
           
            <div lg="6" className="fl flex-column">
            <label style={{paddingbottom:"1%"}}>Primary Language </label>
           <div className='fl justify-content-space-between' > 
           {['checkbox',].map((type) => (
        <div key={`default-${type}`} className="mb-3">
          <Form.Check 
            type={type}
            // id={`default-${type}`}
            label={`Male `}
          /></div>))}
              {['checkbox',].map((type) => (
        <div key={`default-${type}`} className="mb-3">
          <Form.Check 
            type={type}
            // id={`default-${type}`}
            label={`Male `}
          /></div>))}
              {['checkbox',].map((type) => (
        <div key={`default-${type}`} className="mb-3">
          <Form.Check 
            type={type}
            // id={`default-${type}`}
            label={`Male `}
          /></div>))}
           </div>
            </div>
            <div lg="6" className="fl flex-column">
            <label style={{paddingbottom:"1%"}}>Smoking status:  </label>
           <div className='fl justify-content-space-between' > 
           {['checkbox',].map((type) => (
        <div key={`default-${type}`} className="mb-3">
          <Form.Check 
            type={type}
            // id={`default-${type}`}
            label={`Male `}
          /></div>))}
              {['checkbox',].map((type) => (
        <div key={`default-${type}`} className="mb-3">
          <Form.Check 
            type={type}
            // id={`default-${type}`}
            label={`Male `}
          /></div>))}
              {['checkbox',].map((type) => (
        <div key={`default-${type}`} className="mb-3">
          <Form.Check 
            type={type}
            // id={`default-${type}`}
            label={`Male `}
          /></div>))}
           </div>
            </div>
            <div lg="6" className="fl">
            {['checkbox',].map((type) => (
        <div key={`default-${type}`} className="mb-3">
          <Form.Check 
            type={type}
            // id={`default-${type}`}
            label={`Male `}
          /></div>))}
              {['checkbox',].map((type) => (
        <div key={`default-${type}`} className="mb-3">
          <Form.Check 
            type={type}
            // id={`default-${type}`}
            label={`Male `}
          /></div>))}
              {['checkbox',].map((type) => (
        <div key={`default-${type}`} className="mb-3">
          <Form.Check 
            type={type}
            // id={`default-${type}`}
            label={`Male `}
          /></div>))}
            </div>
            <div className="d-flex justify-content-center align-items-center ">
                <p className="pp">
                By providing your mobile number, you give us permission to contact you via text. View Terms
                </p>
            </div>
            <div className="d-flex justify-content-center align-items-center mt-10 wiiii ">
               <Button className="bu">Continue</Button>
            </div>
          </Col>
        </Row> */}
      </Container>
    </>
  );
};

export default Basic;
