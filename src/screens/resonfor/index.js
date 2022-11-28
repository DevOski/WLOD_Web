import React, { useState } from "react";
import "./reason.css";
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

const ReaonForVisit = () => {
  // const [date, setDate] = useState();
  let navigate = useNavigate();
  // 
  const GOtoQues = () => {
  
      navigate("/question");
    
  };
  return (
    <>
      <Container fluid>
        <Navbar expand="lg" variant="light" bg="light">
          <Container>
            <Navbar.Brand href="#">
              <img src={logo} />
            </Navbar.Brand>
          </Container>
        </Navbar>
      </Container>
      <Row>
        <Col lg="10">
          <div className="boxadd">
            <h4>What is the reason for this visit?</h4>
          </div>
        </Col>
        <Col lg='12' className="d-flex justify-content-center">
        <div className="selectdate">
          <div className="mainboxrr">
            <div className="innerre">
              <p className="texButrr" onClick={GOtoQues}> Weight Loss</p>
              <p className="texButrr" onClick={GOtoQues}> Body Bulding</p>
              <p className="texButrr" onClick={GOtoQues}> Zumba</p>
              

            </div>
            

          </div>
          {/* <div className="nextbuttonclass">
            <button className="nextbut">Next</button>
          </div> */}

     
    
</div>
        </Col>
      </Row>
    </>
  );
};

export default ReaonForVisit;
