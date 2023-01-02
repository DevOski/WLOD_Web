import React, { useState, useEffect, useRef } from "react";
import logo from "../../assets/logo.png";
import book from "../../assets/book.png";
import Navbar from "react-bootstrap/Navbar";
import { Button, Col, Container, Nav, Row } from "react-bootstrap";
import "./vi.css";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { MdExpandLess } from "@react-icons/all-files/md/MdExpandLess";
import { GiHamburgerMenu } from "@react-icons/all-files/gi/GiHamburgerMenu";
import { BasicExample, CardHome, SideBar, Visitcom } from "../../component";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
const textStyles ={
  circle:{
    
      // display: 'inline-block',
  // margin:"auto",
  // padding: 10,
  width:' 130px',
  height: '130px',    
  lineHeight: '50px',
  fontSize: '12px',
  fontWeight: 'lighter !important',
  // color:' #fff !important',
  // textAlign: 'center',
  whiteSpace: 'nowrap',
  // verticalAlign: 'baseline',
  // backgroundColor: '#d73d33',
  borderRadius:'80px',
  // position: 'relative',
  top: '-3px',
  border:'solid'
  }
}

const Visitpage = () => {
  let navigate = useNavigate();
  const [show, setshow] = useState(false);
  const [drawer, setdrawer] = useState(true);
  const [Visit, setVisit] = useState("");
  const [trainer, settrainer] = useState();
  const [Document, setDocument] = useState();
  const [Message, setMessage] = useState();
  const [home, sethome] = useState("");
  const visitValidation = useRef("");

  const open = () => {
    setshow(!show);
  };
  const opendarwer = () => {
    setdrawer(!drawer);
  };
  const visit = () => {
    setVisit("'0'");
  };
  const goto =()=>{
    navigate('/booksession');
  }
  const token = useSelector((state) => state.token);
  console.log(token, "====>token");
  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", token);
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    fetch("https://dashboard.weightlossondemand.com/backend/api/past_visit", requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log("==>",result.trainer); 
        settrainer(result.trainer[0].tr_name)
        sethome(result.trainer[0].images)
        setVisit(result)
        console.log("visitttt",Object.keys(Visit).length);
        visitValidation.current = result;
        console.log("dataaa",visitValidation.current.visit);
       
      })
      .catch(error => console.log('error', error));
  }, [])
  
   const abc =Object.keys(Visit);
  return (
    <div className="wi55">
       <BasicExample/>
      <Row>
       <Col>
        <SideBar/>
       </Col>
        
        <Col lg="9">
            <div className="text-center mt-4 mr-4">
              <h3>Visit Details</h3>
              </div>
              <Row >
                <Col sm={6} >
                  <h5>Consultant Name</h5>
                  {trainer}
                </Col>
                <Col sm={6}>
                  <img src={home} style={textStyles.circle}/>
                </Col>
              </Row>
              <h4>User Name</h4>
          {Object.keys(Visit).length ? (

          //  visitValidation.current["visit_id"]
          Object.entries(visitValidation.current).map((item)=>
               { return (
                <div>
                  
                {/* <tr>
                <td>{item[1].visit_id}</td> */}
                <span>{item[1].first_name}</span> <span>{item[1].last_name}</span>
              {/* </tr> */}
           {/* <td>{trainer.map(item => {return (<p>{item.tr_name}</p>)})}</td>  */}
           </div>
                )
                })
            // <h5>hello</h5>
                // Visit.map( item =>{
                //   return(
                //     <div className="text-center">
                //   <h1>Your Recent Visit</h1>
                //   <div className="classextbuttonsl">
                //     <p className="timeslot">Time:{item.visit_id}</p> 
                //   </div>
                //   </div> 
                //   )
                // })
              ) : (
                <div className="text-center "><h4 className="visitt">No recent Visit</h4> </div>
              )}
       
        
           
          
          {/* <div className="vishpage">
            <div className="visitt">
              <p className="tit">SESSIONS REQUESTS</p>
            </div>
            <div className="visitt2">
              <p >No follow up requests</p>
            </div>
            <div className="visitt">
              <p className="tit">UPCOMING SESSIONS</p>
            </div>
            <div className="visitt2">
              <p >No upcoming sessions</p>
            </div>
            <div className="visitt">
              <p className="tit">Jeff PAST SESSIONS</p>
            </div>
            <div className="visitt2">
              <p>No past sessions</p>
            </div>
            <div className="visitt2but">
              <Button onClick={goto} className="bbbb visit-book-btn">Book a Sessions</Button>
            </div>
          </div> */}
          
        </Col>
       
      </Row>
    </div>
  );
};

export default Visitpage;
