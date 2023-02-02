import React, { useState, useEffect } from "react";
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
import { useSelector } from "react-redux";
import NavSidebar from "../../component/navsidebar";

const textStyles = {
  button: {
    width:"100px",
    height:'38px',
    backgroundColor: "maroon",
    // padding: "7px 9px",
    borderRadius: "5px",
    color: "white",
    border:'none'
  },
};

const Rewiewpage = () => {
  const params = useLocation();
  console.log("data before edit", params?.state);
  console.log("+++++",useSelector((state) => state));

  console.log(params?.state.data, "data after edit");
  const [ebutton, setebutton] = useState("Edit Info");
  const [editstatus, seteditstatus] = useState(false);
  let navigate = useNavigate();
  const response1 = useSelector((state) => state.response1);
  const response2 = useSelector((state) => state.response2);
  const response3 = useSelector((state) => state.response3);
  const response4 = useSelector((state) => state.response4);
  const response5 = useSelector((state) => state.response5);
  const response6 = useSelector((state) => state.response6);
  const response7 = useSelector((state) => state.response7);
  const response8 = useSelector((state) => state.response8);
  const response9 = useSelector((state) => state.response9);
  const response10 = useSelector((state) => state.response10);
  const response11 = useSelector((state) => state.response11);
  const response12 = useSelector((state) => state.response12);
console.log(useSelector((state) => state.tr_name),'------------------------------->>>>>>>>>>>>');
  useEffect(() => {
    // if(params?.state?.edit == "true"){
    //   setebutton("Data Updated")
    //   seteditstatus(true)
    // }
  }, []);

  const goto = () => {
    navigate("/Confrimandpay", {
      state: {
        data: params?.state?.data ? params?.state?.data : params?.state,
      },
    });
  };
  const gotoEdit = () => {
    navigate("/updateinfo", {
      state: {
        data: params?.state,
      },
    });
  };
  console.log(params?.state);
  return (
    <div className="of">
       <div className="navshow">
            <BasicExample/>
        </div>
        <div className="sidenavshow">
        <NavSidebar />
        </div>
        <div className="mobilediv">
 
        <Row >
      <Col lg="3" md="2" sm="1" xs="1"></Col>
        <Col className="d-flex flex-column justify-content-center align-items-center"
          lg="6" md="8" sm="10" xs="10"
          >
          <div className="review">
            <div>
              <h3>Review your health profile </h3>
              <div className="d-flex flex-row">

              <p>
                Please review your basic info as it will be share with your
                consultant.&nbsp;&nbsp;
              </p>
              <p onClick={gotoEdit}><svg xmlns="http://www.w3.org/2000/svg" style={{marginTop:'-16px'}} width="26" height="26" fill="#be1f2d" class="bi bi-pencil-square " viewBox="0 0 16 16">
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
              </svg></p>
              </div>
            </div>
            {/* <div className="basicbuttdiv">
              <button
              onClick={gotoEdit}
              disabled={editstatus}
              style={textStyles.button}
              >
              {ebutton}
              </button>
            </div> */}
          </div>
          <div className="reviewbox mt-2">
            <div>
              <h6> 1) List any health problems and physical limitations </h6>
              <p>Ans: {response1}</p>
            </div>
          </div>
          <div className="reviewbox mt-2">
            <div>
              <h6> 2) List All Medications and their dosage</h6>
              <p>Ans: {response2}</p>
            </div>
          </div>
          <div className="reviewbox mt-2">
            <div>
              <h6>3) Current Weight</h6>
              <p>Ans: {response3}</p>
            </div>
          </div>
          <div className="reviewbox mt-2">
            <div>
              <h6>4) Current Height</h6>
              <p>Ans: {response4}</p>
            </div>
          </div>
          <div className="reviewbox mt-2 ">
            <div>
              <h6>
                5) What was your lowest and highest adult weight? __________lb
                __________lb
              </h6>
              <p>Ans: {response5}</p>
            </div>
          </div>

          <div className="reviewbox mt-2">
            <div>
              <h6>
                {" "}
                6) Describe any weight changes (gain or loss) in the past 2
              </h6>
              <p>Ans: {response6}</p>
            </div>
          </div>
          <div className="reviewbox mt-2">
            <div>
              <h6>
                7) Have you dieted in the past for weight loss? (No/Yes) If yes,
              </h6>
              <p>Ans: {response7}</p>
            </div>
          </div>
          <div className="reviewbox mt-2">
            <div>
              <h6> 8) How much weight would you like to lose?</h6>
              <p>Ans: {response8}</p>
            </div>
          </div>
          <div className="reviewbox mt-2">
            <div>
              <h6> 9) How will you benefit from this weight loss?</h6>
              <p>Ans: {response9}</p>
            </div>
          </div>
          <div className="reviewbox mt-2">
            <div>
              <h6>10) What, if any, regular exercises do you do?</h6>
              <p>Ans: {response10}</p>
            </div>
          </div>
          <div className="reviewbox mt-2">
            <div>
              <h6> 11) Who plans the meals at home?</h6>
              <p>Ans: {response11}</p>
            </div>
          </div>
          <div className="reviewbox mt-2">
            <div>
              <h6> 12) Who prepares the meals at home?</h6>
              <p>Ans: {response12}</p>
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center btwidth">
            <Button className="reviewbutton" onClick={goto}>
              Confirm
            </Button>
          </div>
        </Col>
      </Row>
    </div>
    </div>
  );
};

export default Rewiewpage;
