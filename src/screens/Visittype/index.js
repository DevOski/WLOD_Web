import React, { useEffect, useState } from "react";
import "./vt.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BasicExample, Error, Loader, Navbarmenu, TopBar } from "../../component";
import bg2 from "../../assets/bg2.png";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/logo.png";
import { IoIosArrowForward } from "@react-icons/all-files/io/IoIosArrowForward";
import { Button } from "react-bootstrap";
import { useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getUser } from "../../services/utilities/api";
import moment from "moment";
import NavSidebar from "../../component/navsidebar";
const VType = () => {
  const [userName, setUserName] = useState("");
  const [last, setlast] = useState('')
  const [loader, setLoader] = useState("");
  const [error, seterror] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const Close = () => {
    seterror(false);
  };
  let navigate = useNavigate();
  const goto = () => {
    const time = new Date().getTime();

    let date = new Date().toJSON();
    let currentDate = moment(date).format("DD/MM/YYYY");
    console.log("------>>dda", currentDate);
    let currentTime = moment(time).format("hh:mma");
    console.log("----->>", currentTime);
    var formdata = new FormData();
    formdata.append("sl_date", currentDate);
    formdata.append("sl_time", currentTime);
    // formdata.append('sl_time', '06:00');

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch("https://dashboard.weightlossondemand.com/backend/api/finding_VTr",requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result.data);
        if (result.data) {
          let tr_id = result.data.tr_id;
          let tr_name = result.data.tr_name;
          navigate("/question2", {
          state:{
            tr_id,
            tr_name
            },
        });

          console.log("works",tr_id,tr_name);
        } else {
          seterror(true);
          setErrorMessage(result.message);
        }
      });
  };
  const token = useSelector((state) => state.token);
  useEffect(() => {
    getUserDetails();
  }, []);
  const getUserDetails = async () => {
    setLoader(true);
    setTimeout(async () => {
      try {
        let response = await getUser(token);
        console.log(response);
        setUserName(response.data.data.first_name);
        setlast(response.data.data.last_name)
        setLoader(false);
      } catch (error) {
        console.log(error);
        setLoader(false);
      }
    }, 100);
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

      <Row className="d-flex justify-content-center flex-column align-items-center gap-5 pt-5">
        <Col
          lg="12"
          className="d-flex justify-content-center flex-column align-items-center"
          >
          <div
            onClick={goto}
            className="d-flex justify-content-between  align-items-center ww"
            >
            <div>
              
              <p className="fs-4">{userName} {last} </p>
            </div>

            <div>
              <IoIosArrowForward className="iconcolor" />
            </div>
          </div>
        </Col>
      </Row>
    </div>
      {loader && <Loader />}
      {error && <Error onClick={Close} tittle={errorMessage} />}
    </div>
  );
};

export default VType;
