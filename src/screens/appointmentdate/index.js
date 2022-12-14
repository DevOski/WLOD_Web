import React, { useState } from "react";
import "./appoint.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BasicExample, Navbarmenu, TopBar } from "../../component";
import bg2 from "../../assets/bg2.png";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/logo.png";
import { format } from "date-fns";
import { enGB } from "date-fns/locale";
import { DatePickerCalendar } from "react-nice-dates";
import "react-nice-dates/build/style.css";

const Appointmentdate = () => {
  const [date, setDate] = useState();
  // const [date, setDate] = useState();
  const [calendshow, setcalendshow] = useState(true)
  const [slot, setSlot] = useState([]);
  const [trainer, setTrainer] = useState();
  const Show =()=>{
    setcalendshow(!calendshow)
  }
  const onSelectDatee = () => {
    if (date) {
      navigate("/question2");
    }
  };
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
  const onSelectDate = () => {
    if (date) {
      navigate("/selectdatepage");
    }
  };
  console.log(date,'=====>');
  return (
    <>
      {/* <Container fluid>
        <Navbar expand="lg" variant="light" bg="light">
          <Container>
            <Navbar.Brand href="#">
              <img src={logo} />
            </Navbar.Brand>
          </Container>
        </Navbar>
      </Container> */}
      <BasicExample/>
      <Row>
        <Col lg="10">
          <div className="boxadd">
            <h5>Please choose an appointment window:</h5>
          </div>
        </Col>
        {/* <Col lg="12" className="d-flex justify-content-center">
          <div className="calender">
            <p>
              Selected date:{" "}
              {date ? format(date, "dd MMM yyyy", { locale: enGB }) : "none"}.
            </p>
            <DatePickerCalendar
              date={date}
              onDateChange={setDate}
              locale={enGB}
            />
          </div>
        </Col> */}
        {/* <div className="classextbutton">
            <button className="newpassbutt" onClick={onSelectDate}>Next</button>
          </div> */}
      </Row>
      <Row class="d-flex justify-content-center flex-column align-items-center gap-5 pt-5">
        <Col lg="12"className="d-flex justify-content-center align-items-center">
         <div className="calbox" onClick={Show} ><p className="caltext">Calender</p></div>
         <div className="slotbox" onClick={Show}  ><p className="caltext">List</p></div>
        </Col>
      
      </Row>
      <Row>
      <Col lg="12" className="d-flex justify-content-center">
{calendshow ?<div className="calender">
            <p>
              Selected date:{" "}
              {date ? format(date, "dd MMM yyyy", { locale: enGB }) : "none"}.
            </p>
            <DatePickerCalendar
              date={date}
              onDateChange={setDate}
              locale={enGB}
            />
          </div>:<div className="slotdiv">
            <p className="timeslot">Time:{slot}</p>
          </div>}

          
          
          
        </Col>
        <div className="classextbutton">
            <button className="newpassbutt" onClick={onSelectDatee}>Next</button>
          </div>
      </Row>
    </>
  );
};

export default Appointmentdate;
