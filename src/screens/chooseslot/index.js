import React, { useState } from "react";
import "./chooseslot.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Navbarmenu, TopBar } from "../../component";
import bg2 from "../../assets/bg2.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/logo.png";
import { IoIosArrowForward } from "@react-icons/all-files/io/IoIosArrowForward";
import { Button } from "react-bootstrap";
import { format } from "date-fns";
import { enGB } from "date-fns/locale";
import { DatePickerCalendar } from "react-nice-dates";
import "react-nice-dates/build/style.css";
import { selectedTrainer } from "../../services/utilities/api";
import { useEffect } from "react";
const ChooseSlot = () => {
  const [date, setDate] = useState();
  const [calendshow, setcalendshow] = useState(true)
  const [slot, setSlot] = useState([]);
  const [trainer, setTrainer] = useState();
  const Show =()=>{
    setcalendshow(!calendshow)
  }
  const onSelectDate = () => {
    if (date) {
      navigate("/question2");
    }
  };
  const location=useLocation()
  
  
  
  useEffect(() => {
    // getTrainer();
  },[]);



  let navigate = useNavigate(); 
  return (
    <div className="of">
      <Container fluid>
        <Navbar expand="lg" variant="light" bg="light">
         
            <Navbar.Brand href="#">
              <img src={logo} />
            </Navbar.Brand>
          
        </Navbar>
      </Container>
      <Row class="d-flex justify-content-center flex-column align-items-center gap-5 pt-5">
        <Col lg="12"className="d-flex justify-content-center align-items-center">
         <div className="calbox" onClick={Show} ><p className="caltext">Calender</p></div>
         <div className="slotbox" onClick={Show}  ><p className="caltext">List</p></div>
        </Col>
      
      </Row>
      <Row>
      <Col lg="12" className="d-flex justify-content-center">
{!calendshow ?<div className="calender">
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
            <button className="newpassbutt" onClick={onSelectDate}>Next</button>
          </div>
      </Row>
    </div>
  );
};

export default ChooseSlot;
