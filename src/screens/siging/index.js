import React, { useState } from "react";
import "./Siging.css";
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
import { Link, useNavigate } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/logo.png";
import { signIn } from "../../services/utilities/api";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { storeData } from "../../store/action";

const Siging = () => {
  let navigate = useNavigate();
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");
  const [loder, setloder] = useState(false);
  const [error, seterror] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const dispatch = useDispatch();

  const Close = () => {
    seterror(false);
  };
  const token = useSelector((state) => state.token);
  console.log("-------->>", token);
  const Sigin = async () => {
    if (email && password) {
      console.log(email, password);
      try {
        setloder(true);
        console.log("works2");

        let response = await signIn(email, password);

        if (response.data.message == "user found") {
          console.log(response.data.token);
          console.log(response.data);
          setloder(false);
          dispatch(storeData(response.data.token));
          navigate("/home");
          // dispatch(storeData(response.data.token));
          // console.log(response.data.data.fingerprint);
          // if (response.data.data.fingerprint == 1) {
          //   handleBiometric();
          // }
          // else{
          //   navigation.navigate('BottomNavs');
          // }

          // setError(false);
          // setLoader(false);
        } else if (response.data.message == "Trainer found") {
          console.log(response.data.type);
          setloder(false);

          navigate("/home");
          // seterror(true);
          // dispatch(storeData("$2y$10$kl2gP4WxK7V/IFAyBblRSOorRI3.VpxYsol6fjnJcebb0WwbtwjUi"));
          // dispatch(trainerStack(response.data.type));
        } else {
          console.log(response.data.message);
          setloder(false);
          setErrorMessage(response.data.message);
          seterror(true);
        }
      } catch (error) {
        console.log("err", error);
        // setError(true);
        // setErrorMessage(error.message);
        // setLoader(false);
      }
    }
  };
  return (
    <>
      <BasicExample />
      {/* <Container fluid>
        <Navbar expand="lg" variant="light" bg="light">
          <Container>
            <Navbar.Brand href="#">
              <img className="signin-logo" src={logo} />
            </Navbar.Brand>
          </Container>
        </Navbar>
      </Container> */}
      <div className="cen">
        <p className="well">Welcome</p>
      </div>

      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign in to Your Account</h3>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Enter email"
                onChange={(event) => setemail(event.target.value)}
                // value={email}
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                onChange={(event) => setpassword(event.target.value)}
                // value={password}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <Button
                onClick={Sigin}
                // className="btn btn-primary
                //  "
              >
                Submit
              </Button>
            </div>
            <div className="d-flex justify-content-between">
              <p className="forgot-password text-right mt-2">
                <a href="/forget" className="signuponsingin">
                  Forgot password?
                </a>
              </p>
              <p className="forgot-password d-flex text-right mt-2">
                <p>Don't have an account yet?</p>{" "}
                <a href="/signup" className="signuponsingin">
                  {" "}
                  SignUp{" "}
                </a>
              </p>
            </div>
          </div>
        </form>
        {loder && <Loader />}
        {error && <Error onClick={Close} tittle={errorMessage} />}
      </div>
      <div className="d-flex justify-content-center mt-2">
        <p>
          Sign InDon’t have an account yet?
          <a href="/signup" className="signuponsingin">
            {" "}
            Create an Account
          </a>
        </p>
      </div>
    </>
  );
};

export default Siging;
