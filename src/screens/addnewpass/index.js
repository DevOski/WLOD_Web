import React, { useState } from "react";
import "./addnew.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Navbarmenu, TopBar,Error, Loader, Error2 } from "../../component";
import bg2 from "../../assets/bg2.png";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/logo.png";
import { useLocation } from "react-router-dom";

const Addnew = () => {
  let navigate = useNavigate(); 
  const params = useLocation();
  console.log("^@^",params.state.email);
  const [password, setpassword] = useState('');
  const [cpassword, setcpassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  
  const [error, seterror] = useState(false);
  const [error2, seterror2] = useState(false);
  const [loder, setloder] = useState(false);
const Close = () => {
  seterror(false);
};
const Close2 = () => {
  seterror2(false);
 navigate('/sigin');
}

const [email, setemail] = useState('')
  const handleChangeemail = event => {
    setemail(event.target.value);

    console.log('value is:', event.target.value);
  };
  const handleChangepass = event => {
    setpassword(event.target.value);

    // console.log('value is:', event.target.value);
  };
  const UpdatePass=()=>{
    setloder(true)
    if(password != ""){
    if(cpassword != ""){
      if(password === cpassword){
        var formdata = new FormData();
        formdata.append("password", password);
        formdata.append("email", params.state.email);
        
        var requestOptions = {
          method: 'POST',
          body: formdata,
          redirect: 'follow'
        };
        
        fetch("http://alsyedmmtravel.com/api/new_password", requestOptions)
          .then(response => response.json())
          .then(result => {
            console.log(result)
            if(result.status == "200"){
      
              setloder(false);
              setErrorMessage(result.message);
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
        // navigate('/sigin');
        
      }else{
        setloder(false);
        setErrorMessage("Password don't match!");
        seterror(true);
      }
    }else{
      setloder(false);
      setErrorMessage("Confirm password can't be empty");
      seterror(true);
    }

    }else{
      setloder(false);
      setErrorMessage("Password can't be empty");
      seterror(true);
    }
    
  }
  return (
    <>
      <Container fluid>
        <Navbar expand="lg" variant="light" bg="light">
          <Container>
            <Navbar.Brand href="#"><img src={logo}/></Navbar.Brand>
          </Container>
        </Navbar>
      </Container>
      <Row>
        <Col lg='10'>
         

           <div className="boxadd"> 
           <label>New Password</label>
            <input type='text' placeholder="enter your email" className="forgetinput"
             onChange={(event) => setpassword(event.target.value)}
            />
            <label>Confirm Password</label>
            <input type='text' placeholder="enter your email" className="forgetinput"
             onChange={(event) => setcpassword(event.target.value)}
            
            />
            
            <button onClick={UpdatePass} className="newpassbutt">Submit</button>
           </div>
        </Col>
      </Row>
      {loder && <Loader />}
        {error2 && <Error2 onClick={Close2} tittle={errorMessage} />}
        {error && <Error onClick={Close} tittle={errorMessage} />}
      
    </>
  );
};

export default Addnew;
