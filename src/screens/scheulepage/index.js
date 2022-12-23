import React from "react";
import "./sc.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BasicExample, Navbarmenu, TopBar } from "../../component";
import bg2 from "../../assets/bg2.png";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/logo.png";
import { IoIosArrowForward } from "@react-icons/all-files/io/IoIosArrowForward";
import { Button } from "react-bootstrap";
const SessionBook = () => {
  let navigate = useNavigate(); 
  const goto =()=>{
    navigate('/tl');
  }
  const gotodate =()=>{
    navigate('/apointmentdate');
  }
  
  return (
    <div className="of">
      
      <BasicExample/>
      <Row class="d-flex justify-content-center flex-column align-items-center gap-5 pt-5">
        <Col lg="12"className="d-flex justify-content-center flex-column align-items-center">
              <button  onClick={goto} className="d-flex justify-content-center align-items-center ww2 ww3">
          {/* <div className="d-flex justify-content-center align-items-center ww2 ww3"> */}
            <div>

              <h3 style={{color:'#000'}}>Appointment By Provider</h3>
              
            </div>
              </button>
           
              <button  onClick={goto} className="d-flex justify-content-center align-items-center ww2 ww3">
          {/* <div className="d-flex justify-content-center align-items-center ww2 ww3"> */}
            <div>

              <h3 style={{color:'#000'}}>Appointment By Time</h3>
              
            </div>
              </button>
          {/* </div> */}
          {/* <div onClick={gotodate}  className="d-flex justify-content-center align-items-center ww2 ww3">
            <div>
              <h3 style={{color:'#000'}} >Appointment By Time</h3>
              
            </div>
           
           
          </div> */}
        </Col>
      
      </Row>
    </div>
  );
};

export default SessionBook;
