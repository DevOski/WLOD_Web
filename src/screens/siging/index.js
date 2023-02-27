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
import { storeData, trainerStack, TrainerType } from "../../store/action";
import NavSidebar from '../../component/navsidebar/index'

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
  const Sigin = async () => {
    setloder(true);
    if (email && password) {
      console.log(email, password);
      try {
       
        console.log("works2");
        
        let response = await signIn(email, password);
        console.log("-------->>?", response.data);

        if (response.data.message == "user found") {
          console.log(response.data.token);
          console.log(response.data);
          setloder(false);
          dispatch(storeData(response.data.token));
          dispatch(trainerStack(response.data.type));

          navigate("/");
         
        }if (response.data.message == "Trainer found") {
          console.log(response.data.type,"======>");
          setloder(false);
          dispatch(storeData(response.data.token));
          dispatch(trainerStack(response.data.type));
          navigate("/trainermode");
          
        } else  {
          console.log(response.data.message);
          setloder(false);
          setErrorMessage(response.data.message);
          seterror(true);
        }
      } catch (error) {
        console.log("err", error);
      
      }
    }else{
      setloder(false);
      setErrorMessage("Email or password field is empty");
      seterror(true);
    }
  };
  const enterKye=(e)=>{
    if(e.key==="Enter"){
      Sigin();
      }
    }
  
  return (
    <>
     <div className="navshow">
            <BasicExample/>
        </div>
        <div className="sidenavshow">
        <NavSidebar />
        </div>

     <div className="maincontainer">
   <Container className="maincontainer">

      <div className="cen maincontainer">
        <p className="well">Welcome</p>
      </div>

      <div className="Auth-form-container maincontainer" >
        <form className="Auth-form maincontainer" >
          <div className="Auth-form-content maincontainer">
            <h3 className="Auth-form-title">Sign in to Your Account</h3>
            <div className="form-group mt-3 maincontainer">
              <label>Email address</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Enter email"
                onChange={(event) => setemail(event.target.value)}
                onKeyPress={enterKye}
                
                />
            </div>
            <div className="form-group mt-3 maincontainer">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1 "
                placeholder="Enter password"
                onChange={(event) => setpassword(event.target.value)}
                onKeyPress={enterKye}
                
                />
            </div>
            <div className="d-grid gap-2 mt-3 maincontainer">
              <Button
                onClick={Sigin}
                
                >
                Submit
              </Button>
            </div>
            <div className="d-flex justify-content-end maincontainer" >
              <p className="forgot-password  mt-2">
                <a href="/forget" className="signuponsingin">
                  Forgot password?
                </a>
              </p>
              </div>
              <div className="d-flex justify-content-center maincontainer">
              <p className="forgot-password mt-2">
               Don't have an account yet?<span><a href="/signup" className="signuponsingin">Sign Up </a></span>
              </p>
            </div>
          </div>
        </form>
      </div>
      </Container>
      </div>
      {/* <div className="d-flex justify-content-center mt-2">
        <p>
        Sign InDon’t have an account yet?
        <a href="/signup" className="signuponsingin">
        {" "}
            Create an Account
            </a>
            </p>
          </div> */}
        {loder && <Loader />}
        {error && <Error onClick={Close} tittle={errorMessage} />}
    </>
  );
};

export default Siging;
