import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  BasicExample,
  Error,
  Loader,
  Navbarmenu,
  TopBar,
} from "../../component";
import bg2 from "../../assets/bg2.png";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/logo.png";
import mother from "../../assets/mother.png";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import "./signup.css";
import Form from "react-bootstrap/Form";
import { AiFillStar } from "@react-icons/all-files/ai/AiFillStar";
import { useDispatch } from "react-redux";
import NavSidebar from "../../component/navsidebar";
const SignUp = () => {
  let navigate = useNavigate();
  const [checked, setchecked] = useState(false);
  const [email, setEmail] = useState(null);
  const [date, setdate] = useState(null);
  const [Password, setPassword] = useState(null);
  const [loder, setloder] = useState(false);
  const [error, seterror] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const gotomembershippage = () => {
    navigate("/member");
  };
  const Close = () => {
    seterror(false);
  };
  const handleagrement = () => {
    setchecked(!checked);
  };
  const handleSubmit = () => {
    console.log(checked, "=====>signup");

    if (email && Password && checked) {
      setloder(true);

      // if (email && Password ) {

      var formdata = new FormData();
      formdata.append("email", email.toLowerCase());

      var requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow",
      };

      fetch(
        "https://dashboard.weightlossondemand.com/backend/api/check_email",
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          if (result.message == "Email already exists ") {
            setloder(false);
            seterror(true);
            setErrorMessage(result.message);
          } else {
            navigate("/basic", {
              state: {
                email,
                Password,
                // checked,
                // isEnabled,
                // date,
              },
            });
          }
        })
        .catch((error) => {
          console.log("error", error);
          setloder(false);
        });

      // navigation.navigate('basicInfoscreens', {
      //   email,
      //   password,
      //   checked,
      //   isEnabled,
      //   date,
      // });
      // }else{
      //   setloder(false)
      //   alert("email should be provided")
      // }

      // navigate('/')
      // navigate('/basic', {state:{
      //   email,
      //   Password,
      //   // checked,
      //   // isEnabled,
      //   date,
      // }})
    }
  };
  // const handleInputChange = (e) => {
  //   const { id, value } = e.target;

  //   if (id === "email") {
  //     setEmail(value);
  //   }
  //   if (id === "date") {
  //     setdate(value);
  //   }
  //   if (id === "password") {
  //     setPassword(value);
  //   }
  //   navigate('/basic')
  // };
  const enterKye = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };
  return (
    <>
      {loder ? (
        <Loader />
      ) : error ? (
        <Error onClick={Close} tittle={errorMessage} />
      ) : (
        <div className="over">
          <div className="navshow">
            <BasicExample/>
        </div>
        <div className="sidenavshow" style={{height:'70px'}}>
        <NavSidebar />
        </div>
     

          <Row >
            <Col lg="6" className="maincontainer" >
              {/* <div className="imm" style={{border:'solid yellow'}}> */}
                <img style={{ width: "102%", height: "100%" }} src={mother} />
              {/* </div> */}
            </Col>
            <Col lg="6" className="bg " >
              <div className="grandgrandparent maincontainer">
                <h4>Weight Loss On Demand</h4>
                <p>Sign up and get professional consultancy</p>
                <div className="grandparentdiv maincontainer">
                  <div className="parentdiv ">
                    <div className="inputdiv maincontainer">
                      <div className="emaildiv mt-2 maincontainer">Email</div>
                      <div className="inputmain maincontainer">
                        <input
                          type="email"
                          id="email"
                          className="in"
                          onChange={(event) => setEmail(event.target.value)}
                          onKeyPress={enterKye}
                          placeholder="Email"
                        />
                      </div>
                    </div>
                    {/* <div className="inputdiv">
                  <div className="emaildiv">Date </div>
                  <div className="inputmain">
                    <input
                      type="date"
                      id="email"
                      className="in"
                      onChange={(event) => setdate(event.target.value)}
                      placeholder="Date of Birth"
                    />
                  </div>
                </div> */}
                    <div className="inputdiv maincontainer">
                      <div className="emaildiv mt-2 maincontainer">Password</div>
                      <div className="inputmain maincontainer">
                        <input
                          type="email"
                          id="pass"
                          className="in"
                          onChange={(event) => setPassword(event.target.value)}
                          onKeyPress={enterKye}
                          placeholder="Create password"
                        />
                      </div>
                    </div>
                    <div className="inputdiv maincontainer">
                      <div className="emaildiv maincontainer">
                        <input
                          type="checkbox"
                          id="topping"
                          name="topping"
                          value="Current"
                          checked={checked}
                          className="topping"
                          onChange={handleagrement}
                        />
                      </div>
                      <div className="inputmain2 maincontainer">
                        I agree to Weight Loss On Demand's
                        <span className="member" onClick={gotomembershippage}>
                          Membership Terms
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lastchild maincontainer">
                  <div className="signbb maincontainer">
                    <Button
                      className="signup-create-btn"
                      onClick={() => handleSubmit()}
                    >
                      Create account
                    </Button>
                  </div>

                  <p className="signup-already-member-text">
                    Already a member?{" "}
                    <a href="/sigin" className="signuponsingin">
                      Sign in
                    </a>
                  </p>
                </div>
              </div>
            </Col>
          </Row>

          <Container fluid className="bg2mm">
            <Row>
              <Col lg="4">
                <h3 className="foterhead">Lauren, Illinois</h3>
                <div>
                  <AiFillStar className="rate" />
                  <AiFillStar className="rate" />
                  <AiFillStar className="rate" />
                  <AiFillStar className="rate" />
                </div>
                <p className="foterhead">
                  "I love the convenience! When I need to see a doctor there is
                  always one available. Seeing my psychologist and psychiatrist
                  is a breeze too."
                </p>
              </Col>
              <Col lg="4">
                <h3 className="foterhead">Lois, New Mexico</h3>
                <div>
                  <AiFillStar className="rate" />
                  <AiFillStar className="rate" />
                  <AiFillStar className="rate" />
                  <AiFillStar className="rate" />
                </div>
                <p className="foterhead">
                  "I was able to get a prescription at my local pharmacy and a
                  dr's note stating my return to work date for my employer. Best
                  part, my insurance covered it!"
                </p>
              </Col>
              <Col lg="4">
                <h3 className="foterhead">Troy, California</h3>
                <div>
                  <AiFillStar className="rate" />
                  <AiFillStar className="rate" />
                  <AiFillStar className="rate" />
                  <AiFillStar className="rate" />
                </div>
                <p className="foterhead">
                  "The doctors are always so helpful and caring. They are very
                  thorough and truly care about your wellbeing."
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      )}
    </>
  );
};

export default SignUp;
