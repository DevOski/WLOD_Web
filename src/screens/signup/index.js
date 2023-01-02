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
const SignUp = () => {
  let navigate = useNavigate();
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
  const handleSubmit = () => {
    setloder(true);
    if (email && Password && date) {
      var formdata = new FormData();
      formdata.append("email", email.toLowerCase());

      var requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow",
      };

      fetch("https://dashboard.weightlossondemand.com/backend/api/check_email", requestOptions)
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
                date,
              },
            });
          }
        })
        .catch((error) => console.log("error", error));

      // navigation.navigate('basicInfoscreens', {
      //   email,
      //   password,
      //   checked,
      //   isEnabled,
      //   date,
      // });
    }

    // navigate('/')
    // navigate('/basic', {state:{
    //   email,
    //   Password,
    //   // checked,
    //   // isEnabled,
    //   date,
    // }})
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

  return (
    <>
      <div className="over">
        <BasicExample />
       
        <Row>
          <Col lg="6">
            <div className="imm">
              <img style={{ width: "100%", heigh: "100%" }} src={mother} />
            </div>
          </Col>
          <Col lg="6" className="bg">
            <div className="grandgrandparent">
              <h4>Weight Loss On Demand</h4>
              <p>Sign up and get professional consultancy</p>
              <div className="grandparentdiv">
                <div className="parentdiv">
                  <div className="inputdiv">
                    <div className="emaildiv">Email</div>
                    <div className="inputmain">
                      <input
                        type="email"
                        id="email"
                        className="in"
                        onChange={(event) => setEmail(event.target.value)}
                        placeholder="Email"
                      />{" "}
                    </div>
                  </div>
                  <div className="inputdiv">
                    <div className="emaildiv">Date </div>
                    <div className="inputmain">
                      <input
                        type="date"
                        id="email"
                        className="in"
                        onChange={(event) => setdate(event.target.value)}
                        placeholder="Date of Birth"
                      />{" "}
                    </div>
                  </div>
                  <div className="inputdiv">
                    <div className="emaildiv">Password</div>
                    <div className="inputmain">
                      <input
                        type="email"
                        id="email"
                        className="in"
                        onChange={(event) => setPassword(event.target.value)}
                        placeholder="Password"
                      />{" "}
                    </div>
                  </div>
                  <div className="inputdiv">
                    <div className="emaildiv">
                      {["checkbox"].map((type) => (
                        <div key={`default-${type}`} className="mb-3">
                          <Form.Check
                            type={type}
                            id={`default-${type}`}
                          />
                        </div>
                      ))}
                    </div>
                    <div className="inputmain2">
                      I agree to Weight Loss On Demand's
                      <span className="member" onClick={gotomembershippage}>
                        Membership Terms
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lastchild">
                <Button
                  className="signup-create-btn"
                  onClick={() => handleSubmit()}
                >
                  Create account
                </Button>
                <p className="signup-already-member-text">
                  Already a member?{" "}
                  <a href="/sigin" className="signuponsingin">
                    Sign in
                  </a>{" "}
                </p>
              </div>
            </div>
          </Col>
        </Row>

        <Container fluid className="bg2">
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
             ' Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur a ultrices lacus. Fusce nec pharetra lacus, in
                condimentum mi. '
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
             " Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur a ultrices lacus. Fusce nec pharetra lacus, in
                condimentum mi. "
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
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur a ultrices lacus. Fusce nec pharetra lacus, in
                condimentum mi. "
              </p>
            </Col>
          </Row>
        </Container>

        {loder && <Loader />}
      </div>
      {error && <Error onClick={Close} tittle={errorMessage} />}
    </>
  );
};

export default SignUp;
