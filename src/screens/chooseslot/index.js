import React, { useState, useRef } from "react";
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

const pageStyles ={
  div1 :{
    display:'inline',
    // flexDirection:'row',
    padding:'13px 17px 13px 17px',
    margin:5,
    border:'1px solid',
   
  },
  div2 :{
    // display:'inline',
    // flexDirection:'row',
    padding:'13px 17px 13px 17px',
    margin:10,
    border:'1px solid',
   
  },
  mainDiv :{
    border:'none',
    backgroundColor:'white',
    // text-align:'center'
  }
  
}
const ChooseSlot = () => {
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
  const [tr_slot,settrslot] = useState("");

  let time = moment().format("h:mma");

  const Show = () => {
    setcalendshow(true);
    setcalendshowlist(false);
    calendshowValidation.current = true;
    calendshowlistValidation.current = false;
    console.log("data",calendshowlistValidation.current,calendshowValidation.current);
  };
  // useEffect(() => {
  //   if (calendshowlist) {
  //     console.log('run something here');
  //   }
  // }, [calendshowlist]);
  const Showlist = () => {
    try {
      // setcalendshow(false);
      // setcalendshowlist(true);
      var formdata = new FormData();
      var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
      };
      fetch(`https://dashboard.weightlossondemand.com/backend/api/trTimeSlots/${location.state.trainer}/${time}`, requestOptions)
        .then(response => response.json())
        .then(result => {
          console.log("data",result)
    //  if(!calendshowlistValidation.current){
      calendshowlistValidation.current= true;
      calendshowValidation.current= false;
      // setcalendshow(false);
      setcalendshowlist(true)
          setSlot(result.data)
          console.log("setdata-----------------------------",slot);
          console.log("=====>",calendshowlist+" "+calendshow+"---"+calendshowlistValidation.current);
        // }else{
        //   alert("states "+calendshowlist+" "+calendshow+"---"+calendshowlistValidation.current)
        // }
      })
        .catch(error => console.log('error', error));
        // setSlot("response.data.data");
      
      } catch (error) {
        console.log(error);
      }
    // getTimeSlots();
  };
  // useEffect(() => {
  //   return () => {
  //     slot
  //   }
  // }, [])
  
  const onSelectDate = () => {
    if (date) {
      navigate("/question2");
    }
  };
  const location = useLocation();
  console.log("tr checking");
  console.log(location.state.trainer, "slotwaliscreen====>trainer");
  useEffect(() => {
    // getTrainer();
  },[]);

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
    console.log("works---------------------->>>",selectedDate);
    console.log("trainer details",location.state.tr_name);
    console.log("time",time);

    // =========================================================================
            var formdata = new FormData();
            formdata.append("id", location.state.trainer);
            formdata.append("date",selectedDate);
            formdata.append("time",time);

            var requestOptions = {
              method: 'POST',
              body: formdata,
              redirect: 'follow'
            };

            fetch("https://dashboard.weightlossondemand.com/backend/api/trCalenderSlots", requestOptions)
              .then(response => response.json())
              .then(result => {
                console.log("trainer slots",result.data)
                if(result.message != "No records found"){
                  settrslot(result.data)
                }

                console.log("tr_slot",tr_slot);
            // alert(result.message)
            })
              .catch(error => console.log('error', error));

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

  const SelectSlot = (vtr_id, vsl_time, vtr_date, vtr_day) =>{
    console.log("->",vtr_id,vsl_time);
    navigate('/question2',{
      state:{
        vtr_id,
        vsl_time,
        vtr_date,
        vtr_day,
        vtr_name:location.state.tr_name
      }
  
    })
  }

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

    fetch(`https://dashboard.weightlossondemand.com/backend/api/Slots/${currentDTime}`, requestOptions)
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
          {
          !calendshowlistValidation.current && (
            <div className="calender">
              <p>
                Selected date:{" "}
                {date ? format(date, "dd MMM yyyy", { locale: enGB }) : "none"}.
              </p>
              {dateSlot?.length ? (
                dateSlot.map((item,index)=>{
                  return(
                  <div key={index} className="classextbuttonsl">
                    <p className="timeslot">Time:{item.sl_time}</p> 
                  </div>
                  )
                })
              ) : (
                <div className="classextbutton">
                {tr_slot ? tr_slot.map(obj => <button onClick={() => SelectSlot(obj.tr_id,obj.sl_time,obj.tr_date,obj.tr_day)} style={pageStyles.mainDiv}><div style={pageStyles.div1} key={obj.sl_id}>{obj.sl_time}</div></button>)
                   : <p>No record found</p>
                   }                   
              </div>
              )}
              <DatePickerCalendar
                date={date}
                onDateChange={getSelectedDayEvents}
                locale={enGB}
                
              />
              
            </div>
          )}
          {
          calendshowlistValidation.current && (
            <div className="slotdiv1">
             {slot ? slot.map(obj => <div className="slotdiv1"> <button onClick={() => SelectSlot(obj.tr_id,obj.sl_time,obj.tr_date,obj.tr_day)} style={pageStyles.mainDiv}><div style={pageStyles.div2} key={obj.sl_id}>{obj.sl_time}</div></button></div>) : <div className="slotdiv"><p className="timeslot">There is no slot</p></div>}
            </div>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default ChooseSlot;
