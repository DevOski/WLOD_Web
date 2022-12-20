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
const Questionpagefive = () => {
  const params = useLocation();
console.log("^^^",params.state);
const [Meal, setMeal] = useState('')
const [Time, setTime] = useState('')
const [FoodsandBeverages, setFoodsandBeverages] = useState('')
const [Snack, setSnack] = useState('')
const [SnackTime, setSnackTime] = useState('')
const [snackbevrage, setsnackbevrage] = useState('')
const [Lunch, setLunch] = useState('')
const [LunchTime, setLunchTime] = useState('')
const [LunchTimebevrage, setLunchbevrage] = useState('')
const [Dinner, setDinner] = useState('')
const [DinnerTime,, setDinnerTime] = useState('')
const [Dinnerbevrage, setDinnerbevrage] = useState('')
const [outatrestaurantsfastfood, setoutatrestaurantsfastfood] = useState('')
const [Whichgrocerystores, setWhichgrocerystores] = useState('')
const [groceryshopping, setgroceryshopping] = useState('')
const [plansthemeals, setplansthemeals] = useState('')
const [preparesthemeal, setpreparesthemeal] = useState('')
const [tochangewithyourdiet, settochangewithyourdiet] = useState('')

  let navigate = useNavigate();
  const goto = () => {
    navigate("/Reviewpage",{
      state : {
        params:params.state,
        plansthemeals,
        preparesthemeal
      }
    });
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
            <h4>Nutrition Information:</h4>
          </div>
          <div className="d-flex justify-content-between  flex-column  align-items-center ww">
            {/* <Table striped bordered hover> */}
             {/*  <thead>
                <tr>
                  <th >Meal</th>
                  <th >Time</th>
                  <th>Where Eaten</th>
                  <th colSpan={3}>Foods and Beverages </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Breakfast</td>
                  <td >
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your Quries"
                      onChange={event =>  setMeal(event.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your Quries"
                      onChange={event =>  setTime(event.target.value)}
                    />
                  </td>
                  <td colSpan={3}>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your Quries"
                      onChange={event =>  setFoodsandBeverages(event.target.value)}
                    />
                  </td>
                  
                </tr>
                <tr>
                  <td>Snack</td>
                  <td >
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your Quries"
                      onChange={event =>  setSnack(event.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your Quries"
                      onChange={event =>  setsnackbevrage(event.target.value)}
                    />
                  </td>
                  <td colSpan={3}>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your Quries"
                      onChange={event =>  setSnackTime(event.target.value)}
                    />
                  </td>
                  
                </tr>
                <tr>
                  <td>Lunch</td>
                  <td >
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your Quries"
                      onChange={event =>  setLunch(event.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your Quries"
                      onChange={event =>  setLunchTime(event.target.value)}
                    />
                  </td>
                  <td colSpan={3}>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your Quries"
                      onChange={event =>  setLunchbevrage(event.target.value)}
                    />
                  </td>
                  
                </tr> */}
                {/* <tr>
                  <td>Snack</td>
                  <td >
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your Quries"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your Quries"
                    />
                  </td>
                  <td colSpan={3}>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your Quries"
                    />
                  </td>
                  
                </tr> */}
                {/* <tr>
                  <td>Dinner</td>
                  <td >
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your Quries"
                      onChange={event =>  setDinner(event.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your Quries"
                      onChange={event =>  setDinnerTime(event.target.value)}
                    />
                  </td>
                  <td colSpan={3}>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your Quries"
                      onChange={event =>  setDinnerbevrage(event.target.value)}
                    />
                  </td>
                  
                </tr> */}
                {/* <tr>
                  <td>Snack</td>
                  <td >
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your Quries"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your Quries"
                    />
                  </td>
                  <td colSpan={3}>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your Quries"
                    />
                  </td>
                  
                </tr> */}
            
               
             
                
              {/* </tbody>*/}
            {/* </Table>  */}
            {/* <div className="mb-3 inwi">
              <label>How often do you eat out at restaurants/fast food?</label>
              <input
                type="text"
                className="form-control"
                placeholder="Add your stress rate"
                onChange={event =>  setoutatrestaurantsfastfood(event.target.value)}
              />
            </div> */}
            {/* 
             */}
            {/* <div className="mb-3 inwi">
              <label>Who does the grocery shopping?</label>
              <input
                type="text"
                className="form-control"
                placeholder="Add your stress rate"
                onChange={event =>  setgroceryshopping(event.target.value)}
              />
            </div> */}
            <div className="mb-3 inwi">
              <label>Who plans the meals at home?</label>
              <input
                type="text"
                className="form-control"
                placeholder="Add your stress rate"
                onChange={event =>  setplansthemeals(event.target.value)}
              />
            </div>
            <div className="mb-3 inwi">
              <label>Who prepares the meals at home? </label>
              <input
                type="text"
                className="form-control"
                placeholder="Add your stress rate"
                onChange={event =>  setpreparesthemeal(event.target.value)}
              />
            </div>
            {/* <div className="mb-3 inwi">
              <label>What 1 or 2 things would you like to change with your diet? </label>
              <input
                type="text"
                className="form-control"
                placeholder="Add your stress rate"
                onChange={event =>  settochangewithyourdiet(event.target.value)}
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

export default Questionpagefive;
