import React, { useState } from "react";
import "./select.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Navbarmenu, TopBar } from "../../component";
import bg2 from "../../assets/bg2.png";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/logo.png";
// import { format } from "date-fns";
// import { enGB } from "date-fns/locale";
// import { DatePickerCalendar } from "react-nice-dates";
// import "react-nice-dates/build/style.css";

const SelectDatePage = () => {
  // const [date, setDate] = useState();
  let navigate = useNavigate();
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");
  const handleChangeemail = (event) => {
    setemail(event.target.value);

    console.log("value is:", event.target.value);
  };
  const handleChangepass = (event) => {
    setpassword(event.target.value);

    // console.log('value is:', event.target.value);
  };
  const Reason = () => {
  
      navigate("/resonfor");
  
  };
  return (
    <>
      <Container fluid>
        <Navbar expand="lg" variant="light" bg="light">
          <Container>
            <Navbar.Brand href="#">
              <img className="header-logo" src={logo} />
            </Navbar.Brand>
          </Container>
        </Navbar>
      </Container>
      <Row>
        <Col lg="10">
          <div className="boxadd">
            <h5>OK, got it!</h5>
          </div>
        </Col>
        <Col lg='12' className="d-flex justify-content-center">
        <div className="selectdate">
          <div className="mainbox">
            <div className="inner">
              <p className="tex">Your appointment will start</p>
              <p className="tex">between 12:15 and 12:30am on Friday, December 9th</p>

            </div>
            <div className="inner2">
            <p className="tex2">Next, we need to ask a few questions to get you the best care.</p>
              <p className="tex2">We'll hold your time for the next 20 minutes.</p>
            </div>

          </div>
          <div className="nextbuttonclass">
            <button className="nextbut" onClick={Reason} >Next</button>
          </div>

     
    
</div>
        </Col>
      </Row>
    </>
  );
};

export default SelectDatePage;
