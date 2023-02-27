import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import book from "../../assets/book.png";
import Navbar from "react-bootstrap/Navbar";
import { Button, Col, Container, Nav, Row } from "react-bootstrap";
import "./mess.css";
import Form from "react-bootstrap/Form";
// import Button from 'react-bootstrap/Button';
import Card from "react-bootstrap/Card";
import { IoMdSend } from "@react-icons/all-files/io/IoMdSend";
import { GiHamburgerMenu } from "@react-icons/all-files/gi/GiHamburgerMenu";
import {
  BasicExample,
  CardHome,
  Loader,
  SideBar,
  Visitcom,
  SideMainBar
} from "../../component";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getUser } from "../../services/utilities/api";
import moment from "moment";
import NavSidebar from '../../component/navsidebar/index'


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

const MessageScreen = () => {
  let navigate = useNavigate();
  const [show, setshow] = useState(false);
  const [drawer, setdrawer] = useState(true);
  const [Visit, setVisit] = useState("");
  const [trainer, settrainer] = useState();
  const [Document, setDocument] = useState();
  const [message, setMessage] = useState();
  const [home, sethome] = useState("");
  const [loader, setLoader] = useState(true);
  const [msgList, setMsgList] = useState([]);
  const [userName, setUserName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");

  const token = useSelector((state) => state.token);

  const open = () => {
    setshow(!show);
  };
  const opendarwer = () => {
    setdrawer(!drawer);
  };
  const visit = () => {
    setVisit("'0'");
  };
  const goto = () => {
    navigate("/booksession");
  };

  useEffect(() => {
    getUserDetails();
    getChat();
  }, []);

  const getUserDetails = async () => {
    try {
      let response = await getUser(token);
      setUserName(response.data.data.first_name);
      setMiddleName(response.data.data.middle_name);
      setLastName(response.data.data.last_name);
    } catch (error) {
      console.log(error);
    }
  };

  const handleMsg = async () => {
    setLoader(true);
    console.log(message);
    if (message !== "" && message !== "undefined") {
      var myHeaders = new Headers();
      myHeaders.append("Authorization", token);

      var formdata = new FormData();
      formdata.append("msg", message);
      formdata.append("sender", "user");

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: formdata,
        redirect: "follow",
      };

      fetch(
        "https://dashboard.weightlossondemand.com/backend/api/msg_sent",
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          setMessage("");
          setLoader(false);
          console.log(result);
          getChat();
        })
        .catch((error) => {
          console.log("error", error);
          setLoader(false);
        });
    }else{
      setLoader(false);
    }

    // if (message != '') {
    //   setVisible(true);
    //   sendMsg();
    // } else {
    //   setVisible(false);
    // }
    // setmessage('');
  };
  const getChat = async () => {
    setLoader(true);

    var myHeaders = new Headers();
    myHeaders.append("Authorization", token);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      "https://dashboard.weightlossondemand.com/backend/api/chat_display",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result.data);
        setMsgList(result.data);
        setLoader(false);
      })
      .catch((error) => console.log("error", error));
  };
  const enterKye=(e)=>{
    if(e.key==="Enter"){
      handleMsg();
      }
    }
  return (
    <div className="wi55">
      <div className="navshow">
            <BasicExample/>
        </div>
        <div className="sidenavshow">
        <NavSidebar />
        </div>
      <Row className="maincontainer">
        {/* <Col  lg="1" md="1" lg="1" sm={4} xs="1" ></Col> */}
        {/* <Col className="sidenavshow" lg="12" md="12" sm="12" xs="12" >
        <NavSidebar />
        </Col> */}
       {/* style={{border:'solid lightblue'}} */}
       
        <Col lg="12" md="12" sm="12" xs="12" className="maincontainer">
          <div className="chatdiv maincontainer">
            <Row className="maincontainer">
              <Col lg="2" md="2" sm="1" xs="0" className="maincontainer"></Col>
              <Col className="chatcol maincontainer" lg="8" md="8" sm="10" xs="12">
               <div className="inbox maincontainer">

                {msgList? <div className="textbox maincontainer">
              {msgList?.map((item, index) => {
                return (
                  <div className="scr maincontainer">
                    {item.sender == "user" ? (
                      <div className="chbox maincontainer">
                        <p className="msgtext fw-bold">
                          {userName} -{" "}
                          {moment(new Date(item.created_at)).format(
                            "MM/DD/YYYY hh:MMA"
                            )}
                        </p> 

                        {/* <p className="msgtext">
                      
                    </p> */}
                         <p className="msgtext">{item.message}</p>
                      </div>
                    ) : (
                      <div className="maincontainer">
                        <p>Support Team</p>
                        <p>
                          &nbsp; &nbsp; &nbsp;
                          {moment(new Date(item.created_at)).format(
                            "MM/DD/YYYY hh:MMA"
                          )}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>:<div className="textbox2 maincontainer">
             <p>There is no message</p>
            </div>}
            <div className="typebox maincontainer">
                <Row  className="maincontainer" style={{marginTop:'0.6%'}}>
                  <Col lg="11" md="10" sm="10" xs="10" className="maincontainer">
                  <input type='text' className="form-control" style={{width:'100%'}}
                  placeholder="Enter your message"
                  onChange={(event) => setMessage(event.target.value)}
                  value={message}
                  onKeyPress={enterKye}
                  required/>
                  </Col>
                  <Col className="maincontainer" lg="1" md="2" sm="2" xs="2" style={{position:'relative',bottom:4}}>
                  <a href="javascript:void(0);" onClick={handleMsg} ><svg width="48" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.667969" y="0.640076" width="42" height="42" rx="21" fill="#be1f2d"/>
                    <path d="M12.6627 31.2798C12.5619 31.2798 12.4611 31.2798 12.2595 31.2798C11.7555 31.179 11.4531 30.7758 11.2515 30.3726C11.0499 29.8686 11.2515 29.3646 11.4531 28.659L13.8723 21.6028L11.4531 14.5466C11.2515 13.841 11.0499 13.4378 11.2515 12.9338C11.4531 12.5306 11.7555 12.1274 12.2595 12.0266C12.7635 11.9258 13.2675 12.1274 13.8723 12.4298L30.7063 19.99C31.412 20.2924 31.8152 20.494 32.0168 20.998C32.2184 21.4012 32.2184 21.9052 32.0168 22.3084C31.8152 22.8124 31.3111 23.014 30.7063 23.3165L13.9731 30.8766C13.4691 31.0782 13.0659 31.2798 12.6627 31.2798ZM15.586 22.6108L13.4691 28.8606L29.5975 21.6028L13.5699 14.345L15.586 20.5948H20.4245C21.0293 20.5948 21.4325 20.998 21.4325 21.6028C21.4325 22.2076 21.0293 22.6108 20.4245 22.6108H15.586Z" fill="white"/>
                    </svg></a>
                  {/* <button className="sendbuttondiv" onClick={handleMsg}>
                  <p className="sendbutton">

                    <IoMdSend size={20} />
                  </p>
                </button> */}
                  </Col>
                </Row>
            </div>
              </div>
              </Col>
              <Col lg="2" md="2" sm="1" xs="0"></Col>

            </Row>

            {/* /////////////////////////////////////////////////////// */}
            {/* {msgList? <div className="textbox">
              {msgList?.map((item, index) => {
                return (
                  <div className="scr">
                    {item.sender == "user" ? (
                      <div className="chbox">
                        <p className="msgtext fw-bold">
                          {userName} -{" "}
                          {moment(new Date(item.created_at)).format(
                            "MM/DD/YYYY hh:MMA"
                          )}
                        </p> */}

                        {/* <p className="msgtext">
                      
                        </p> */}
                        {/* <p className="msgtext">{item.message}</p>
                      </div>
                    ) : (
                      <div>
                        <p>Support Team</p>
                        <p>
                          &nbsp; &nbsp; &nbsp;
                          {moment(new Date(item.created_at)).format(
                            "MM/DD/YYYY hh:MMA"
                          )}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>:<div className="textbox2">
             <p>There no message</p>
            </div>} */}
           
            {/* <div className="">
              <Row>
                <Col lg="10" md="10" sm="10" xs="10" >
                <div className="messinput">
                <input
                  className="msgi form-control"
                  type={"text"}
                  placeholder="Enter your message"
                  onChange={(event) => setMessage(event.target.value)}
                  value={message}
                  onKeyPress={enterKye}
                />
                </div>
                </Col>
                <Col lg="2" md="2" sm="2" xs="2">
                <div>
                <button className="sendbuttondiv" onClick={handleMsg}>
                  <p className="sendbutton">
                    <IoMdSend size={20} />
                  </p>
                </button>
              </div>
                </Col>
              </Row>
            </div> */}
          </div>
        </Col>
      </Row>
      {loader && <Loader />}
    </div>
  );
};

export default MessageScreen;
