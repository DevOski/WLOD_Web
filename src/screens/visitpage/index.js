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
import { BasicExample, CardHome, Loader, SideBar, Visitcom } from "../../component";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
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
  },
  list :{
    marginTop:'7%',
    display:'flex',
    flexDirection:'column'
  },
  ul :{
    listStyleType: 'none'
  },
  link :{
    textDecoration: 'none',
    color:'black'
  }
}

const Visitpage = () => {
  let navigate = useNavigate();
  const [show, setshow] = useState(false);
  const [fee, setfee] = useState("");
  const [drawer, setdrawer] = useState(true);
  const [loader, setloader] = useState(false)
  const [Visit, setVisit] = useState("");
  const [trainer, settrainer] = useState();
  const [username, setusername] = useState("");
  const [reason, setreason] = useState("");
  const [home, sethome] = useState("");
  const visitValidation = useRef("");
  const [visitdate,setVisitdate] =useState("")
  const [desc,setdesc] =useState("")


  const open = () => {
    setshow(!show);
  };
  const opendarwer = () => {
    // setfee(!fee);
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
  //   setVisit("hi")
  //   settrainer("Lisa")
  //   sethome("")
  //   setVisitdate(moment("05/01/2023").format("DD/MM/YYYY"))
  //   setusername("Maha Khan")
  //   setdesc("")
  // setreason("Wieght Loss")
  // setfee("$20")

    setloader(true)
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
        console.log("==>",result); 
        settrainer(result.trainer[0].tr_name)
        sethome(result.trainer[0].images)
        setVisit(result)
        console.log("visitttt",Object.keys(Visit).length);
        visitValidation.current = result;
        console.log("dataaa", visitValidation.current);
        console.log("logssssssssssssssssssssssssssssssssssssssssssssssssss",visitValidation.current.visit.visit_id);
          setVisitdate(moment(visitValidation.current.visit.created_at).format("DD/MM/YYYY"))
          setusername(visitValidation.current.user.first_name+" "+visitValidation.current.user.last_name)
          setdesc(visitValidation.current.visit.session_desc)
        setreason(visitValidation.current.visit.reason)
        setfee(visitValidation.current.visit.amount)
        setloader(false)
      })
      .catch(error => {console.log('error', error);setloader(false)});
      
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
          {Object.keys(Visit).length ? (
            <div> 

                <div className="text-center mt-4 mr-4">
              <h3>Visit Details</h3>
              </div>
              <Row className="mt-4 pt-4">
                <Col sm={6} className="mt-4">
                <h5>Visit Date</h5>
                {visitdate}
                <div style={textStyles.list}>
                <Link style={textStyles.link} to='/chat'> 
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-check2-circle" viewBox="0 0 16 16">
                <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
              </svg>  &nbsp;Message Support</Link>
                {/* <Link style={textStyles.link}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-check2-circle" viewBox="0 0 16 16">
                <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
              </svg>  &nbsp;Get Reciept</Link> */}
                </div>
              
                </Col>
                <Col sm={6} >
                  <img src={home} style={textStyles.circle} className="ml-4 pl-4"/>
                  <h5 className="mt-2 ml-4 pl-4" >Consultant Name</h5>
                  {trainer}
                </Col>
              </Row>
              <Row className="mt-4 pt-4">
              <Col sm={6}>
                <h5>User Name</h5>
                {username}
                </Col>
                <Col sm={6} >
              <h5>Session Reason</h5>
                {reason}
              </Col>
                
            </Row>
            <Row  className="mt-4 pt-4">
            <Col sm={6} style={{ overflowWrap:"break-word"}}>
              
              <h5>Session Description</h5>
              {desc != 'none' && desc ? desc : "Nothing to show"}
            </Col>
              <Col sm={6}>
              <h5>Total Cost</h5>
              {fee}
              </Col>

            </Row>
                </div> ) : (
                <div className="text-center "><h4 className="visitt">No recent Visit</h4> </div>
              )}

            {/*   {
          //  visitValidation.current["visit_id"]
          // Object.entries(visitValidation.current).map((item)=>
          //      { return (
                // <div>
                <tr>
                <td>{item[1].visit_id}</td> 
                {/* <span>{item[1].first_name}</span> <span>{item[1].last_name}</span> 
              {/* </tr> 
           {/* <td>{trainer.map(item => {return (<p>{item.tr_name}</p>)})}</td>  
          //  </div>
              //   )
              //   })
              // }
              
               

             
       
        
             {/* <h5>hello</h5>
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
          
           <div className="vishpage">
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
      {loader && <Loader />}
    </div>
  );
};

export default Visitpage;
