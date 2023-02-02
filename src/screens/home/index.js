import React, { useState, useEffect } from "react";
import bg2 from "../../assets/bg2.png";
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
  SideMainBar,
} from "../../component";
import NavSidebar from '../../component/navsidebar/index'
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
  const [trainer, settrainer] = useState("");
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
    <div className="wi55">
{/* NavSidebar */}
        <div className="navshow">
            <BasicExample/>
        </div>
        <div className="sidenavshow">
        <NavSidebar />
        </div>
     

       {/* <SideMainBar/> */}
      <Row>
        {/* <Col className="sidenavshow" lg="12" md="12" sm="12" xs="12" >
        <NavSidebar />
        </Col> */}
       {/* <Col lg="2" md="3" sm="3" xs="3" >
        <SideBar/>
       </Col>
        <Col  lg="1" md="1" sm="1" xs="1" ></Col> */}

        <Col lg="11" md="12" sm="12" xs="12">
        <CardHome />
        </Col>
      </Row>
    </div>
  );
};

export default Home;
