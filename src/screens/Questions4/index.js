import React, { useState } from "react";
import "./q.css";
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
import Form from "react-bootstrap/Form";
import { useLocation } from "react-router-dom";
const Questionpagefour = () => {
  const params = useLocation();
  console.log("^^^", params.state);
  const [physicallyactive, setphysicallyactive] = useState("");
  const [regularexercises, setregularexercises] = useState("");
  const [Howmanyminutesperday, setHowmanyminutesperday] = useState("");
  const [levelofintensity, setlevelofintensity] = useState("");
  const [exerciseintoyourschedule, setexerciseintoyourschedule] = useState("");
  const [limitationstoexercising, setlimitationstoexercising] = useState("");

  let navigate = useNavigate();
  const goto = () => {
    console.log("works", regularexercises);
    navigate("/question5", {
      state: {
        params: params.state,
        regularexercises,
      },
    });
  };
  return (
    <>
      <BasicExample />

      <Row className="d-flex justify-content-center flex-column align-items-center  pt-5 pb-5">
        <Col
          lg="12"
          className="d-flex justify-content-center flex-column align-items-center"
        >
          <div className="d-flex justify-content-between   align-items-center ww">
            <h4>Physical Activity Information:</h4>
          </div>
          <div className="d-flex justify-content-between  flex-column  align-items-center ww">
            <div className="mb-3 inwi">
              <label>What, if any, regular exercises do you do? </label>
              <input
                type="text"
                className="form-control"
                placeholder="health problems and physical limitations"
                onChange={(event) => setregularexercises(event.target.value)}
              />
            </div>

            <div className="q-next-btn-div">
              <Button className="bdiv" onClick={goto}>
                Next
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Questionpagefour;
