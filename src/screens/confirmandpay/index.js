import React from "react";
import "./confirmandpay.css";
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
const ConfirmAndPay = () => {
  let navigate = useNavigate();
  const goto = () => {
    navigate("/Videocall");
  };
  const gotoConfirmpay = () => {
    navigate("/cuponpage");
  };

  return (
    <div className="of">
     
      <BasicExample/>
      <Row class="d-flex justify-content-center flex-column align-items-center gap-5 pt-5">
        <Col
          lg="12"
          className="d-flex justify-content-center flex-column align-items-center pt-5"
        >
     
          <button className="paybutt1" >
           42424242424242424
          </button>
          <button className="paybutt1" >
            coupon
          </button>
          <button className="paybutt12" >
            <p className="cost">Cost</p> <p className="cost"> 20$</p>   
          </button>
          <button className="paybutt1" onClick={goto} >
            Confirm and Pay 
          </button>
       
         
        </Col>
      </Row>
    </div>
  );
};

export default ConfirmAndPay;
