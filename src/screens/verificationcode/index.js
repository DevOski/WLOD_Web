import React, { useState } from "react";
import "./verify.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Navbarmenu, TopBar, Error, Error2, Loader } from "../../component";
import bg2 from "../../assets/bg2.png";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/logo.png";
import VerificationInput from "react-verification-input";
import { useLocation } from "react-router-dom";

const VerificationCode = () => {
  let navigate = useNavigate(); 
  const [Verification, setVerification] = useState('')
  const [code, setcode] = useState('')
  const [errorMessage, setErrorMessage] = useState('');
  const [error, seterror] = useState(false);
  const [error2, seterror2] = useState(false);
  const [loder, setloder] = useState(false);
  
  const params = useLocation();
  console.log("^^^",params.state);

  const Close = () => {
    seterror(false);
  };
  const Close2 = () => {
    seterror2(false);
  navigate('/newpass', {
    state:{
      email:params.state.email
      },
  });

  };
  const submit=()=>{
    setloder(true)
    if(code != ""){
      var formdata = new FormData();
      formdata.append("email", params.state.email);
      formdata.append("code", code);
      
      var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
      };
      
      fetch("http://alsyedmmtravel.com/api/check_code", requestOptions)
        .then(response => response.json())
        .then(result => {
          console.log("====",result.message)
          if(result.status == "200"){
            setloder(false);
            setErrorMessage("Code Verified");
            seterror2(true);
            // alert(result.message)
          }else{
            setloder(false);
            setErrorMessage(result.message);
            seterror(true);
            // alert(result.message)
          }
      
      })
        .catch(error => console.log('error', error));
    }else{
      setloder(false);
      setErrorMessage("Code should be provided");
      seterror(true);
    }
    // navigate('/newpass')
  }
  return (
    <>
      <Container fluid>
        <Navbar expand="lg" variant="light" bg="light">
          <Container>
            <Navbar.Brand href="#"><img className="header-logo" src={logo}/></Navbar.Brand>
          </Container>
        </Navbar>
      </Container>
      <Row>
        <Col lg='12'>
           <div className="box1">
           <h6>Enter your Verificationcode</h6>
           </div>

           <div className="box2"> 
           <div className="d-flex justify-content-center">

           <VerificationInput
           length={4}
           onChange={(text)=>{setcode(text)}}
          //  validChars={0-9}
           />
          </div>
           {/* <div className="d-flex justify-content-center">
           <input type='text' placeholder="enter your Code here" className="forgetinput1"
             onChange={(event) => setVerification(event.target.value)}
            />
            <input type='text' placeholder="enter your Code here" className="forgetinput1"
             onChange={(event) => setVerification(event.target.value)}
            />
            <input type='text' placeholder="enter your Code here" className="forgetinput1"
             onChange={(event) => setVerification(event.target.value)}
            />
            <input type='text' placeholder="enter your Code here" className="forgetinput1"
             onChange={(event) => setVerification(event.target.value)}
            />
           </div> */}
            <button  className="recoverbutt" onClick={submit}>submit</button>
           </div>
        </Col>
      </Row>

      {loder && <Loader />}
        {error2 && <Error2 onClick={Close2} tittle={errorMessage} />}
        {error && <Error onClick={Close} tittle={errorMessage} />}
      
    </>
  );
};

export default VerificationCode;
