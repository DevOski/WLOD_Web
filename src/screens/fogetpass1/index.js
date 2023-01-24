import React, { useState } from "react";
import "./forpass.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BasicExample, Navbarmenu, TopBar ,Error, Loader, Error2} from "../../component";
import bg2 from "../../assets/bg2.png";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/logo.png";
const Forget = () => {
  let navigate = useNavigate(); 
  const [password, setpassword] = useState('');
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [errorModal, setErrorModal] = useState(false);
  const [error, seterror] = useState(false);
  const [error2, seterror2] = useState(false);

  const [emailError, setEmailError] = useState('');
  
  const [loder, setloder] = useState(false);
  const handleChangeemail = event => {
    // setemail(event.target.value);

    console.log('value is:', event.target.value);
  };
  const handleChangepass = event => {
    setpassword(event.target.value);

    // console.log('value is:', event.target.value);
  };
  const goNewpass=()=>{
  //  if(email && password){
    navigate('/newpass');
    
  //  }
  }
  

  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const Close = () => {
    seterror(false);
  };
  const Close2 = () => {
    seterror2(false);
  navigate('/Verificationcode', {
      state:{
          email
        },
    });

  };
  
const recoverPassword=()=>{
  setloder(true);

  var formdata = new FormData();
formdata.append("email", email);

var requestOptions = {
  method: 'POST',
  body: formdata,
  redirect: 'follow'
};

fetch("https://dashboard.weightlossondemand.com/backend/api/forgot_pass", requestOptions)
  .then(response => response.json())
  .then(function(result){
    console.log("^^",result.status);
    if(result.status == "200"){
      
      setloder(false);
      setErrorMessage(result.message);
      seterror2(true);
    

    }else{
      setloder(false);
      setErrorMessage(result.message);
      seterror(true);
    

    }

  })
  .catch(error => console.log('error', error));
  // navigate('/Verificationcode');
}
 
//   const recoverPassword = () => {

//     var formdata = new FormData();
//     formdata.append('email', email);

//     var requestOptions = {
//       method: 'POST',
//       body: formdata,
//       redirect: 'follow',
//     };

//     fetch('https://dashboard.weightlossondemand.com/backend/api/check_email', requestOptions)
//       .then(response => response.json())
//       .then(result => {
//         console.log(result,'====>log');
//         if (result.message !== 'Email already exists') {
//           // setError(true);
//           // setEmailError('Invalid Email');
//         } else {
//           // setIsModalVisible(true);
//           var formdata = new FormData();
//           formdata.append('email', email.toLowerCase());
// console.log(email,'works');
//           var requestOptions = {
//             method: 'POST',
//             body: formdata,
//             redirect: 'follow',
//           };

//           fetch('https://dashboard.weightlossondemand.com/backend/api/forgot_pass', requestOptions)
//             .then(response => response.json())
//             .then(result => {
//               console.log(result,'result');
//               // setIsModalVisible(false);
//               if (result.message.includes('Check')) {
//                 // setIsModalVisible(false);
                
//               }
//             })
//             .catch(error => {
//               console.log('error', error);
//               // setIsModalVisible(false);
//             });
//         }
//       })
//       .catch(error => console.log('error', error));
//   };
const enterKye=(e)=>{
  if(e.key==="Enter"){
    recoverPassword();
    }
  }
  return (
    <>
   <BasicExample signup="signUp" logout='logout'/>
      {/* <Container fluid>
        <Navbar expand="lg" variant="light" bg="light">
          <Container>
            <Navbar.Brand href="#"><img className="header-logo" src={logo}/></Navbar.Brand>
          </Container>
        </Navbar>
      </Container> */}
      <Row>
        <Col lg='12'>
           <div className="box1">
           <h6>Enter your email address and we will send you a link to reset your password.</h6>
           </div>

           <div className="box2"> 
            <input type='text' placeholder="Enter your email" className=" form-control forgetinput"
             onChange={(event) => setEmail(event.target.value)}
             onKeyPress={enterKye}
            />
           </div>
            <div  className="recoverbutt2">

            <button onClick={recoverPassword} className="recoverbuttfor recover2">Recover my password </button>
            </div>
        </Col>
      </Row>

      
        {loder && <Loader />}
        {error2 && <Error2 onClick={Close2} tittle={errorMessage} />}
        {error && <Error onClick={Close} tittle={errorMessage} />}
    </>
  );
};

export default Forget;
