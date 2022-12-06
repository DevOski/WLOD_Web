import React, { useState } from "react";
import "./q.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Navbarmenu, TopBar } from "../../component";
import bg2 from "../../assets/bg2.png";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/logo.png";
import { IoIosArrowForward } from "@react-icons/all-files/io/IoIosArrowForward";
import { Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
const Questionpagefour = () => {
  const [physicallyactive, setphysicallyactive] = useState('')
  const [regularexercises, setregularexercises] = useState('')
  const [Howmanyminutesperday, setHowmanyminutesperday] = useState('')
  const [levelofintensity, setlevelofintensity] = useState('')
  const [exerciseintoyourschedule, setexerciseintoyourschedule] = useState('')
  const [limitationstoexercising, setlimitationstoexercising] = useState('')

  let navigate = useNavigate(); 
  const goto =()=>{
    navigate('/question5');
  }
  return (
    <>
      <Container fluid>
        <Navbar expand="lg" variant="light" bg="light">
          <Container>
            <Navbar.Brand href="#">
              <img className="header-logo" src={logo} />
            </Navbar.Brand>
          </Container>
        </Navbar>
      </Container>
      <Row class="d-flex justify-content-center flex-column align-items-center  pt-5 pb-5">
        <Col lg="12"className="d-flex justify-content-center flex-column align-items-center">
          <div className="d-flex justify-content-between   align-items-center ww">
            
        <h4>Physical Activity Information:</h4>
          </div>
          <div className="d-flex justify-content-between  flex-column  align-items-center ww">
          <div className="mb-3 inwi">
          <label>What is the most physically active thing you do in a day? </label>
          <input type="text" className="form-control" placeholder="health problems and physical limitations" onChange={event => setphysicallyactive(event.target.value)} />
        </div>
        <div className="mb-3 inwi">
          <label>What, if any, regular exercises do you do? </label>
          <input type="text" className="form-control" placeholder="health problems and physical limitations" onChange={event => setregularexercises(event.target.value)} />
        </div>
        <div className="mb-3 inwi">
          <label>How many days a week? ____________ How many minutes per day?</label>
          <input type="text" className="form-control" placeholder="health problems and physical limitations" onChange={event =>setHowmanyminutesperday(event.target.value)} />
        </div>
        <div className="mb-3 inwi">
          <label>At what level of intensity (light, moderate, or high)?</label>
          <input type="text" className="form-control" placeholder="health problems and physical limitations"  onChange={event =>  setlevelofintensity(event.target.value)} />
        </div>
        <div className="mb-3 inwi">
          <label>What time(s) of day can you fit exercise into your schedule? </label>
          <input type="text" className="form-control" placeholder="health problems and physical limitations" onChange={event =>  setexerciseintoyourschedule(event.target.value)} />
        </div>
        <div className="mb-3 inwi">
          <label>List any physical limitations to exercising:</label>
          <input type="text" className="form-control" placeholder="health problems and physical limitations"  onChange={event =>  setlimitationstoexercising(event.target.value)} />
        </div>
          {/* <div className="d-flex justify-content-between  align-items-center  ww">
          <div>
              <p>reaon</p>
            </div>
          <div>
          {['checkbox', ].map((type) => (
        <div key={`default-${type}`} className="mb-3">
          <Form.Check 
            type={type}
            id={`default-${type}`}
            // label={`default ${type}`}
          />      
          </div>))}
          </div>
          </div>
          <div className="d-flex justify-content-between  align-items-center ww">
          <div>
              <p>reason</p>
            </div>
          <div>
          {['checkbox',].map((type) => (
        <div key={`default-${type}`} className="mb-3">
          <Form.Check 
            type={type}
            id={`default-${type}`}
            // label={`default ${type}`}
          />      
          </div>))}
          </div>
          </div>
          <div className="d-flex justify-content-between  align-items-center ww">
          <div>
              <p>reason</p>
            </div>
          <div>
          {['checkbox',].map((type) => (
        <div key={`default-${type}`} className="mb-3">
          <Form.Check 
            type={type}
            id={`default-${type}`}
            // label={`default ${type}`}
          />      
          </div>))}
          </div>
          </div> */}
          <div className="q-next-btn-div">

          <Button className="bdiv" onClick={goto}>Next</Button>
          </div>
          </div>
        </Col>
       
      </Row> 
    </>
  );
};

export default Questionpagefour;
