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
import { useSelector } from "react-redux";
import moment from "moment";

const ConfirmAndPay = () => {
  const params = useLocation();

console.log("response",params.state?.data?.params?.params?.trainer?.tr_id);
console.log("^^^",params?.state?.coupon?.data?.params?.params?.trainer?.tr_id);
const [btext,setbtext]=useState("");
const [cost,setcost]=useState("$20");
const [bstatus,setbstatus]=useState(true);
const [bcolor,setbcolor]=useState("#979797");
const [paystatus,setpaystatus]=useState(false);
const [apt,setapt]=useState(false);
const [paycolor,setpaycolor]=useState("#bd3434");
const [cuopontext,setcuopontext]=useState("Apply Cuopon &get 10% discount");

const [loader, setLoader] = useState(false);
const [error, seterror] = useState(false);
const [errorMessage, setErrorMessage] = useState("");

const [bparams,setbparams]=useState({});
const token = useSelector((state) => state.token);
console.log("token is here",token);

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

const dialog_Close = () =>{
  setapt(false)
  navigate("/")

}  
const Close = () => {
  seterror(false);
};
  let navigate = useNavigate();
  const goto = () => {
      navigate("/Confirmpay",{
        state :{
          bparams,
          data:params?.state?.coupon?.data ? params?.state?.coupon?.data : params?.state?.data
        }
      });
    
  };
  const gotoConfirmpay = () => {
      navigate("/cuponpage",{
        state :{
          bparams,

        }
      });
  };
const Pay = () =>{
  console.log("date is here",moment("23/12/2022","DD/MM/YYYY").format("MM/DD/YYYY"));
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

            fetch("https://dashboard.weightlossondemand.com/backend/api/pay", requestOptions)
              .then(response => response.json())
              .then(result => {
                console.log(result)
                console.log(result.message)
               
                if(result.status == 200 && result.message == "succeeded"){
                  if(params.state?.data?.params?.params?.trainer?.tr_id || params?.state?.coupon?.data?.params?.params?.trainer?.tr_id){
                    console.log("visit ka kam");
                    var formdata = new FormData();
                      formdata.append("user_token", token);
                      formdata.append("response_1", params.state?.data?.params?.params?.trainer?.tr_id ? params.state?.data?.params?.params?.response1 : params?.state?.coupon?.data?.params?.params?.response1);
                      formdata.append("response_2", params.state?.data?.params?.params?.trainer?.tr_id? JSON.stringify(params.state?.data?.params?.params?.response2) : JSON.stringify(params?.state?.coupon?.data?.params?.params?.response2));
                      formdata.append("response_3", params.state?.data?.params?.params?.trainer?.tr_id? params.state?.data?.params?.params?.response3 : params?.state?.coupon?.data?.params?.params?.response3);
                      formdata.append("response_4", params.state?.data?.params?.params?.trainer?.tr_id? params.state?.data?.params?.params?.response4 : params?.state?.coupon?.data?.params?.params?.response4);
                      formdata.append("response_5", params.state?.data?.params?.params?.trainer?.tr_id? params.state?.data?.params?.params?.response5 : params?.state?.coupon?.data?.params?.params?.response5);
                      formdata.append("response_6",params.state?.data?.params?.params?.trainer?.tr_id? params.state?.data?.params?.params?.response6 : params?.state?.coupon?.data?.params?.params?.response6);
                      formdata.append("response_7",params.state?.data?.params?.params?.trainer?.tr_id? params.state?.data?.params?.params?.response7 : params?.state?.coupon?.data?.params?.params?.response7);
                      formdata.append("response_8",params.state?.data?.params?.params?.trainer?.tr_id? params.state?.data?.params?.params?.response8 : params?.state?.coupon?.data?.params?.params?.response8);
                      formdata.append("response_9",params.state?.data?.params?.params?.trainer?.tr_id? params.state?.data?.params?.params?.response9 : params?.state?.coupon?.data?.params?.params?.response9);
                      formdata.append("response_10",params.state?.data?.params?.params?.trainer?.tr_id? params.state?.data?.params?.regularexercises : params?.state?.coupon?.data?.params?.regularexercises)
                      formdata.append("response_11",params.state?.data?.params?.params?.trainer?.tr_id? params.state?.data?.plansthemeals : params?.state?.coupon?.data?.regularexercises);
                      formdata.append("response_12",params.state?.data?.params?.params?.trainer?.tr_id? params.state?.data?.preparesthemeal : params?.state?.coupon?.data?.preparesthemeal);
                      formdata.append("trainer_id", params.state?.data?.params?.params?.trainer?.tr_id? params.state?.data?.params?.params?.trainer?.tr_id: params?.state?.coupon?.data?.params?.params?.trainer?.tr_id);
                      formdata.append("tr_name", params.state?.data?.params?.params?.trainer?.tr_id ? params.state?.data?.params?.params?.trainer?.tr_name : params?.state?.coupon?.data?.params?.params?.trainer?.tr_name);
                      // formdata.append("tr_name", "tr");
                      formdata.append("reason", "Weight loss");
                      formdata.append("amount", cost);

                      var requestOptions = {
                        method: 'POST',
                        body: formdata,
                        redirect: 'follow'
                      };

                      fetch("https://dashboard.weightlossondemand.com/backend/api/create_visit", requestOptions)
                        .then(response => response.json())
                        .then(result => {
                          console.log(result)
                          if(result.status ==200 || result.message == "Visit created successfully"){
                            setLoader(false);
                            seterror(true)
                            setErrorMessage("Your Session is going to start!")
                            navigate("/sessioncall",{
                              state :{
                                token,
                                tr_id:params.state?.data?.params?.params?.trainer?.tr_id ? params.state?.data?.params?.params?.trainer?.tr_id : params?.state?.coupon?.data?.params?.params?.trainer?.tr_id
                              }
                            });
                          }else{
                            setLoader(false);
                            seterror(true)
                            setErrorMessage(result.message)
                          }
                        })
                        .catch(error => {
                          console.log('error', error);
                          seterror(true)
                          setErrorMessage(error)
                          setLoader(false);
                          
                        } );
                }else if(params.state?.data?.params?.params?.trainer.vsl_time || params?.state?.coupon?.data?.params?.params?.trainer.vsl_time){
                  
                    var myHeaders = new Headers();

                    myHeaders.append("Authorization", token);
                    
                    var formdata = new FormData();
                    formdata.append("user_token", token);
                    formdata.append("response_1", params.state?.data?.params?.params?.trainer.vsl_time ? params.state?.data?.params?.params?.response1 : params?.state?.coupon?.data?.params?.params?.response1);
                    formdata.append("response_2", params.state?.data?.params?.params?.trainer.vsl_time ? JSON.stringify(params.state?.data?.params?.params?.response2) : JSON.stringify(params?.state?.coupon?.data?.params?.params?.response2));
                    formdata.append("response_3", params.state?.data?.params?.params?.trainer.vsl_time ? params.state?.data?.params?.params?.response3 : params?.state?.coupon?.data?.params?.params?.response3);
                    formdata.append("response_4", params.state?.data?.params?.params?.trainer.vsl_time ? params.state?.data?.params?.params?.response4 : params?.state?.coupon?.data?.params?.params?.response4);
                    formdata.append("response_5", params.state?.data?.params?.params?.trainer.vsl_time ? params.state?.data?.params?.params?.response5 : params?.state?.coupon?.data?.params?.params?.response5);
                    formdata.append("response_6",params.state?.data?.params?.params?.trainer.vsl_time ? params.state?.data?.params?.params?.response6 : params?.state?.coupon?.data?.params?.params?.response6);
                    formdata.append("response_7",params.state?.data?.params?.params?.trainer.vsl_time ? params.state?.data?.params?.params?.response7 : params?.state?.coupon?.data?.params?.params?.response7);
                    formdata.append("response_8",params.state?.data?.params?.params?.trainer.vsl_time ? params.state?.data?.params?.params?.response8 : params?.state?.coupon?.data?.params?.params?.response8);
                    formdata.append("response_9",params.state?.data?.params?.params?.trainer.vsl_time ? params.state?.data?.params?.params?.response9 : params?.state?.coupon?.data?.params?.params?.response9);
                    formdata.append("response_10",params.state?.data?.params?.params?.trainer.vsl_time ? params.state?.data?.params?.regularexercises : params?.state?.coupon?.data?.params?.regularexercises)
                    formdata.append("response_11",params.state?.data?.params?.params?.trainer.vsl_time ? params.state?.data?.plansthemeals : params?.state?.coupon?.data?.regularexercises);
                    formdata.append("response_12",params.state?.data?.params?.params?.trainer.vsl_time ? params.state?.data?.preparesthemeal : params?.state?.coupon?.data?.preparesthemeal);
                    formdata.append("trainer_id", params.state?.data?.params?.params?.trainer?.vsl_time ? params.state?.data?.params?.params?.trainer?.vtr_id : params?.state?.coupon?.data?.params?.params?.trainer?.vtr_id);
                    formdata.append("tr_name", params.state?.data?.params?.params?.trainer.vsl_time ? params.state?.data?.params?.params?.trainer?.vtr_name : params?.state?.coupon?.data?.params?.params?.trainer?.vtr_name);
                    formdata.append("reason", "Weight loss");
                  formdata.append("apt_date", params.state?.data?.params?.params?.trainer.vsl_time ? moment(params.state?.data?.params?.params?.trainer?.vtr_date,"DD/MM/YYYY").format("MM/DD/YYYY") : moment(params?.state?.coupon?.data?.params?.params?.trainer?.vtr_date,"DD/MM/YYYY").format("MM/DD/YYYY"));
                    formdata.append("apt_day", params.state?.data?.params?.params?.trainer.vsl_time ? params.state?.data?.params?.params?.trainer?.vtr_day : params?.state?.coupon?.data?.params?.params?.trainer?.vtr_day);
                    formdata.append("apt_time", params.state?.data?.params?.params?.trainer.vsl_time ? params.state?.data?.params?.params?.trainer.vsl_time : params?.state?.coupon?.data?.params?.params?.trainer?.vsl_time);
                    formdata.append("amount", cost);
                    var requestOptions = {
                      method: 'POST',
                      headers: myHeaders,
                      body: formdata,
                      redirect: 'follow'
                    };
                    
                    fetch("https://dashboard.weightlossondemand.com/backend/api/appointmentByProvider", requestOptions)
                      .then(response => response.json())
                      .then(result => {
                     console.log("appt result",result); 
                     if(result.status == 200){
                       setapt(true)
                       setErrorMessage("Your Appointment has been booked!")
                       setLoader(false);  
                      }else{
                        seterror(true)
                        setErrorMessage(result.message)
                        setLoader(false);
                      }
                      }
                      ).catch(error => console.log('error', error));
                  // }else{

                  // }
                }else if(params.state?.data?.params?.params?.trainer.asl_time || params?.state?.coupon?.data?.params?.params?.trainer.asl_time){
                  
                  var myHeaders = new Headers();
                  myHeaders.append("Authorization", token);
                  var formdata = new FormData();
                  formdata.append("user_token", token);
                  formdata.append("response_1", params.state?.data?.params?.params?.trainer.asl_time ? params.state?.data?.params?.params?.response1 : params?.state?.coupon?.data?.params?.params?.response1);
                  formdata.append("response_2", params.state?.data?.params?.params?.trainer.asl_time ? JSON.stringify(params.state?.data?.params?.params?.response2) : JSON.stringify(params?.state?.coupon?.data?.params?.params?.response2));
                  formdata.append("response_3", params.state?.data?.params?.params?.trainer.asl_time ? params.state?.data?.params?.params?.response3 : params?.state?.coupon?.data?.params?.params?.response3);
                  formdata.append("response_4", params.state?.data?.params?.params?.trainer.asl_time ? params.state?.data?.params?.params?.response4 : params?.state?.coupon?.data?.params?.params?.response4);
                  formdata.append("response_5", params.state?.data?.params?.params?.trainer.asl_time ? params.state?.data?.params?.params?.response5 : params?.state?.coupon?.data?.params?.params?.response5);
                  formdata.append("response_6",params.state?.data?.params?.params?.trainer.asl_time ? params.state?.data?.params?.params?.response6 : params?.state?.coupon?.data?.params?.params?.response6);
                  formdata.append("response_7",params.state?.data?.params?.params?.trainer.asl_time ? params.state?.data?.params?.params?.response7 : params?.state?.coupon?.data?.params?.params?.response7);
                  formdata.append("response_8",params.state?.data?.params?.params?.trainer.asl_time ? params.state?.data?.params?.params?.response8 : params?.state?.coupon?.data?.params?.params?.response8);
                  formdata.append("response_9",params.state?.data?.params?.params?.trainer.asl_time ? params.state?.data?.params?.params?.response9 : params?.state?.coupon?.data?.params?.params?.response9);
                  formdata.append("response_10",params.state?.data?.params?.params?.trainer.asl_time ? params.state?.data?.params?.regularexercises : params?.state?.coupon?.data?.params?.regularexercises)
                  formdata.append("response_11",params.state?.data?.params?.params?.trainer.asl_time ? params.state?.data?.plansthemeals : params?.state?.coupon?.data?.regularexercises);
                  formdata.append("response_12",params.state?.data?.params?.params?.trainer.asl_time ? params.state?.data?.preparesthemeal : params?.state?.coupon?.data?.preparesthemeal);
                  // formdata.append("trainer_id", params.state?.data?.params?.params?.trainer?.asl_time ? params.state?.data?.params?.params?.trainer?.atr_id : params?.state?.coupon?.data?.params?.params?.trainer?.atr_id);
                  // formdata.append("tr_name", params.state?.data?.params?.params?.trainer.asl_time ? params.state?.data?.params?.params?.trainer?.atr_name : params?.state?.coupon?.data?.params?.params?.trainer?.atr_name);
                  formdata.append("reason", "Weight loss");
                  formdata.append("apt_date", params.state?.data?.params?.params?.trainer.asl_time ? moment(params.state?.data?.params?.params?.trainer?.atr_date,"DD/MM/YYYY").format("MM/DD/YYYY") : moment(params?.state?.coupon?.data?.params?.params?.trainer?.atr_date,"DD/MM/YYYY").format("MM/DD/YYYY"));
                  formdata.append("apt_day", params.state?.data?.params?.params?.trainer.asl_time ? params.state?.data?.params?.params?.trainer?.atr_day : params?.state?.coupon?.data?.params?.params?.trainer?.atr_day);
                  formdata.append("apt_time", params.state?.data?.params?.params?.trainer.asl_time ? params.state?.data?.params?.params?.trainer.asl_time : params?.state?.coupon?.data?.params?.params?.trainer?.asl_time);
                  formdata.append("amount", cost);
                  var requestOptions = {
                    method: 'POST',
                    headers: myHeaders,
                    body: formdata,
                    redirect: 'follow'
                  };
                  fetch("https://dashboard.weightlossondemand.com/backend/api/appointmentBytime", requestOptions)
                    .then(response => response.json())
                    .then(result => {
                   console.log("appt result",result); 
                   if(result.status == 200){
                     setapt(true)
                     setErrorMessage("Your Appointment has been booked!")
                     setLoader(false);  
                    }else{
                      seterror(true)
                      setErrorMessage(result.message)
                      setLoader(false);
                    }
                    }
                    ).catch(error => console.log('error', error));
                // }else{

                // }
              }
                  // seterror(true)
                  // setErrorMessage("your session is going to start")
                  // navigate("/Videocall");
                }else{
                  seterror(true)
                  setErrorMessage(result.message)
                  setLoader(false);
                }
              })
              .catch(error => {
                console.log('error', error);
                seterror(true)
                setErrorMessage(error)
                setLoader(false);
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

            fetch("https://dashboard.weightlossondemand.com/backend/api/pay", requestOptions)
              .then(response => response.json())
              .then(result => {
                console.log(result)
                // tr_id: 1, tr_name: 'Lisa G.'
                if(result.status == 200 && result.message == "succeeded"){
                  if(params.state?.data?.params?.params?.trainer?.tr_id || params?.state?.coupon?.data?.params?.params?.trainer.tr_id){
                      console.log("visit ka kam");
                      var formdata = new FormData();
                        formdata.append("user_token", token);
                        formdata.append("response_1", params.state?.data?.params?.params?.trainer?.tr_id ? params.state?.data?.params?.params?.response1 : params?.state?.coupon?.data?.params?.params?.response1);
                        formdata.append("response_2", params.state?.data?.params?.params?.trainer?.tr_id ? JSON.stringify(params.state?.data?.params?.params?.response2) : JSON.stringify(params?.state?.coupon?.data?.params?.params?.response2));
                        formdata.append("response_3", params.state?.data?.params?.params?.trainer?.tr_id ? params.state?.data?.params?.params?.response3 : params?.state?.coupon?.data?.params?.params?.response3);
                        formdata.append("response_4", params.state?.data?.params?.params?.trainer?.tr_id ? params.state?.data?.params?.params?.response4 : params?.state?.coupon?.data?.params?.params?.response4);
                        formdata.append("response_5", params.state?.data?.params?.params?.trainer?.tr_id ? params.state?.data?.params?.params?.response5 : params?.state?.coupon?.data?.params?.params?.response5);
                        formdata.append("response_6",params.state?.data?.params?.params?.trainer?.tr_id ? params.state?.data?.params?.params?.response6 : params?.state?.coupon?.data?.params?.params?.response6);
                        formdata.append("response_7",params.state?.data?.params?.params?.trainer?.tr_id ? params.state?.data?.params?.params?.response7 : params?.state?.coupon?.data?.params?.params?.response7);
                        formdata.append("response_8",params.state?.data?.params?.params?.trainer?.tr_id ? params.state?.data?.params?.params?.response8 : params?.state?.coupon?.data?.params?.params?.response8);
                        formdata.append("response_9",params.state?.data?.params?.params?.trainer?.tr_id ? params.state?.data?.params?.params?.response9 : params?.state?.coupon?.data?.params?.params?.response9);
                        formdata.append("response_10",params.state?.data?.params?.params?.trainer?.tr_id ? params.state?.data?.params?.regularexercises : params?.state?.coupon?.data?.params?.regularexercises)
                        formdata.append("response_11",params.state?.data?.params?.params?.trainer?.tr_id ? params.state?.data?.plansthemeals : params?.state?.coupon?.data?.regularexercises);
                        formdata.append("response_12",params.state?.data?.params?.params?.trainer?.tr_id ? params.state?.data?.preparesthemeal : params?.state?.coupon?.data?.preparesthemeal);
                        formdata.append("trainer_id",params.state?.data?.params?.params?.trainer?.tr_id ? params.state?.data?.params?.params?.trainer?.tr_id : params?.state?.coupon?.data?.params?.params?.trainer?.tr_id);
                        formdata.append("tr_name", params.state?.data?.params?.params?.trainer?.tr_id ? params.state?.data?.params?.params?.trainer?.tr_name : params?.state?.coupon?.data?.params?.params?.trainer?.tr_name);
                        // formdata.append("tr_name", "tr");
                        formdata.append("reason", "Weight loss");
                        formdata.append("amount", cost);

                        var requestOptions = {
                          method: 'POST',
                          body: formdata,
                          redirect: 'follow'
                        };

                        fetch("https://dashboard.weightlossondemand.com/backend/api/create_visit", requestOptions)
                          .then(response => response.json())
                          .then(result => {
                            console.log(result)
                            if(result.status ==200 || result.message == "Visit created successfully"){
                              seterror(true)
                              setErrorMessage("Your Session is going to start!")
                              setLoader(false);
                              navigate("/sessioncall",{
                                state :{
                                  token,
                                  tr_id: params.state?.data?.params?.params?.trainer?.tr_id ? params.state?.data?.params?.params?.trainer?.tr_id : params?.state?.coupon?.data?.params?.params?.trainer?.tr_id
                                }
                              });
                            }else{
                              seterror(true)
                              setErrorMessage(result.message)
                              setLoader(false);
                            }
                          })
                          .catch(error => {
                            console.log('error', error);
                            seterror(true)
                            setErrorMessage(error)
                            setLoader(false);
                            
                          } );
                  }else if(params.state?.data?.params?.params?.trainer.vsl_time || params?.state?.coupon?.data?.params?.params?.trainer.vsl_time){
                      var myHeaders = new Headers();
                      myHeaders.append("Authorization", token);
                      
                      var formdata = new FormData();
                      formdata.append("user_token", token);
                      formdata.append("response_1", params.state?.data?.params?.params?.trainer.vsl_time ? params.state?.data?.params?.params?.response1 : params?.state?.coupon?.data?.params?.params?.response1);
                      formdata.append("response_2", params.state?.data?.params?.params?.trainer.vsl_time ? JSON.stringify(params.state?.data?.params?.params?.response2) : JSON.stringify(params?.state?.coupon?.data?.params?.params?.response2));
                      formdata.append("response_3", params.state?.data?.params?.params?.trainer.vsl_time ? params.state?.data?.params?.params?.response3 : params?.state?.coupon?.data?.params?.params?.response3);
                      formdata.append("response_4", params.state?.data?.params?.params?.trainer.vsl_time ? params.state?.data?.params?.params?.response4 : params?.state?.coupon?.data?.params?.params?.response4);
                      formdata.append("response_5", params.state?.data?.params?.params?.trainer.vsl_time ? params.state?.data?.params?.params?.response5 : params?.state?.coupon?.data?.params?.params?.response5);
                      formdata.append("response_6",params.state?.data?.params?.params?.trainer.vsl_time ? params.state?.data?.params?.params?.response6 : params?.state?.coupon?.data?.params?.params?.response6);
                      formdata.append("response_7",params.state?.data?.params?.params?.trainer.vsl_time ? params.state?.data?.params?.params?.response7 : params?.state?.coupon?.data?.params?.params?.response7);
                      formdata.append("response_8",params.state?.data?.params?.params?.trainer.vsl_time ? params.state?.data?.params?.params?.response8 : params?.state?.coupon?.data?.params?.params?.response8);
                      formdata.append("response_9",params.state?.data?.params?.params?.trainer.vsl_time ? params.state?.data?.params?.params?.response9 : params?.state?.coupon?.data?.params?.params?.response9);
                      formdata.append("response_10",params.state?.data?.params?.params?.trainer.vsl_time ? params.state?.data?.params?.regularexercises : params?.state?.coupon?.data?.params?.regularexercises)
                      formdata.append("response_11",params.state?.data?.params?.params?.trainer.vsl_time ? params.state?.data?.plansthemeals : params?.state?.coupon?.data?.regularexercises);
                      formdata.append("response_12",params.state?.data?.params?.params?.trainer.vsl_time ? params.state?.data?.preparesthemeal : params?.state?.coupon?.data?.preparesthemeal);
                      formdata.append("trainer_id", params.state?.data?.params?.params?.trainer?.vsl_time ? params.state?.data?.params?.params?.trainer?.vtr_id : params?.state?.coupon?.data?.params?.params?.trainer?.vtr_id);
                      formdata.append("tr_name", params.state?.data?.params?.params?.trainer.vsl_time ? params.state?.data?.params?.params?.trainer?.vtr_name : params?.state?.coupon?.data?.params?.params?.trainer?.vtr_name);
                      formdata.append("reason", "Weight loss");
                      // formdata.append("apt_date", params.state?.data?.params?.params?.trainer.vsl_time ? params.state?.data?.params?.params?.trainer?.vtr_date : params?.state?.coupon?.data?.params?.params?.trainer?.vtr_date);
                      formdata.append("apt_date", params.state?.data?.params?.params?.trainer.vsl_time ? moment(params.state?.data?.params?.params?.trainer?.vtr_date,"DD/MM/YYYY").format("MM/DD/YYYY") : moment(params?.state?.coupon?.data?.params?.params?.trainer?.vtr_date,"DD/MM/YYYY").format("MM/DD/YYYY"));
                      formdata.append("apt_day", params.state?.data?.params?.params?.trainer.vsl_time ? params.state?.data?.params?.params?.trainer?.vtr_day : params?.state?.coupon?.data?.params?.params?.trainer?.vtr_day);
                      formdata.append("apt_time", params.state?.data?.params?.params?.trainer.vsl_time ? params.state?.data?.params?.params?.trainer.vsl_time : params?.state?.coupon?.data?.params?.params?.trainer?.vsl_time);
                      formdata.append("amount", cost);
                      var requestOptions = {
                        method: 'POST',
                        headers: myHeaders,
                        body: formdata,
                        redirect: 'follow'
                      };
                      
                      fetch("https://dashboard.weightlossondemand.com/backend/api/appointmentByProvider", requestOptions)
                        .then(response => response.json())
                        .then(result => {
                       console.log("appt result",result); 
                       if(result.status ==200 ){
                         setapt(true)
                         setErrorMessage("Your Appointment has been booked!")
                         setLoader(false);
                        }else{
                          seterror(true)
                          setErrorMessage(result.message)
                          setLoader(false);
                        }
                        }
                        ).catch(error => {
                          console.log('error', error);
                          seterror(true)
                          setErrorMessage(error)
                          setLoader(false);
                          
                        } );
                    // }else{

                    // }
                  }else if(params.state?.data?.params?.params?.trainer.asl_time || params?.state?.coupon?.data?.params?.params?.trainer.asl_time){
                  
                    var myHeaders = new Headers();
                    myHeaders.append("Authorization", token);
                    var formdata = new FormData();
                    formdata.append("user_token", token);
                    formdata.append("response_1", params.state?.data?.params?.params?.trainer.asl_time ? params.state?.data?.params?.params?.response1 : params?.state?.coupon?.data?.params?.params?.response1);
                    formdata.append("response_2", params.state?.data?.params?.params?.trainer.asl_time ? JSON.stringify(params.state?.data?.params?.params?.response2) : JSON.stringify(params?.state?.coupon?.data?.params?.params?.response2));
                    formdata.append("response_3", params.state?.data?.params?.params?.trainer.asl_time ? params.state?.data?.params?.params?.response3 : params?.state?.coupon?.data?.params?.params?.response3);
                    formdata.append("response_4", params.state?.data?.params?.params?.trainer.asl_time ? params.state?.data?.params?.params?.response4 : params?.state?.coupon?.data?.params?.params?.response4);
                    formdata.append("response_5", params.state?.data?.params?.params?.trainer.asl_time ? params.state?.data?.params?.params?.response5 : params?.state?.coupon?.data?.params?.params?.response5);
                    formdata.append("response_6",params.state?.data?.params?.params?.trainer.asl_time ? params.state?.data?.params?.params?.response6 : params?.state?.coupon?.data?.params?.params?.response6);
                    formdata.append("response_7",params.state?.data?.params?.params?.trainer.asl_time ? params.state?.data?.params?.params?.response7 : params?.state?.coupon?.data?.params?.params?.response7);
                    formdata.append("response_8",params.state?.data?.params?.params?.trainer.asl_time ? params.state?.data?.params?.params?.response8 : params?.state?.coupon?.data?.params?.params?.response8);
                    formdata.append("response_9",params.state?.data?.params?.params?.trainer.asl_time ? params.state?.data?.params?.params?.response9 : params?.state?.coupon?.data?.params?.params?.response9);
                    formdata.append("response_10",params.state?.data?.params?.params?.trainer.asl_time ? params.state?.data?.params?.regularexercises : params?.state?.coupon?.data?.params?.regularexercises)
                    formdata.append("response_11",params.state?.data?.params?.params?.trainer.asl_time ? params.state?.data?.plansthemeals : params?.state?.coupon?.data?.regularexercises);
                    formdata.append("response_12",params.state?.data?.params?.params?.trainer.asl_time ? params.state?.data?.preparesthemeal : params?.state?.coupon?.data?.preparesthemeal);
                    // formdata.append("trainer_id", params.state?.data?.params?.params?.trainer?.asl_time ? params.state?.data?.params?.params?.trainer?.atr_id : params?.state?.coupon?.data?.params?.params?.trainer?.atr_id);
                    // formdata.append("tr_name", params.state?.data?.params?.params?.trainer.asl_time ? params.state?.data?.params?.params?.trainer?.atr_name : params?.state?.coupon?.data?.params?.params?.trainer?.atr_name);
                    formdata.append("reason", "Weight loss");
                    formdata.append("apt_date", params.state?.data?.params?.params?.trainer.asl_time ? moment(params.state?.data?.params?.params?.trainer?.atr_date,"DD/MM/YYYY").format("MM/DD/YYYY") : moment(params?.state?.coupon?.data?.params?.params?.trainer?.atr_date,"DD/MM/YYYY").format("MM/DD/YYYY"));
                    formdata.append("apt_day", params.state?.data?.params?.params?.trainer.asl_time ? params.state?.data?.params?.params?.trainer?.atr_day : params?.state?.coupon?.data?.params?.params?.trainer?.atr_day);
                    formdata.append("apt_time", params.state?.data?.params?.params?.trainer.asl_time ? params.state?.data?.params?.params?.trainer.asl_time : params?.state?.coupon?.data?.params?.params?.trainer?.asl_time);
                    formdata.append("amount", cost);
                    var requestOptions = {
                      method: 'POST',
                      headers: myHeaders,
                      body: formdata,
                      redirect: 'follow'
                    };
                    fetch("https://dashboard.weightlossondemand.com/backend/api/appointmentBytime", requestOptions)
                      .then(response => response.json())
                      .then(result => {
                     console.log("appt result",result); 
                     if(result.status == 200){
                       setapt(true)
                       setErrorMessage("Your Appointment has been booked!")
                       setLoader(false);  
                      }else{
                        seterror(true)
                        setErrorMessage(result.message)
                        setLoader(false);
                      }
                      }
                      ).catch(error => console.log('error', error));
                  // }else{
  
                  // }
                }
                  // navigate("/Videocall");
                }else{
                  seterror(true)
                  setErrorMessage(result.message)
                  setLoader(false);
                }
                // console.log('error', error);
              })
              .catch(error => {
                console.log('error', error);
                seterror(true)
                setErrorMessage(error)
                setLoader(false);
                
              } );
            setLoader(false);
}
  }else{
    // console.log(result.message)
                seterror(true)
                setErrorMessage("card not added")
                setLoader(false);
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

          {/* <button className="paybutt1" onClick={goto} > */}
            Confirm and Pay 
          </button>
       
          {loader && <Loader />}
      {error && (
        <Error
          onClick={Close}
          tittle={errorMessage}
        />
      )}
      {apt && (
        <Error
          onClick={dialog_Close}
          tittle={errorMessage}
        />
      )}
        </Col>
      </Row>
    </div>
  );
};

export default ConfirmAndPay;
