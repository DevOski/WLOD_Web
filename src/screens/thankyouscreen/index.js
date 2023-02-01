import React, { useEffect, useState } from "react";
import "./rat.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  BasicExample,
  Error,
  Loader,
  Navbarmenu,
  TopBar,
} from "../../component";
import bg2 from "../../assets/bg2.png";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import tr from "../../assets/tr.jpg";
import { AiOutlineStar } from "@react-icons/all-files/ai/AiOutlineStar";
import { Button } from "react-bootstrap";
import { useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getUser } from "../../services/utilities/api";
import moment from "moment";
import Card from "react-bootstrap/Card";
import StarRatings from 'react-star-ratings'
import NavSidebar from "../../component/navsidebar";
const ThankYou = () => { 
  const [rating, setrating] = useState(0);
  const [loader, setLoader] = useState("");
  const [error, seterror] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
const changrating=(newRating,name)=>{
  setrating(newRating)
}
  const Close = () => {
    seterror(false);
  };
  let navigate = useNavigate();
  const goto = () => {
    navigate('/')
  };

  return (
    <div className="of">
       <div className="navshow">
            <BasicExample/>
        </div>
        <div className="sidenavshow">
        <NavSidebar />
        </div>
        <div className="mobilediv">

      <Row className="d-flex justify-content-center flex-column align-items-center gap-5">
      <Col lg='4' md="3" sm="1"></Col>
        <Col lg='4' md="6" sm="10"
          className="d-flex justify-content-center flex-column align-items-center"
          >
          <Card
            style={{
              // width: "38rem",
              padding:'14%',
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              
            }}
          >
            <div style={{ width: "30%" }}>
              {/* <Card.Img
                style={{ width: "100%", height: "100%", borderRadius: "100px" }}
                variant="top"
                src={tr}
              /> */}
            </div>
            <Card.Title>Thank you for your visit</Card.Title>
           
            <Card.Body
              style={{
                width: "18rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button onClick={goto} variant="primary">Done</Button>
              
            </Card.Body>
          </Card>
        </Col>
      <Col lg='4' md="3" sm="1"></Col>

      </Row>
   </div>
      {loader && <Loader />}
      {error && <Error onClick={Close} tittle={errorMessage} />}
    </div>
  );
};

export default ThankYou;
