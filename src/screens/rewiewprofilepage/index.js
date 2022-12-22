import React from "react";
import "./vt.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BasicExample, Navbarmenu, TopBar } from "../../component";
import bg2 from "../../assets/bg2.png";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/logo.png";
import { IoIosArrowForward } from "@react-icons/all-files/io/IoIosArrowForward";
import { Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";
const Rewiewpage = () => {
  const params = useLocation();
console.log("^^^",params.state.params.params.response1);
  let navigate = useNavigate(); 
  const goto =()=>{
    navigate('/Confrimandpay');
  }
  return (
    <div className="of">
      
      <BasicExample/>
      <Row class="d-flex justify-content-center flex-column align-items-center gap-5 pt-5">
        <Col lg="12"className="d-flex justify-content-center flex-column align-items-center pb-5">
          <div  className="d-flex justify-content-between  align-items-center ww">
            <div>
              <h3>Review your Health Profile </h3>
              
            </div>
           
           
          </div>
          <div  className="d-flex justify-content-between  align-items-center ww">
            <div>
              <h4>Question1 </h4>
              <p>{params.state.params.params.response1}</p>
              
            </div>
          </div>
          <div  className="d-flex justify-content-between  align-items-center ww">
            <div>
            <h4>Question 2</h4>
              {/* <p>{params.state.params.params.response2.map((reptile,key) => <li key={reptile}>{reptile[0]}</li>)}</p> */}
            </div>
          </div>
          <div  className="d-flex justify-content-between  align-items-center ww">
            <div>
              <h4>Question 3</h4>
              <p>{params.state.params.params.response3}</p>
              
            </div>
          </div>
          <div  className="d-flex justify-content-between  align-items-center ww">
            <div>
              <h4>Question 4</h4>
              <p>{params.state.params.params.response4}</p>
              
            </div>
           
           
          </div>
          <div  className="d-flex justify-content-between  align-items-center ww ">
            <div>
              <h4>Question 5</h4>
              <p>{params.state.params.params.response5}</p>
              
            </div>
          </div>
          <div  className="d-flex justify-content-between  align-items-center ww">
            <div>
            <h4>Question 6</h4>
              <p>{params.state.params.params.response6}</p>
            </div>
          </div>
          <div  className="d-flex justify-content-between  align-items-center ww">
            <div>
            <h4>Question 7</h4>
              <p>{params.state.params.params.response7}</p>
            </div>
          </div>
          <div  className="d-flex justify-content-between  align-items-center ww">
            <div>
            <h4>Question 8</h4>
              <p>{params.state.params.params.response8}</p>
            </div>
          </div>
          <div  className="d-flex justify-content-between  align-items-center ww">
            <div>
            <h4>Question 9</h4>
              <p>{params.state.params.params.response9}</p>
            </div>
          </div>
          <div  className="d-flex justify-content-between  align-items-center ww">
            <div>
            <h4>Question 10</h4>
              <p>{params.state.params.regularexercises}</p>
            </div>
          </div>
          <div  className="d-flex justify-content-between  align-items-center ww">
            <div>
            <h4>Question 11</h4>
              <p>{params.state.plansthemeals}</p>
            </div>
          </div>
          <div  className="d-flex justify-content-between  align-items-center ww">
            <div>
            <h4>Question 12</h4>
              <p>{params.state.preparesthemeal}</p>
            </div>
          </div>
          <div  className="d-flex justify-content-center  align-items-center  ">
          
             <Button className="reviewbutton" onClick={goto}>submit</Button>
              
            
           
           
          </div>

        </Col>
      
      </Row>
    </div>
  );
};

export default Rewiewpage;
