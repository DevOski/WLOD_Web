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
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import { useLocation } from "react-router-dom";
const Questionpagetwo = () => {
  const params = useLocation();
console.log("^^^",params.state);
  let navigate = useNavigate();
  const [allergiesintolerances, setallergiesintolerances] = useState('')
  const [list1, setlist1] = useState('')
  const [dose1, setdose1] = useState('')
  const [list2, setlist2] = useState('')
  const [dose2, setdose2] = useState('')
  const [list3, setlist3] = useState('')
  const [dose3, setdose3] = useState('')
  const [list4, setlist4] = useState('')
  const [dose4, setdose4] = useState('')
  const [list5, setlist5] = useState('')
  const [dose5, setdose5] = useState('')
  const [stressinyourlife, setstressinyourlife] = useState('')
  const [copewithstress, setcopewithstress] = useState('')
  const [culturalorreligious, setculturalorreligious] = useState('')
  const [readinesstomakelifestyle, setreadinesstomakelifestyle] = useState('')
  const [confidencetomakelifestyle, setconfidencetomakelifestyle] = useState('')
  const [physicallimitations,setphysicallimitations] = useState('')
  function handleNext() {
    console.log("hello");
    const response2={"medication1":list1,"dosage1":dose1,"medication2":list2,"dosage2":dose2,"medication3":list3,"dosage3":dose3,"medication4":list4,"dosage4":dose4,"medication5":list5,"dosage5":dose5};
    const response1=physicallimitations;
    console.log("array", response1);
    navigate("/question3",{
      state :{
        response1,
        response2
      }
    });
  };
  
  const [isrestfulsleepNo, setisrestfulsleepNo] = useState(false);
  const [isrestfulsleepyes, setisrestfulsleepyes] = useState(false);
  const handleOnChange = () => {
    setisrestfulsleepyes(!isrestfulsleepyes);
    setisrestfulsleepNo(!isrestfulsleepNo)
  };
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
        <Col
          lg="12"
          className="d-flex justify-content-center flex-column align-items-center"
        >
          <div className="d-flex justify-content-between   align-items-center ww">
            <h4>General Health Information</h4>
          </div>
          <div className="d-flex justify-content-between  flex-column  align-items-center ww">
            {/* <div className="mb-3 inwi">
              <label>List any allergies/intolerances: </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter allergies/intolerances"
                onChange={event => setallergiesintolerances(event.target.value)}
              />
            </div> */}
            <div className="mb-3 inwi">
              <label>List any health problems and physical limitations: </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter health problems/physical limitations"
                onChange={event => setphysicallimitations(event.target.value)} 
              />
            </div>
            

            <Table striped bordered hover>
              <thead>
                <tr>
                  <th colSpan={3}>
                    List All Medications, Vitamins, and Herbals:{" "}
                  </th>
                  <th>Dosage:</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={3}><input type="text" className="form-control" placeholder="Enter Medications, Vitamins, and Herbals" onChange={event => setlist1(event.target.value)} /></td>
                  <td><input type="text" className="form-control" placeholder="Enter Dosage"  onChange={event => setdose1(event.target.value)} /></td>
                </tr>
                <tr>
                  <td colSpan={3}><input type="text" className="form-control" placeholder="Enter Medications, Vitamins, and Herbals" onChange={event => setlist2(event.target.value)} /></td>
                  <td><input type="text" className="form-control" placeholder="Enter Dosage" onChange={event => setdose2(event.target.value)} /></td>
                </tr>
                <tr>
                  <td colSpan={3}><input type="text" className="form-control" placeholder="Enter Medications, Vitamins, and Herbals" onChange={event => setlist3(event.target.value)} /></td>
                  <td><input type="text" className="form-control" placeholder="Enter Dosage" onChange={event => setdose3(event.target.value)} /></td>
                </tr>
                <tr>
                  <td colSpan={3}><input type="text" className="form-control" placeholder="Enter Medications, Vitamins, and Herbals" onChange={event => setlist4(event.target.value)} /></td>
                  <td><input type="text" className="form-control" placeholder="Enter Dosage" onChange={event => setdose4(event.target.value)} /></td>
                </tr>
                <tr>
                  <td colSpan={3}><input type="text" className="form-control" placeholder="Enter Medications, Vitamins, and Herbals" onChange={event => setlist5(event.target.value)}  /></td>
                  <td><input type="text" className="form-control" placeholder="Enter Dosage" onChange={event => setdose5(event.target.value)}  /></td>
                </tr>
              </tbody>
            </Table>
            {/* <div className="mb-3 w-100">
          <label>How many hours of sleep do you average per night? _____ Is your sleep restful?</label>
          <div className="d">
          <div className="topping">
        <input
          type="checkbox"
          id="topping"
          name="topping"
          value="Yes"
          className="topping"
          checked={isrestfulsleepyes}
          onChange={handleOnChange}
        />
        <p className="pleft">Yes</p>
      </div>
      <div className="topping">
        <input
          type="checkbox"
          id="topping"
          name="topping"
          value="No"
          checked={isrestfulsleepNo}
          className="topping"
          onChange={handleOnChange}
        />
        <p className="pleft">No</p>
      </div>
          </div>
      
        </div> */}
        {/* <div className="mb-3 inwi">
              <label>How do you rate the stress in your life, 10 being the highest? 1 2 3 4 5 6 7 8 9 10</label>
              <input
                type="text"
                className="form-control"
                placeholder="Add your stress rate"
                onChange={event => setstressinyourlife(event.target.value)} 
              />
            </div> */}
            {/* <div className="mb-3 inwi">
              <label>How do you cope with stress?</label>
              <input
                type="text"
                className="form-control"
                placeholder="Add your stress rate"
                onChange={event => setcopewithstress(event.target.value)} 
              />
            </div> */}
            {/* <div className="mb-3 inwi">
              <label>List any cultural or religious practices related to your health or diet:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Add your stress rate"
                onChange={event => setculturalorreligious(event.target.value)} 
              />
            </div> */}
            {/* <div className="mb-3 inwi">
              <label>How do you rate your readiness to make lifestyle changes, 5 being most ready? 1 2 3 4 5</label>
              <input
                type="text"
                className="form-control"
                placeholder="Add your stress rate"
                onChange={event => setreadinesstomakelifestyle(event.target.value)} 
              />
            </div> */}
            {/* <div className="mb-3 inwi">
              <label>How do you rate your confidence to make lifestyle changes, 5 being most confident? 1 2 3 4 5</label>
              <input
                type="text"
                className="form-control"
                placeholder="Add your stress rate"
                onChange={event => setconfidencetomakelifestyle(event.target.value)} 
              />
            </div> */}
           

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
          </div> */}
            {/* <div className="d-flex justify-content-between  align-items-center ww">
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
            {/* <div className="d-flex justify-content-between  align-items-center ww">
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
              <Button className="bdiv" onClick={handleNext}>
              Next
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Questionpagetwo;
