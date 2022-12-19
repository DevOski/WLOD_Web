import React, { useState } from "react";
import "./appoint.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BasicExample, Navbarmenu, TopBar } from "../../component";
import bg2 from "../../assets/bg2.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/logo.png";
import { format } from "date-fns";
import { enGB } from "date-fns/locale";
import { DatePickerCalendar } from "react-nice-dates";
import "react-nice-dates/build/style.css";
import moment from "moment";
import { getSlotDate, getSlotTime } from "../../services/utilities/api";
import { useEffect } from "react";

const Appointmentdate = () => {
  const location = useLocation();
  // console.log(location.state.trainer,'====>apointment');
  const [date, setDate] = useState();
  // const [date, setDate] = useState();
  const [calendshow, setcalendshow] = useState(true);
  const [slot, setSlot] = useState([]);
  const [trainer, setTrainer] = useState();
  const [timeSlot, setTimeSlot] = useState([]);
  const [dateSlot, setDateSlot] = useState([]);
  const [currentDTime, setCurrentTime] = useState("");
  const [currentDate, setCurrentDate] = useState("");
  const [markedDates, setMarkedDates] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [calendar, setCalendar] = useState(true);
  const [list, setList] = useState(false);
  const Show = () => {
    setcalendshow(!calendshow);
  };
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
  console.log(date, "=====>");

  const handleList = () => {
    setCalendar(false);
    setList(true);
    // getTimeSlots();
  };

  useEffect(() => {
    var utc = new Date().toJSON().slice(0, 10).replace(/-/g, "-");
    setCurrentDate(utc);
    const time = new Date().getTime();
    let currentTime = `${moment(time).format("hh:mma")}`;
    console.log(currentTime);
    setCurrentTime(currentTime);
  }, []);

  useEffect(() => {
    getAllSlotList();
  }, [list]);

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

  const getDateSlots = async date => {
    console.log(currentDTime);

    try {
      let response = await getSlotDate(
    // tr_id,
        date,
        currentDTime,
      );
      setDateSlot(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  // const getTimeSlots = async () => {
  //   try {
  //     let response = await getSlotTime(
  //       route?.params?.trainer?.tr_id,
  //       currentDTime,
  //     );
  //     console.log(response.data.data);
  //     setTimeSlot(response.data.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  //   if (route?.params?.from === 'All Trainer') {
  //     getAllSlotList();
  //   }
  // };

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
        console.log("kch--------->>", result);
        setDateSlot(result.data);
      })
      .catch((error) => console.log("error", error));
  };

  const getAllSlotList = async () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(`http://alsyedmmtravel.com/api/Slots/${currentDTime}`, requestOptions)
      .then((response) => response.json())

      .then((result) => {
        console.log("--------->>>>slot",result);
        setTimeSlot(result.data);
        console.log(timeSlot, "=>slofstatre");
      })
      .catch((error) => console.log("error", error));
  };

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
      <BasicExample />
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
        <Col
          lg="12"
          className="d-flex justify-content-center align-items-center"
        >
          <div className="calbox" onClick={Show}>
            <p className="caltext">Calender</p>
          </div>
          <div className="slotbox" onClick={Show}>
            <p className="caltext">List</p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg="12" className="d-flex justify-content-center">
          {calendshow ? (
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

              <div className="classextbutton">
                {dateSlot?.length ? (
                  <button className="newpassbutt" onClick={onSelectDatee}>
                    Next
                  </button>
                ) : (
                  <p>There is no slot</p>
                )}
              </div>
            </div>
          ) : (
           <div>

            {timeSlot?.length? <div className="slotdiv">
              <p className="timeslot">Time:{timeSlot}</p>
              </div> :<p>There is no slot</p>}
              </div>
          )}
        </Col>
      </Row>
    </>
  );
};

export default Appointmentdate;
