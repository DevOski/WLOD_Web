import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import book from "../../assets/book.png";
import Navbar from "react-bootstrap/Navbar";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./tainerhome.css";
import Form from "react-bootstrap/Form";
// import Button from 'react-bootstrap/Button';
// import Card from "react-bootstrap/Card";
import { MdExpandLess } from "@react-icons/all-files/md/MdExpandLess";
import { GiHamburgerMenu } from "@react-icons/all-files/gi/GiHamburgerMenu";
import {
  BasicExample,
  Loader,
  SideMainBar,
  // TrainerSideBar,
  Visitcom,
} from "../../component";
import TrainerSideBar from "../../component/trainersidebar";

import { Link, useNavigate } from "react-router-dom";
import { getUser } from "../../services/utilities/api";
import { removeData, storeUserData } from "../../store/action";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
// import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import { height } from "@mui/system";
// function getWindowDimensions() {
//   const { innerWidth: width, innerHeight: height } = window;
//   return {
//     width,
//     height
//   };
// }

//  function useWindowDimensions() {
//   const [windowDimensions, setWindowDimensions] = useState(
//     getWindowDimensions()
//   );

//   useEffect(() => {
//     function handleResize() {
//       setWindowDimensions(getWindowDimensions());
//     }

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return windowDimensions;
// }

const TrainerHome = () => {
  let navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [show, setshow] = useState(false);
  const [drawer, setdrawer] = useState(true);
  const [Visit, setVisit] = useState("");
  const [button, setbutton] = useState("");
  const [status, setstatus] = useState(false);
  const [identity, setidentity] = useState("");
  const [home, sethome] = useState("");
  const [response1, setresponse1] = useState("");
  const [response2, setresponse2] = useState("");
  const [response3, setresponse3] = useState("");
  const [response4, setresponse4] = useState("");
  const [response5, setresponse5] = useState("");
  const [response6, setresponse6] = useState("");
  const [response7, setresponse7] = useState("");
  const [response8, setresponse8] = useState("");
  const [response9, setresponse9] = useState("");
  const [response10, setresponse10] = useState("");
  const [response11, setresponse11] = useState("");
  const [response12, setresponse12] = useState("");
  const [user, setuser] = useState("");
  const [loader, setloader] = useState(false);
  const [visitId, setvisitId] = useState("");
  const [AppId, setAppId] = useState("");

  const dispatch = useDispatch();

  const token = useSelector((state) => state.token);
  useEffect(() => {
    getUserDetails();
  }, []);
  const getUserDetails = async () => {
    setloader(true);
    var myHeaders = new Headers();
    myHeaders.append("Authorization", token);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      "https://dashboard.weightlossondemand.com/backend/api/question_review",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log("data----------------------------------------------------        k;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-res", result.data);
        if (result.data.visit_id) {
          setvisitId(result.data.visit_id);
          setloader(false);
          setbutton(result.message);
        }
        if (result.data.ap_id) {
          setAppId(result.data?.ap_id);
          setloader(false);
          setbutton(result.message);
        } else {
          setAppId("");
          // setstatus(false)
          setloader(false);
          console.log("dataaaa", result.data.user_token);

          setresponse1(result.data.response_1);
          setresponse2(result.data.response_2);
          setresponse3(result.data.response_3);
          setresponse4(result.data.response_4);
          setresponse5(result.data.response_5);
          setresponse6(result.data.response_6);
          setresponse7(result.data.response_7);
          setresponse8(result.data.response_8);
          setresponse9(result.data.response_9);
          setresponse10(result.data.response_10);
          setresponse11(result.data.response_11);
          setresponse12(result.data.response_12);
          setuser(result.data.user_token);
          setidentity(result.data.identity)
        }
      })

      .catch((error) => {
        console.log("error", error);
        setloader(false);
      });
  };

  const HandleSession = () => {
    console.log(
      response1,
      response2,
      response3,
      response4,
      response5,
      response6,
      response7,
      response8,
      response9,
      response10,
      response11,
      response12,
      user
    );
    navigate("/sessiondetails", {
      state: {
        token: user,
        res1: response1,
        res2: response2,
        res3: response3,
        res4: response4,
        res5: response5,
        res6: response6,
        res7: response7,
        res8: response8,
        res9: response9,
        res10: response10,
        res11: response11,
        res12: response12,
      },
    });
  };
  const open = () => {
    setshow(!show);
  };
  const opendarwer = () => {
    setdrawer(!drawer);
  };
  const visit = () => {
    setVisit("'0'");
  };
  return (
    <div className="wi55">
     
     <BasicExample/>
       <SideMainBar/>
      <Row>
        {/* <Col  lg="1" md="1" sm="1" xs="1" ></Col> */}
       <Col lg="2" md="3" sm="3" xs="3" >
        <TrainerSideBar/>
       </Col>
        <Col  lg="1" md="0" sm="0" xs="1" ></Col>
        {/* <CardHome /> */}
        <Col lg="9" md="9" sm="9" xs="9" style={{display: 'flex',justifyContent:"center",alignItems: "center",}}>

          {/* <Container> */}
          <Row>
            <Col lg="12">
              <div style={{ width: "100%" }}>
                {/* <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent> */}
                {visitId !== "" && (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <div className="trainbdiv">
                      <Button size="small" onClick={HandleSession}>
                        View Client details
                      </Button>
                    </div>
                    <div className="trainbdiv">
                      <Button
                        size="small"
                        onClick={() => navigate("/Tsession",{
                      state : {
                        identity
                      }})}
                      >
                        Start Session
                      </Button>
                    </div>
                    {/* <Button size="small">Learn More</Button> */}
                  </div>
                )}
                {!visitId && <p>No recent session</p>}
              </div>
            </Col>
          </Row>
          {/* </Container> */}
        </Col>
      </Row>
      {loader && <Loader />}
    </div>
  );
};

export default TrainerHome;
