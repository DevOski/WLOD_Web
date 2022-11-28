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
const Questionpagetwo = () => {
  let navigate = useNavigate();
  const goto = () => {
    navigate("/question3");
  };
  const [isChecked, setIsChecked] = useState(false);
  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <>
      <Container fluid>
        <Navbar expand="lg" variant="light" bg="light">
          <Container>
            <Navbar.Brand href="#">
              <img src={logo} />
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
            <div className="mb-3 inwi">
              <label>List any allergies/intolerances: </label>
              <input
                type="text"
                className="form-control"
                placeholder="List any allergies/intolerances"
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
                  <td colSpan={3}><input type="text" className="form-control" placeholder="Enter your Quries" /></td>
                  <td><input type="text" className="form-control" placeholder="Enter your Quries" /></td>
                </tr>
                <tr>
                  <td colSpan={3}><input type="text" className="form-control" placeholder="Enter your Quries" /></td>
                  <td><input type="text" className="form-control" placeholder="Enter your Quries" /></td>
                </tr>
                <tr>
                  <td colSpan={3}><input type="text" className="form-control" placeholder="Enter your Quries" /></td>
                  <td><input type="text" className="form-control" placeholder="Enter your Quries" /></td>
                </tr>
                <tr>
                  <td colSpan={3}><input type="text" className="form-control" placeholder="Preferred Phone Number" /></td>
                  <td><input type="text" className="form-control" placeholder="Preferred Phone Number" /></td>
                </tr>
                <tr>
                  <td colSpan={3}><input type="text" className="form-control" placeholder="Enter your Quries" /></td>
                  <td><input type="text" className="form-control" placeholder="Enter your Quries" /></td>
                </tr>
              </tbody>
            </Table>
            <div className="mb-3 w-100">
          <label>How many hours of sleep do you average per night? _____ Is your sleep restful?</label>
          <div className="d">
          <div className="topping">
        <input
          type="checkbox"
          id="topping"
          name="topping"
          value="Yes"
          className="topping"
          checked={isChecked}
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
          checked={isChecked}
          className="topping"
          onChange={handleOnChange}
        />
        <p className="pleft">No</p>
      </div>
          </div>
      
        </div>
        <div className="mb-3 inwi">
              <label>How do you rate the stress in your life, 10 being the highest? 1 2 3 4 5 6 7 8 9 10</label>
              <input
                type="text"
                className="form-control"
                placeholder="Add your stress rate"
              />
            </div>
            <div className="mb-3 inwi">
              <label>How do you cope with stress?</label>
              <input
                type="text"
                className="form-control"
                placeholder="Add your stress rate"
              />
            </div>
            <div className="mb-3 inwi">
              <label>List any cultural or religious practices related to your health or diet:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Add your stress rate"
              />
            </div>
            <div className="mb-3 inwi">
              <label>How do you rate your readiness to make lifestyle changes, 5 being most ready? 1 2 3 4 5</label>
              <input
                type="text"
                className="form-control"
                placeholder="Add your stress rate"
              />
            </div>
            <div className="mb-3 inwi">
              <label>How do you rate your confidence to make lifestyle changes, 5 being most confident? 1 2 3 4 5</label>
              <input
                type="text"
                className="form-control"
                placeholder="Add your stress rate"
              />
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
            <div>
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

export default Questionpagetwo;
