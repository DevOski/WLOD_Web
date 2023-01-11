import React, { useState,useEffect } from "react";
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

const textStyles = {
  button:{
    backgroundColor:"maroon",
    padding: '7px 9px',
    borderRadius: '7%',
    color:"white"
  }
}

const Rewiewpage = () => {
  const params = useLocation();
  console.log("data before edit", params?.state);
  console.log(params?.state.data, "data after edit");
  const [ebutton,setebutton]=useState("Edit Info")
  const[editstatus,seteditstatus]=useState(false)
  let navigate = useNavigate();
  useEffect(() => {
    if(params?.state?.edit == "true"){
      setebutton("Data Updated")
      seteditstatus(true)
    }
  }, [])
  
  const goto = () => {
    navigate("/Confrimandpay", {
      state: {
        data: params?.state?.data ? params?.state?.data : params?.state,
      },
    });
  };
  const gotoEdit=()=>{
    navigate('/updateinfo', {
      state: {
        data:params?.state,
      },
    })
  }
  return (
    <div className="of">
      <BasicExample />
      <Row class="d-flex justify-content-center flex-column align-items-center gap-5 pt-5">
        <Col
          lg="12"
          className="d-flex justify-content-center flex-column align-items-center pb-5"
        >
          <div className="d-flex justify-content-between  align-items-center ww">
            <div>
              <h3>Review your Health Profile </h3>
            </div>
           <div className="basicbuttdiv">
           <button onClick={gotoEdit} disabled={editstatus} style={textStyles.button}>{ebutton}</button>
           </div>
          </div>
          <div className="d-flex justify-content-between  align-items-center ww">
            <div>
              <h6> 1) List any health problems and physical limitations </h6>
              <p>Ans: {params?.state?.response1 ? params?.state?.response1 : params?.state?.data?.response1}</p>
            </div>
          </div>
          <div className="d-flex justify-content-between  align-items-center ww">
            <div>
              <h6> 2) List All Medications and their dosage</h6>
              <p>Ans: {params?.state?.response2 ? params?.state?.response2 : params?.state?.data?.response2}</p>
            </div>
          </div>
          <div className="d-flex justify-content-between  align-items-center ww">
            <div>
              <h6>3) Current Weight</h6>
              <p>Ans: {params?.state?.response3 ? params?.state?.response3 : params?.state?.data?.response3}</p>
            </div>
          </div>
          <div className="d-flex justify-content-between  align-items-center ww">
            <div>
              <h6>4) Current Height</h6>
              <p>Ans: {params?.state?.response4 ? params?.state?.response4 : params?.state?.data?.response4}</p>
            </div>
          </div>
          <div className="d-flex justify-content-between  align-items-center ww ">
            <div>
              <h6>
                5) What was your lowest and highest adult weight? __________lb
                __________lb
              </h6>
              <p>Ans: {params?.state?.response5 ? params?.state?.response5 : params?.state?.data?.response5}</p>
            </div>
          </div>
         
          <div className="d-flex justify-content-between  align-items-center ww">
            <div>
              <h6>
                {" "}
                6) Describe any weight changes (gain or loss) in the past 2
              </h6>
              <p>Ans: {params?.state?.response6 ? params?.state?.response6 : params?.state?.data?.response6}</p>
            </div>
          </div>
          <div className="d-flex justify-content-between  align-items-center ww">
            <div>
              <h6>
                7) Have you dieted in the past for weight loss? (No/Yes) If yes,
              </h6>
              <p>Ans: {params?.state?.response7 ? params?.state?.response7 : params?.state?.data?.response7}</p>
            </div>
          </div>
          <div className="d-flex justify-content-between  align-items-center ww">
            <div>
              <h6> 8) How much weight would you like to lose?</h6>
              <p>Ans: {params?.state?.response8 ? params?.state?.response8 : params?.state?.data?.response8}</p>
            </div>
          </div>
          <div className="d-flex justify-content-between  align-items-center ww">
            <div>
              <h6> 9) How will you benefit from this weight loss?</h6>
              <p>Ans: {params?.state?.response9 ? params?.state?.response9 : params?.state?.data?.response9}</p>
            </div>
          </div>
          <div className="d-flex justify-content-between  align-items-center ww">
            <div>
              <h6>10) What, if any, regular exercises do you do?</h6>
              <p>Ans: {params?.state?.regularexercises ? params?.state?.regularexercises : params?.state?.data?.regularexercises}</p>
            </div>
          </div>
          <div className="d-flex justify-content-between  align-items-center ww">
            <div>
              <h6> 11) Who plans the meals at home?</h6>
              <p>Ans: {params?.state?.plansthemeals ? params?.state?.plansthemeals : params?.state?.data?.plansthemeals}</p>
            </div>
          </div>
          <div className="d-flex justify-content-between  align-items-center ww">
            <div>
              <h6> 12) Who prepares the meals at home?</h6>
              <p>Ans: {params?.state?.preparesthemeal ? params?.state?.preparesthemeal : params?.state?.data?.preparesthemeal}</p>
            </div>
          </div>
          <div className="d-flex justify-content-center  align-items-center  ">
            <Button className="reviewbutton" onClick={goto}>
              Confirm
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Rewiewpage;
