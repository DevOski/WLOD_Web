import React, { useState, useRef } from "react";
import "./appoint.css";
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
import NavSidebar from "../../component/navsidebar";
import {
  getSlotDate,
  getSlotTime,
  selectedTrainer,
} from "../../services/utilities/api";
import { useEffect } from "react";
import moment from "moment";

const pageStyles = {
  div1: {
    display: "inline",
    padding: "13px 17px 13px 17px",
    margin: 5,
    border: "1px solid",
  },
  div2: {
    display:'flex',
    flexDirection:'row',
    padding: "13px 17px 13px 17px",
    margin: 10,
    border: "1px solid",
  },
  mainDiv: {
    border: "none",
    backgroundColor: "white",
    color: "black",
    // text-align:'center'
  },
};
const Appointmentdate = () => {
  const [date, setDate] = useState();
  const [calendshow, setcalendshow] = useState(true);
  const calendshowValidation = useRef(true);
  const [calendshowlist, setcalendshowlist] = useState(false);
  const calendshowlistValidation = useRef(false);
  const [slot, setSlot] = useState([]);
  const [trainer, setTrainer] = useState();
  const [timeSlot, setTimeSlot] = useState([]);
  const [dateSlot, setDateSlot] = useState([]);
  const [currentDTime, setCurrentTime] = useState("");
  const [month, setMonth] = useState("");

  const [currentDate, setCurrentDate] = useState("");
  const [markedDates, setMarkedDates] = useState("");
  const [tr_slot, settrslot] = useState("");

  let time = moment().format("h:mma");

  const Show = () => {
    setcalendshow(true);
    setcalendshowlist(false);
    calendshowValidation.current = true;
    calendshowlistValidation.current = false;
    console.log(
      "data",
      calendshowlistValidation.current,
      calendshowValidation.current
    );
  };
  const Showlist = () => {
    try {
      var requestOptions = {
        method: "GET",
        redirect: "follow",
      };
      fetch(
        `https://dashboard.weightlossondemand.com/backend/api/Slots/${time}`,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          console.log("data", result);
          calendshowlistValidation.current = true;
          calendshowValidation.current = false;
          setcalendshowlist(true);
          setSlot(result.data);
          console.log("setdata-----------------------------", slot);
          console.log(
            "=====>",
            calendshowlist +
              " " +
              calendshow +
              "---" +
              calendshowlistValidation.current
          );
        })
        .catch((error) => console.log("error", error));
    } catch (error) {
      console.log(error);
    }
  };
  const onSelectDate = () => {
    if (date) {
      navigate("/question2");
    }
  };
  const location = useLocation();
  console.log("tr checking");
  // console.log(location.state.trainer, "slotwaliscreen====>trainer");
  useEffect(() => {
    // getTrainer();
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
    let time = moment().format("h:mma");

    // getAllDateSlots(selectedDate);
    console.log("works---------------------->>>", selectedDate);
    // console.log("trainer details",location.state.tr_name);
    console.log("time", time);

    // =========================================================================
    var formdata = new FormData();
    // formdata.append("id", location.state.trainer);
    formdata.append("date", selectedDate);
    formdata.append("time", time);

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch(
      "https://dashboard.weightlossondemand.com/backend/api/all_trCalenderSlots",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log("trainer slots", result);
        if (result.message != "No records found") {
          settrslot(result.data);
        }

        console.log("tr_slot", tr_slot);
        // alert(result.message)
      })
      .catch((error) => console.log("error", error));
  };
  const getTimeSlots = async () => {
    // try {
    //   var formdata = new FormData();
    //   var requestOptions = {
    //     method: 'POST',
    //     body: formdata,
    //     redirect: 'follow'
    //   };
    //   fetch(`https://dashboard.weightlossondemand.com/backend/api/trTimeSlots/${1}/${time}`, requestOptions)
    //     .then(response => response.json())
    //     .then(result => {
    //       console.log("data",result.data)
    //       setSlot(result.data)
    //     })
    //     .catch(error => console.log('error', error));
    //   // setSlot("response.data.data");
    // } catch (error) {
    //   console.log(error);
    // }
  };

  const SelectSlot = (atr_id, asl_time, atr_date, atr_day) => {
    console.log("->", atr_id, asl_time);
    navigate("/question2", {
      state: {
        atr_id,
        asl_time,
        atr_date,
        atr_day,
      },
    });
  };

  // const getAllDateSlots = async (updatedDate) => {
  //   console.log("works---------------------->>>");
  //   var myHeaders = new Headers();
  //   myHeaders.append("Content-Type", "application/json");
  //   var raw = JSON.stringify({
  //     date: updatedDate,
  //     time: currentDTime,
  //   });
  //   console.log(raw);
  //   var requestOptions = {
  //     method: "POST",
  //     headers: myHeaders,
  //     body: raw,
  //     redirect: "follow",
  //   };
  //   fetch("https://dashboard.weightlossondemand.com/backend/api/all_trCalenderSlots", requestOptions)
  //     .then((response) => response.json())
  //     .then((result) => {
  //       console.log( result);
  //       setDateSlot(result.data);
  //       console.log("kch--------->>",result.data);
  //     })
  //     .catch((error) => console.log("error", error));
  // };
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

  // getAllSlotList();
  // if (route?.params?.from === 'All Trainer') {
  //
  // }
  // // console.log('-----------?>',location.state.trainer.tr_id, currentDTime);
  // let response = await getSlotTime(
  //   location.state.trainer.tr_id,
  //   currentDTime
  // );
  // // console.log(response.data.data, "====>slooottime");
  // // console.log(response.data.data, "====>slooottime");
  // setTimeSlot(response.data.data);
  const getAllSlotList = async () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://dashboard.weightlossondemand.com/backend/api/Slots/${currentDTime}`,
      requestOptions
    )
      .then((response) => response.json())

      .then((result) => {
        console.log("--------->>>>", result);
        setTimeSlot(result.data);
      })
      .catch((error) => console.log("error", error));
  };
  let navigate = useNavigate();
  return (
    <div className="of maincontainer">
      <div className="navshow">
            <BasicExample/>
        </div>
        <div className="sidenavshow">
        <NavSidebar />
        </div>
        <div className="mobilediv maincontainer">
    
  
      <Row class="d-flex justify-content-center align-items-center maincontainer" >
        <Col lg="4" md="3" sm="2" xs="2" className="maincontainer"></Col>
        <Col
          lg="2" md="3" sm="4" xs="4" className="maincontainer"
          >
            
          <div className="button-w maincontainer" onClick={Show}>
            <Button>Calender</Button>
          </div>
          </Col>
          <Col
          lg="2" md="3" sm="4" xs="4" className="maincontainer"
          >
          <div className="button-w maincontainer" onClick={Showlist}>
            <Button>List</Button>
          </div>
        </Col>
        <Col lg="4" md="3" sm="2" xs="2" className="maincontainer"></Col>

      </Row>
      
      <Row className="maincontainer">

      <Col lg="3" md="2" sm="1" xs="1" className="maincontainer"></Col>
        <Col lg="6" md="8" sm="10" xs="10" className="d-flex justify-content-center maincontainer">
          {!calendshowlistValidation.current && (
            <div className="calender maincontainer">
              <p className="text-center maincontainer">
                Selected date:{" "}
                {date ? format(date, "dd MMM yyyy", { locale: enGB }) : "None"}
              </p>
              {dateSlot?.length ? (
                dateSlot.map((item, index) => {
                  return (
                    <div key={index} className="classextbuttonsl maincontainer">
                      <p className="timeslot">Time:{item.sl_time}</p>
                    </div>
                  );
                })
                ) : (
                  <div className="classextbutton maincontainer">
                  {tr_slot ? (
                    tr_slot.map((obj) => (
                      <button
                      onClick={() =>
                        SelectSlot(
                          obj.tr_id,
                            obj.sl_time,
                            obj.tr_date,
                            obj.tr_day
                            )
                          }
                          style={pageStyles.mainDiv}
                          >
                        <div className="maincontainer" style={pageStyles.div1} key={obj.sl_id}>
                         {obj.sl_time} 
                        </div>
                      </button>
                    ))
                    ) : (
                      
                      <p>No record found</p>
                  )}
                </div>
              )}
              <DatePickerCalendar 
                date={date}
                onDateChange={getSelectedDayEvents}
                locale={enGB}
               
                />
            </div>
          )}
          {calendshowlistValidation.current && (
            <div className="slotdiv1 maincontainer">
              {slot?.length ? (
                slot.map((obj) => (
                  <div className="slotdiv1 maincontainer">
                    {" "}
                    <button
                      onClick={() =>
                        SelectSlot(
                          obj.tr_id,
                          obj.sl_time,
                          obj.tr_date,
                          obj.tr_day
                          )
                        }
                        style={pageStyles.mainDiv}
                        >
                      <div className="maincontainer" style={pageStyles.div2} key={obj.sl_id}>
                      <span>({moment(obj.tr_date,'DD/MM/YYYY').format('MM/DD/YYYY')}) </span>&nbsp;<span>{obj.sl_time}</span>
                      </div>
                    </button>
                  </div>
                ))
                ) : (
                  <div className="slotdiv maincontainer">
                  <p className="timeslot">There is no slot</p>
                </div>
              )}
            </div>
          )}
        </Col>
        <Col lg="3" md="2" sm="1" xs="1" className="maincontainer"></Col>

      </Row>
          </div>
    </div>
    
  );
};

export default Appointmentdate;
