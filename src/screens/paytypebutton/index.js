import React from "react";
import "./paytype.css";
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
const PayButtonTyp = () => {
  let navigate = useNavigate();
  const goto = () => {
    navigate("/Confirmpay");
  };
  const gotoConfirmpay = () => {
    navigate("/cuponpage");
  };

  return (
    <div className="of">
      {/* <Container fluid>
        <Navbar expand="lg" variant="light" bg="light">
          <Navbar.Brand href="#">
            <img className="header-logo" src={logo} />
          </Navbar.Brand>
        </Navbar>
      </Container> */}
      <BasicExample/>
      <Row class="d-flex justify-content-center flex-column align-items-center gap-5 pt-5">
        <Col
          lg="12"
          className="d-flex justify-content-center flex-column align-items-center pt-5"
        >
          <button className="paybutt" onClick={goto}>
            Add Payment{" "}
          </button>
          <button className="paybutt" onClick={gotoConfirmpay}>
            Apply Coupon{" "}
          </button>
        </Col>
      </Row>
    </div>
  );
};

export default PayButtonTyp;
