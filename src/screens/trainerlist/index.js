import React, { useEffect, useState } from "react";
import "./trainerlist.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BasicExample, Navbarmenu, TopBar } from "../../component";
import bg2 from "../../assets/bg2.png";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/logo.png";
import theropist from "../../assets/theropist.png";
import { IoIosArrowDown } from "@react-icons/all-files/io/IoIosArrowDown";
import { IoIosArrowUp } from "@react-icons/all-files/io/IoIosArrowUp";

import { Button } from "react-bootstrap";
import { getAllTrainers } from "../../services/utilities/api";
const TrainerList = () => {
  const [show, setshow] = useState(false);
  const [trainerList, setTrainerList] = useState([]);
  let navigate = useNavigate();
  // const goto = () => {
  //   navigate("/trainer",state:{trainer: item});
  // };
  useEffect(() => {
    getTrainers();
  }, []);

  const getTrainers = async () => {
    try {
      let response = await getAllTrainers();
      setTrainerList(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };


 
  return (
    <div className="of">
    
      <BasicExample/>
      <Row className="d-flex justify-content-center flex-column align-items-center gap-5 pt-5">
        <Col
          lg="12"
          className="d-flex justify-content-center flex-column align-items-center pl-5"
        >
          {trainerList?.map((item, index) => {
            return (
              <div
                key={index}
                onClick={()=>navigate("/trainer",{state:{trainer: item}})}
                className="d-flex flex-column    wwtrailist"
              >
                <div className="d-flex justify-content-space-between align-items-center gap-2 trwi">
                  <div className="imgtrainerlist">
                    <img
                      style={{ width: "100%", height: "100%" }}
                      src={item.images}
                    />
                  </div>
                  <div className="padingtrainer">
                    <h5> {item.tr_name}</h5>
                    <p> {item?.type}</p>
                    <p
                      style={{
                        maxWidth: "100%",
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 3,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {item?.tr_desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}

         
        </Col>
      </Row>
    </div>
  );
};

export default TrainerList;
