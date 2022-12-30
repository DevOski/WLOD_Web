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
      <BasicExample />

      <Row className="d-flex justify-content-center flex-column align-items-center gap-5 pt-5">
        <Col
          lg="12"
          className="d-flex justify-content-center flex-column align-items-center"
        >
          <Card
            style={{
              width: "38rem",
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
      </Row>
      {loader && <Loader />}
      {error && <Error onClick={Close} tittle={errorMessage} />}
    </div>
  );
};

export default ThankYou;
