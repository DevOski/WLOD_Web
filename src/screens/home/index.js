import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import book from "../../assets/book.png";
import Navbar from "react-bootstrap/Navbar";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./ho.css";
import Form from "react-bootstrap/Form";
// import Button from 'react-bootstrap/Button';
import Card from "react-bootstrap/Card";
import { MdExpandLess } from "@react-icons/all-files/md/MdExpandLess";
import { GiHamburgerMenu } from "@react-icons/all-files/gi/GiHamburgerMenu";
import {
  BasicExample,
  CardHome,
  OffcanvasExample,
  SideBar,
  Visitcom,
} from "../../component";
import { Link } from "react-router-dom";
import { getUser } from "../../services/utilities/api";
import { removeData, storeUserData } from "../../store/action";
import { useDispatch, useSelector } from "react-redux";

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

const Home = () => {
  const [userName, setUserName] = useState("");
  const [show, setshow] = useState(false);
  const [drawer, setdrawer] = useState(true);
  const [Visit, setVisit] = useState("");
  const [trainer, settrainer] = useState('');
  const [Document, setDocument] = useState();
  const [Message, setMessage] = useState();
  const [home, sethome] = useState("");
  const dispatch = useDispatch();
  
  const token = useSelector((state) => state.token);
  useEffect(() => {
    getUserDetails();
  }, []);
  const getUserDetails = async () => {
    // setLoader(true);
    setTimeout(async () => {
      try {
        let response = await getUser(token);
        setUserName(response.data.data.first_name);
        // console.log(response.data.data.first_name,'====>name');

        dispatch(storeUserData(response.data.data));
        // console.log(response.data.data,'====>dispatchlog');
        // setLoader(false);
      } catch (error) {
        console.log(error);
        // setLoader(false);
      }
    }, 100);
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
    <div className="wi55" >
      <BasicExample name={userName}/>
      {/* <Navbar variant="light" bg="light" className="d-flex justify-content-between ">
        <Navbar.Brand href="#">
          <img style={{ width: "50%" }} src={logo} />
        </Navbar.Brand>
       <div className="pad" ><p className="padingright" >jeff</p></div>
      </Navbar> */}
      <Row>
        <Col lg="3">
        <SideBar/>
          {/* <div
            className={!drawer ? "maindeowercontainer2" : "maindeowercontainer"}
          >
            <GiHamburgerMenu onClick={opendarwer} className="ham" />

            <div className="cent">
              <div className="back">
                <Link className="tit" to="/home">
                  home
                </Link>
              </div>
            </div>
            <div className="cent">
              <div className="back2">
                <p className="tit">MY PROFILE</p>
                <p>
                  <MdExpandLess onClick={open} className="expand" />
                </p>
              </div>
            </div>
            {!show ? (
              <div className="cent2">
                <div className="backkk"></div>
                <div className="back3">
                  <Link className="tit" to="/visit">
                    Session
                  </Link>

                  <Link className="tit" to="/provider">
                    My consultants
                  </Link>
                  <Link className="tit" to="/document">
                    Document
                  </Link>
                  <Link className="tit" to="/chat">
                    Message
                  </Link>
                </div>
              </div>
            ) : null}
          </div> */}
        </Col>
        <CardHome />
      </Row>
    </div>
  );
};

export default Home;
