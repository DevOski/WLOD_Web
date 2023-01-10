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
} from "../../component";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getUser } from "../../services/utilities/api";
import moment from "moment";

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
    if (message !== "") {
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
          setMessage(" ");
          setLoader(false);
          console.log(result);
          getChat();
        })
        .catch((error) => {
          console.log("error", error);
          setLoader(false);
        });
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
      <BasicExample />

      <Row>
        <Col lg="2">
          <SideBar />
        </Col>

        <Col lg="10">
          <div className="chatdivmain">
            {msgList? <div className="textbox">
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
                        </p>

                        {/* <p className="msgtext">
                      
                        </p> */}
                        <p className="msgtext">{item.message}</p>
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
            </div>}
           
            <div className="inputdivmessage">
              <div className="messinput">
                <input
                  className="messinput1"
                  type={"text"}
                  placeholder="Enter your message"
                  onChange={(event) => setMessage(event.target.value)}
                  value={message}
                  onKeyPress={enterKye}
                />
                <button className="sendbuttondiv" onClick={handleMsg}>
                  <p className="sendbutton">
                    <IoMdSend size={20} />
                  </p>
                </button>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      {loader && <Loader />}
    </div>
  );
};

export default MessageScreen;
