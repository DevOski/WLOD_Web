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
  const goto = () => {
    navigate("/tl");
  };
  const gotodate = () => {
    navigate("/apointmentdate");
  };

  return (
    <div className="of">
      <BasicExample />
      <Row class="d-flex justify-content-center flex-column align-items-center  pt-10 marigtop">
        <Col
          lg="12"
          className="d-flex justify-content-center flex-column align-items-center mt-5 ">
<div className="bookseebuttdiv">

<Button onClick={goto}> 
Choose Consultant
</Button>
</div>
<div className="bookseebuttdiv">

<Button onClick={gotodate}> 
Choose Time
</Button>
</div>

          {/* <div className="divvbut">
          <Button
            onClick={goto}
            className="d-flex justify-content-center align-items-center "
          >
              <p style={{ color: "#fff",alignSelf:"center" }}>Choose Consultant</p>
          </Button>
            </div>
          <div className="divvbut">

          <Button
            onClick={gotodate}
            className="d-flex justify-content-center align-items-center"
          >
              <p style={{ color: "#fff", }}>Choose Time</p>
          </Button>
            </div> */}
        </Col>
      </Row>
    </div>
  );
};

export default SessionBook;
