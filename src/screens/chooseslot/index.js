import React, { useState } from "react";
import "./chooseslot.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BasicExample, Navbarmenu, TopBar } from "../../component";
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
import {
  getSlotDate,
  getSlotTime,
  selectedTrainer,
} from "../../services/utilities/api";
import { useEffect } from "react";
import moment from "moment";
const ChooseSlot = () => {
  const [date, setDate] = useState();
  const [calendshow, setcalendshow] = useState(true);
  const [calendshowlist, setcalendshowlist] = useState(false);
  const [slot, setSlot] = useState([]);
  const [trainer, setTrainer] = useState();
  const [timeSlot, setTimeSlot] = useState([]);
  const [dateSlot, setDateSlot] = useState([]);
  const [currentDTime, setCurrentTime] = useState("");
  const [month, setMonth] = useState("");

  const [currentDate, setCurrentDate] = useState("");
  const [markedDates, setMarkedDates] = useState("");
  const Show = () => {
    setcalendshow(true);
    setcalendshowlist(false);
  };
  const Showlist = () => {
    setcalendshowlist(true);
    setcalendshow(false);
    getTimeSlots();
  };
  const onSelectDate = () => {
    if (date) {
      navigate("/question2");
    }
  };
  const location = useLocation();
  console.log(location.state.trainer, "slotwaliscreen====>trainer");
  useEffect(() => {
    var utc = new Date().toJSON().slice(0, 10).replace(/-/g, "-");
    setCurrentDate(utc);
    const time = new Date().getTime();
    let currentTime = `${moment(time).format("hh:mma")}`;
    console.log(currentTime);
    setCurrentTime(currentTime);
  }, []);

  const getSelectedDayEvents = (date) => {
    console.log(date, "====>date");
    setDate(date);
    let oneDate = moment(date, "DD-MM-YYYY");
    let monthName = oneDate.format("MMM");
    setMonth(monthName);
    let weekDayName = moment(date).format("ddd");
    // setDay(weekDayName);
    let markedDates = {};
    markedDates[date] = {
      selected: true,
      color: "#00B0BF",
      textColor: "#FFFFFF",
    };
    let serviceDate = moment(date);
    serviceDate = serviceDate.format("DD/MM/YYYY");
    console.log(serviceDate, "=====serviceDate");
    setMarkedDates(markedDates);

    let selectedDate = moment(date).format("DD/MM/YYYY");
    getAllDateSlots(selectedDate);
  };
  const getAllDateSlots = async (updatedDate) => {
    console.log("works---------------------->>>");
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      date: updatedDate,
      time: currentDTime,
    });
    console.log(raw);
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    fetch("http://alsyedmmtravel.com/api/all_trCalenderSlots", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log( result);
        setDateSlot(result.data);
        console.log("kch--------->>",result.data);
      })
      .catch((error) => console.log("error", error));
  };
  useEffect(() => {
    // getTrainer();
  }, []);

  const getDateSlots = async (date) => {
    console.log(currentDTime);

    try {
      let response = await getSlotDate(
        location.state.trainer.tr_id,
        date,
        currentDTime
      );
      setDateSlot(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getTimeSlots = async () => {
    try {
      // console.log('-----------?>',location.state.trainer.tr_id, currentDTime);
      let response = await getSlotTime(
        location.state.trainer.tr_id,
        currentDTime
      );
      // console.log(response.data.data, "====>slooottime");
      // console.log(response.data.data, "====>slooottime");
      setTimeSlot(response.data.data);
    } catch (error) {
      console.log(error);
    }
    // getAllSlotList();
    // if (route?.params?.from === 'All Trainer') {
    //
    // }
  };
  const getAllSlotList = async () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(`http://alsyedmmtravel.com/api/Slots/${currentDTime}`, requestOptions)
      .then((response) => response.json())

      .then((result) => {
        console.log("--------->>>>", result);
        setTimeSlot(result.data);
      })
      .catch((error) => console.log("error", error));
  };
  let navigate = useNavigate();
  return (
    <div className="of">
      {/* <Container fluid>
        <Navbar expand="lg" variant="light" bg="light">
          <Navbar.Brand href="#">
            <img src={logo} />
          </Navbar.Brand>
        </Navbar>
      </Container> */}
      <BasicExample />
      <Row class="d-flex justify-content-center flex-column align-items-center gap-5 pt-5">
        <Col
          lg="12"
          className="d-flex justify-content-center align-items-center"
        >
          <div className="calbox" onClick={Show}>
            <p className="caltext">Calender</p>
          </div>
          <div className="slotbox" onClick={Showlist}>
            <p className="caltext">List</p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg="12" className="d-flex justify-content-center">
          {calendshow && (
            <div className="calender">
              <p>
                Selected date:{" "}
                {date ? format(date, "dd MMM yyyy", { locale: enGB }) : "none"}.
              </p>
              <DatePickerCalendar
                date={date}
                onDateChange={getSelectedDayEvents}
                locale={enGB}
              />
              {dateSlot?.length ? (
                dateSlot.map((item,index)=>{
                  // console.log("dta",item);
                  return(
                  <div key={index} className="classextbuttonsl">
                    <p className="timeslot">Time:{item.sl_time}</p> 
                  </div>

                  )

                })
                // <div className="classextbutton">
                //   <button className="newpassbutt" onClick={onSelectDate}>
                //     Next
                //   </button>
                // </div>
              ) : (
                <div className="classextbutton">
                  <p>No record found</p>
                </div>
              )}
            </div>
          )}
          {calendshowlist && (
            <div className="slotdiv">
             {timeSlot.length ?  <p className="timeslot">Time:{slot}</p>  :<p className="timeslot">There is no slot</p>}
            </div>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default ChooseSlot;
