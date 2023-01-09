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
import Table from "react-bootstrap/Table";
import { useLocation } from "react-router-dom";
const Questionpagefive = () => {
  const params = useLocation();
  console.log("^^^", params.state);
  const [Meal, setMeal] = useState("");
  const [Time, setTime] = useState("");
  const [FoodsandBeverages, setFoodsandBeverages] = useState("");
  const [Snack, setSnack] = useState("");
  const [SnackTime, setSnackTime] = useState("");
  const [snackbevrage, setsnackbevrage] = useState("");
  const [Lunch, setLunch] = useState("");
  const [LunchTime, setLunchTime] = useState("");
  const [LunchTimebevrage, setLunchbevrage] = useState("");
  const [Dinner, setDinner] = useState("");
  const [DinnerTime, , setDinnerTime] = useState("");
  const [Dinnerbevrage, setDinnerbevrage] = useState("");
  const [outatrestaurantsfastfood, setoutatrestaurantsfastfood] = useState("");
  const [Whichgrocerystores, setWhichgrocerystores] = useState("");
  const [groceryshopping, setgroceryshopping] = useState("");
  const [plansthemeals, setplansthemeals] = useState("");
  const [preparesthemeal, setpreparesthemeal] = useState("");
  const [tochangewithyourdiet, settochangewithyourdiet] = useState("");

  let navigate = useNavigate();
  const goto = () => {
    navigate("/Reviewpage", {
      state: {
        params: params.state,
        plansthemeals,
        preparesthemeal,
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
            <h4>Nutrition Information:</h4>
          </div>
          <div className="d-flex justify-content-between  flex-column  align-items-center ww">
            <div className="mb-3 inwi">
              <label>Who plans the meals at home?</label>
              <input
                type="text"
                className="form-control"
                placeholder="Add your stress rate"
                onChange={(event) => setplansthemeals(event.target.value)}
              />
            </div>
            <div className="mb-3 inwi">
              <label>Who prepares the meals at home? </label>
              <input
                type="text"
                className="form-control"
                placeholder="Add your stress rate"
                onChange={(event) => setpreparesthemeal(event.target.value)}
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

export default Questionpagefive;
