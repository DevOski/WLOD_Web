import React from "react";
import "./confirmandpay.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BasicExample, Navbarmenu, TopBar,Loader,Error} from "../../component";
import bg2 from "../../assets/bg2.png";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/logo.png";
import { IoIosArrowForward } from "@react-icons/all-files/io/IoIosArrowForward";
import { Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { useState,useEffect } from "react";

const ConfirmAndPay = () => {
  const params = useLocation();

console.log("confirm and pay",params.state);
console.log("^^^",params.state);
const [btext,setbtext]=useState("");
const [cost,setcost]=useState("$20");
const [bstatus,setbstatus]=useState(true);
const [bcolor,setbcolor]=useState("#979797");
const [paystatus,setpaystatus]=useState(false);
const [paycolor,setpaycolor]=useState("#bd3434");
const [cuopontext,setcuopontext]=useState("Apply Cuopon &get 10% discount");

const [loader, setLoader] = useState(false);
const [error, seterror] = useState(false);
const [errorMessage, setErrorMessage] = useState("");

const [bparams,setbparams]=useState({});

useEffect(() => {
  return () => {
    if(params?.state?.cardnumber != null || params?.state?.coupon?.cardnumber != null ){
      setbtext("Card Added");
      setpaycolor("green");
      console.log("log",paystatus);
      // setpaystatus("true");
      setbcolor("#bd3434");
      setbstatus(false);
      setbparams(params.state)
      }else{
        setbtext("Add Card");
      setbparams(params.state)

        // setbparams("card not entered")
      }
      if(params?.state?.ApplyCupon != null){
        setcuopontext("Cuopon Applied")
        setcost("$2.5")
        setbstatus(true);
      }
  }
},)
const Close = () => {
  seterror(false);
};
  let navigate = useNavigate();
  const goto = () => {
      navigate("/Confirmpay",{
        state :{
          bparams
        }
      });
    
  };
  const gotoConfirmpay = () => {
      navigate("/cuponpage",{
        state :{
          bparams
        }
      });
  };
const Pay = () =>{
  setLoader(true);

  console.log(btext)
  if(btext == "Card Added"){
    if(params?.state?.cardnumber && !params?.state?.ApplyCupon){
    console.log("without coupon",params?.state?.cardnumber)
            var formdata = new FormData();
            formdata.append("number", params?.state?.cardnumber);
            formdata.append("expr_num", params?.state?.Expiration);
            formdata.append("exp_year", params?.state?.ExpirationYY);
            formdata.append("cvc", params?.state?.Cvv);
            formdata.append("amount","2500");

            var requestOptions = {
              method: 'POST',
              body: formdata,
              redirect: 'follow'
            };

            fetch("http://alsyedmmtravel.com/api/pay", requestOptions)
              .then(response => response.json())
              .then(result => {
                console.log(result)
                console.log(result.message)
                seterror(true)
                setErrorMessage(result.message)
              })
              .catch(error => {
                console.log('error', error);
                seterror(true)
                setErrorMessage(error)
              } );
    }else if(params?.state?.coupon?.cardnumber || params?.state?.ApplyCupon){
      console.log("with cuopon",error);

      var formdata = new FormData();
            formdata.append("number", params?.state?.coupon?.cardnumber ? params?.state?.coupon?.cardnumber : params?.state.cardnumber);
            formdata.append("expr_num", params?.state?.coupon?.Expiration ? params?.state?.coupon?.Expiration : params?.state.Expiration);
            formdata.append("exp_year", params?.state?.coupon?.ExpirationYY ? params?.state?.coupon?.ExpirationYY : params?.state.ExpirationYY);
            formdata.append("cvc", params?.state?.coupon?.Cvv ? params?.state?.coupon?.Cvv : params?.state.Cvv);
            formdata.append("amount","250");

            var requestOptions = {
              method: 'POST',
              body: formdata,
              redirect: 'follow'
            };

            fetch("http://alsyedmmtravel.com/api/pay", requestOptions)
              .then(response => response.json())
              .then(result => {
                console.log(result)
                seterror(true)
                setErrorMessage(result.message)
                // console.log('error', error);
              })
              .catch(error => {
                console.log('error', error);
                seterror(true)
                setErrorMessage(error)
                
              } );
            setLoader(false);
}
  }else{
    // console.log(result.message)
                seterror(true)
                setErrorMessage("card not added")
    // alert("card not added")
  }
}
  return (
    <div className="of">
     
      <BasicExample/>
      <Row class="d-flex justify-content-center flex-column align-items-center gap-5 pt-5">
        <Col
          lg="12"
          className="d-flex justify-content-center flex-column align-items-center pt-5"
        >
     
          <button className="paybutt11"  onClick={goto}style={{backgroundColor:paycolor}} disabled={paystatus}>
           {btext}
          </button>
          <button className="paybutt11"  onClick={gotoConfirmpay}  style={{backgroundColor:bcolor}} disabled={bstatus}>
            {cuopontext}
          </button>
          <button className="paybutt12" >
            <p className="cost">Cost</p> <p className="cost">{cost}</p>   
          </button>
          <button className="paybutt1" onClick={Pay}>
            Confirm and Pay 
          </button>
       
          {loader && <Loader />}
      {error && (
        <Error
          onClick={Close}
          tittle={errorMessage}
        />
      )}
        </Col>
      </Row>
    </div>
  );
};

export default ConfirmAndPay;
