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
import moment from "moment/moment";
import {
  BasicExample,
  CardHome,
  Loader,
  // TrainerSideBar,
  SideMainBar,
  TrainerHed,
} from "../../component";
import TrainerSideBar from "../../component/trainersidebar";
import { Link, useNavigate } from "react-router-dom";
import { getUser } from "../../services/utilities/api";
import { removeData, storeUserData } from "../../store/action";
import { useDispatch, useSelector } from "react-redux";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
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
  const [userName, setUserName] = useState("");
  const [show, setshow] = useState(false);
  const [drawer, setdrawer] = useState(true);
  const [Visit, setVisit] = useState("");
  const [apt, setapt] = useState("");
  const [Document, setDocument] = useState();
  const [Message, setMessage] = useState();
  const [home, sethome] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loader, setloader] = useState(false)


  const token = useSelector((state) => state.token);
  useEffect(() => {
    getUserDetails();
  }, []);
  const getUserDetails = async () => {
    setloader(true)
    const finaldate = moment().format("YYYY-MM-DD")+" "+moment().format("hh:mm:00A")
    console.log(")",finaldate);
    var myHeaders = new Headers();
    myHeaders.append("Authorization",token);

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch(`https://dashboard.weightlossondemand.com/backend/api/tr_appt/${finaldate}`, requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log("++++++++++++++",result.data)
        setloader(false)
        setapt(result.data)
      })
      .catch(error => console.log('error', error));
    // setLoader(true);
    // setTimeout(async () => {
    //   try {
    //     let response = await getUser(token);
    //     setUserName(response.data.data.first_name);
    //     // console.log(response.data.data.first_name,'====>name');

    //     dispatch(storeUserData(response.data.data));
    //     // console.log(response.data.data,'====>dispatchlog');
    //     // setLoader(false);
    //   } catch (error) {
    //     console.log(error);
    //     // setLoader(false);
    //   }
    // }, 100);
  };
  const HandleApt = (token,res1,res2,res3,res4,res5,res6,res7,res8,res9,res10,res11,res12) =>{
    console.log(">>",token,res1,res2,res3,res4,res5,res6,res7,res8,res9,res10,res11,res12);
    navigate("/sessiondetails",{
      state :{
        token,
        res1,
        res2,
        res3,
        res4,
        res5,
        res6,
        res7,
        res8,
        res9,
        res10,
        res11,
        res12
      }
    })
  }
  console.log("==>>%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%",token);

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

<div className="navshow">
            <TrainerHed/>
        </div>
        <div className="sidenavshow">
        <TrainerSideBar/>
        </div>
        <div className="mobilediv maincontainer">
      <Row className="maincontainer">
        {/* <Col  lg="1" md="1" sm="1" xs="1" ></Col> */}
       {/* <Col lg="2" md="3" sm="3" xs="3" >
        <TrainerSideBar/>
       </Col> */}
        {/* <Col  lg="1" md="0" sm="0" xs="1" ></Col> */}
        {/* <CardHome /> */}
        <Col lg="12" md="12" sm="12" xs="12" className="maincontainer">
            {/* <Container> */}
          <Row className="">
          <Col lg="3" md="2" sm="1" xs="1" className="maincontainer"></Col>
            <Col lg="6" md="8" sm="10" xs="10" className="maincontainer" >
              <div className="maiaptdiv maincontainer">
            {apt ? (
              <>
              <div className="text-center mb-4 mt-4 maincontainer">
              <h3>UPCOMING SESSIONS</h3>
            </div>
            <div className="scrolldiv maincontainer">
                  {apt && apt.map((obj,index) => (
                      <div className="maincontainer">
                      
                      <div className="maincontainer" key={index} onClick={() =>HandleApt(obj.user_token,obj.response_1,obj.response_2,obj.response_3,obj.response_4,obj.response_5,obj.response_6,obj.response_7,obj.response_8,obj.response_9,obj.response_10,obj.response_11,obj.response_12)}>
                        
                      <Link className="maincontainer" style={{textDecoration:"none"}}>
                      <Card className="aptlist maincontainer" sx={{marginTop:"2%" }}>
                      <CardContent className="maincontainer">
                        {/* <Typography sx={{ fontSize: 14, fontWeight: 'bold'}} color="text.secondary" gutterBottom>
                          Details
                        </Typography> */}
                       
                        <Typography variant="body2" sx={{ fontSize: 14, fontWeight: 'bold'}}>
                          Date: {moment(obj.apt_time).format("MM/DD/YYYY")}
                        </Typography>
                        <Typography variant="body2" sx={{ fontSize: 14, fontWeight: 'bold'}}>
                          Time: {moment(obj.apt_time).format("hh:mma")}

                        </Typography>
                      </CardContent>
                      {/* <CardActions>
                        <Button size="small">Learn More</Button>
                      </CardActions> */}
                    </Card>
                      </Link>
                      </div>
                      </div>
                    ))
                 }
           </div>
            </>
            ) : (
              <p className="center-screen">No record found</p>
            )}
           
             
           </div>
            </Col>
          <Col lg="3" md="2" sm="1" xs="1" className="maincontainer"></Col>

          </Row>
       

            {/* </Container> */}
        </Col>
      </Row>
      </div>
      {loader && <Loader />}
    </div>
  );
};

export default TrainerHome;
