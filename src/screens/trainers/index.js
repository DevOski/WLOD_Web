import React, { useEffect, useState } from "react";
import "./trainer.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BasicExample, Navbarmenu, TopBar } from "../../component";
import bg2 from "../../assets/bg2.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/logo.png";
import theropist from "../../assets/theropist.png";
import { IoIosArrowDown } from "@react-icons/all-files/io/IoIosArrowDown";
import { IoIosArrowUp, } from "@react-icons/all-files/io/IoIosArrowUp";

import { Button } from "react-bootstrap";
import { selectedTrainer } from "../../services/utilities/api";
import moment from "moment";
const  Trainer = () => {
  const location = useLocation();
  console.log(location.state.trainer.tr_id,'trainer====>trainer');
  const [show, setshow] = useState(false);
  const [trainer, setTrainer] = useState();
  const [slot, setSlot] = useState([]);
  let navigate = useNavigate();
  
  useEffect(() => {
    getTrainer();
  }, []);
  const getTrainer = () => {
    setTimeout(async () => {
      try {
        const time = new Date().getTime();
        let currentTime =`${moment(time).format('hh:mma')}`;
        let response = await selectedTrainer(location?.state?.trainer?.tr_id,currentTime);
        console.log('----------->>tr',response.data);
        setTrainer(response.data.trainers);
        setSlot(response.data.slots);
        console.log(response.data.slots,'====>slot');
      } catch (error) {
        console.log('err--->', error);
      }
    }, 100);
  };
  const checkavailablity = () => {
    console.log("trainer is here",location.state.trainer)
    navigate('/slots',{state:{trainer: location.state.trainer.tr_id,tr_name:location.state.trainer.tr_name}});
  };
  const Open=()=>{
    setshow(!show)
  }
  return (
    <div className="of">
     
      <BasicExample/>
      <Row className="d-flex justify-content-center flex-column align-items-center gap-5 pt-5 pb-5">
        <Col
          lg="12"
          className="d-flex justify-content-center flex-column align-items-center"
        >
          <div  className="d-flex flex-column   wwtrai">
            <div className="d-flex justify-content-space-between align-items-center gap-2 trwi">
              <div className="img22">
                <img
                  style={{ width: "100%", height: "100%" }}
                  src={trainer?.images}
                />
              </div>
              <div className="padingtrainer">
                <h5>{trainer?.tr_name}</h5>
                <p>{trainer?.type}</p>
              </div>
            </div>
            {/* <div className="top"> */}
              {/* <h6>Status:{trainer?.login_status}</h6> */}
            {/* </div> */}
            {slot.map((item, index)=>{
              console.log(item,'itemslot');
               return  <div className="top  fle">

               <div className="brder">
                 <p>{item?.tr_day},{item?.tr_date} {item?.sl_time}</p>
               </div>
             
             </div>
            })}
           
            <div className="top">
             
            </div>
            <div className="top">
            <p>
            <h6>Consultant Description</h6>

            {trainer?.tr_desc}
              
              </p>
              <h6>Consultant Type</h6>
              <p>
                {trainer?.focus_area}
                
              </p>
              <h6>Language</h6>
              <p>{trainer?.languages}</p>
              <h6>Qualifications</h6>
              <p>{trainer?.qualifications}</p>
            </div>
            <div className="top">
            {/* <h6 onClick={Open}>
                Show full profile {!show?<IoIosArrowUp/>:<IoIosArrowDown />}
              </h6> */}
              <Button onClick={checkavailablity} className="checkAvailblity">View Availablilty</Button>
            </div>
          </div>
          
        </Col>
      </Row>
    </div>
  );
};

export default Trainer;
