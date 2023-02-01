import React, { useEffect, useState } from "react";
import "./trainerlist.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BasicExample, Loader, Navbarmenu, TopBar } from "../../component";
import bg2 from "../../assets/bg2.png";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/logo.png";
import theropist from "../../assets/theropist.png";
import { IoIosArrowDown } from "@react-icons/all-files/io/IoIosArrowDown";
import { IoIosArrowUp } from "@react-icons/all-files/io/IoIosArrowUp";
import NavSidebar from "../../component/navsidebar";
import { Button } from "react-bootstrap";
import { getAllTrainers } from "../../services/utilities/api";
const TrainerList = () => {
  const [show, setshow] = useState(false);
  const [trainerList, setTrainerList] = useState([]);
  const [loader, setloader] = useState(false)
  let navigate = useNavigate();
  // const goto = () => {
  //   navigate("/trainer",state:{trainer: item});
  // };
  useEffect(() => {
    getTrainers();
  }, []);

  const getTrainers = async () => {
    setloader(true)
    try {
      let response = await getAllTrainers();
      setTrainerList(response.data.data);
      console.log(response.data.data);
      setloader(false)
    } catch (error) {
      console.log(error);
    }
  };


 
  return (
    <div className="of">
    
    <div className="navshow">
            <BasicExample/>
        </div>
        <div className="sidenavshow">
        <NavSidebar />
        </div>
        <div className="mobilediv">
      
      <Row className="d-flex justify-content-center flex-column align-items-center gap-5 pb-5">
        <Col lg="1" md="0" sm="0" xs="0" ></Col>
        <Col
          lg="10" md="12" sm="12" xs="12" 
          className="d-flex justify-content-center flex-column align-items-center "
        >
          <h3>Choose a Consultant</h3>
          {trainerList?.map((item, index) => {
            return (
              <div
                key={index}
                onClick={()=>navigate("/trainer",{state:{trainer: item}})}
                className="wwtrailist pt-5"
              >
                {/* <div className="d-flex justify-content-space-between align-items-center"> */}
                <Row>
                  <Col lg="4" md="4" sm="4" xs="5">
                  {/* <div className="imgtrainerlist"> */}
                    <img
                      style={{ width: "100%", height: "100%" }}
                      src={item.images}
                    />
                  {/* </div> */}
                  </Col>
                  <Col lg="8" md="8" sm="8" xs="7">
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
                  </Col>
                </Row>
                 
                 
                {/* </div> */}
              </div>
            );
          })}

         
        </Col>
        <Col  lg="1" md="0" sm="0" xs="0" ></Col>
      </Row>
      </div>
      {loader && <Loader />}
    </div>
  );
};

export default TrainerList;
