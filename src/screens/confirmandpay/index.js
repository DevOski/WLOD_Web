import React from "react";
import "./confirmandpay.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  BasicExample,
  Navbarmenu,
  TopBar,
  Loader,
  Error,
} from "../../component";
import bg2 from "../../assets/bg2.png";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/logo.png";
import { IoIosArrowForward } from "@react-icons/all-files/io/IoIosArrowForward";
import { Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import { Tune } from "@material-ui/icons";
import NavSidebar from "../../component/navsidebar";
const ConfirmAndPay = () => {
  console.log("+++++",useSelector((state) => state));
  const params = useLocation();
  const payment = useSelector((state) => state.payment);
  // console.log(payment.Cvv,'=====>payment');
  console.log("params areee here", params.state);
  console.log("without coupon ^^^", params.state?.data?.regularexercises);
  console.log("with coupon^^^^", params?.state?.coupon?.data?.regularexercises);
  const [btext, setbtext] = useState("");
  const [cost, setcost] = useState("$25");
  const [bstatus, setbstatus] = useState(true);
  const [bcolor, setbcolor] = useState("#be1f2d");
  const [paystatus, setpaystatus] = useState(false);
  const [apt, setapt] = useState(false);
  const [congrats, setcongrats] = useState("");
  const [paycolor, setpaycolor] = useState("#be1f2d");
  const [cuopontext, setcuopontext] = useState(
    "Apply Coupon & get 10% discount"
  );

  const [loader, setLoader] = useState(false);
  const [error, seterror] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [bparams, setbparams] = useState({});
  const token = useSelector((state) => state.token);
  console.log("token is here", token);

  const response1 = useSelector((state) => state.response1);
  const response2 = useSelector((state) => state.response2);
  const response3 = useSelector((state) => state.response3);
  const response4 = useSelector((state) => state.response4);
  const response5 = useSelector((state) => state.response5);
  const response6 = useSelector((state) => state.response6);
  const response7 = useSelector((state) => state.response7);
  const response8 = useSelector((state) => state.response8);
  const response9 = useSelector((state) => state.response9);
  const response10 = useSelector((state) => state.response10);
  const response11 = useSelector((state) => state.response11);
  const response12 = useSelector((state) => state.response12);
  const tr_id = useSelector((state) => state.tr_id);
  const atr_id = useSelector((state) => state.atr_id);
  const vtr_id = useSelector((state) => state.vtr_id);
  const tr_name = useSelector((state) => state.tr_name);
  const tr_day = useSelector((state) => state.tr_date);
  const tr_date = useSelector((state) => state.tr_day);
  const tr_time = useSelector((state) => state.tr_time);

  useEffect(() => {
    return () => {
      if (
        params?.state?.cardnumber != null ||
        params?.state?.coupon?.cardnumber != null
      ) {
        setbtext("Card Added");
        setpaycolor("#be1f2d");
        console.log("log", paystatus);
        // setpaystatus("true");
        setbcolor("#be1f2d");
        setbstatus(false);
        setbparams(params.state);
      } else {
        setbtext("Add Card");
        setbparams(params.state);

        // setbparams("card not entered")
      }
      if (params?.state?.ApplyCupon != null) {
        setcuopontext("Cuopon Applied");
        setcost("$2.5");
        setbstatus(true);
      }
    };
  });

  const dialog_Close = () => {
    setapt(false);
    navigate("/");
  };
  const Close = () => {
    seterror(false);
  };
  let navigate = useNavigate();
  const goto = () => {
    navigate("/Confirmpay", {
      state: {
        bparams,
        data: params?.state?.coupon?.data
          ? params?.state?.coupon?.data
          : params?.state?.data,
      },
    });
  };
  const gotoConfirmpay = () => {
    navigate("/cuponpage", {
      state: {
        bparams,
      },
    });
  };
  const Pay = () => {
    console.log(
      "date is here",
      moment("23/12/2022", "DD/MM/YYYY").format("MM/DD/YYYY")
    );
    setLoader(true);

    console.log(btext);
    if (btext == "Card Added") {
      if (params?.state?.cardnumber && !params?.state?.ApplyCupon) {
        console.log("without coupon", params?.state?.cardnumber);
        var formdata = new FormData();
        formdata.append("number", params?.state?.cardnumber?params?.state?.cardnumber: payment?.cardnumber);
        formdata.append("expr_num", params?.state?.Expiration?params?.state?.Expiration:payment?.Expiration);
        formdata.append("exp_year", params?.state?.ExpirationYY?params?.state?.ExpirationYY:payment?.ExpirationYY);
        formdata.append("cvc", params?.state?.Cvv ? params?.state?.Cvv : payment?.Cvv);
        formdata.append("amount", "2500");

        var requestOptions = {
          method: "POST",
          body: formdata,
          redirect: "follow",
        };

        fetch(
          "https://dashboard.weightlossondemand.com/backend/api/pay",
          requestOptions
        )
          .then((response) => response.json())
          .then((result) => {
            console.log(result);
            console.log(result.message);

            if (result.status == 200 && result.message == "succeeded") {
              if (
                tr_id
              ) {
                console.log("visit ka kam");
                var formdata = new FormData();
                formdata.append("user_token", token);
                formdata.append(
                  "response_1",
                  response1
                );
                formdata.append(
                  "response_2",
                  response2
                );
                formdata.append(
                  "response_3",
                 response3
                );
                formdata.append(
                  "response_4",
                 response4
                );
                formdata.append(
                  "response_5",
                  response5
                );
                formdata.append(
                  "response_6",
                 response6
                );
                formdata.append(
                  "response_7",
                  response7
                );
                formdata.append(
                  "response_8",
                  response8
                );
                formdata.append(
                  "response_9",
                  response9
                );
                formdata.append(
                  "response_10",
                  response10
                );
                formdata.append(
                  "response_11",
                  response11
                );
                formdata.append(
                  "response_12",
                  response12
                );
                formdata.append(
                  "trainer_id",
                  tr_id
                );
                formdata.append(
                  "tr_name",
                  tr_name
                );
                // formdata.append("tr_name", "tr");
                formdata.append("reason", "Weight loss");
                formdata.append("amount", cost);

                var requestOptions = {
                  method: "POST",
                  body: formdata,
                  redirect: "follow",
                };

                fetch(
                  "https://dashboard.weightlossondemand.com/backend/api/create_visit",
                  requestOptions
                )
                  .then((response) => response.json())
                  .then((result) => {
                    console.log(result);
                    if (
                      result.status == 200 ||
                      result.message == "Visit created successfully"
                    ) {
                      setcongrats("Congratulations");
                      setLoader(false);
                      seterror(true);
                      setErrorMessage("Your Session is going to start!");
                      navigate("/Videocall", {
                        state: {
                          token,
                          tr_id: tr_id
                        },
                      });
                    } else {
                      setLoader(false);
                      seterror(true);
                      setErrorMessage(result.message);
                    }
                  })
                  .catch((error) => {
                    console.log("error", error);
                    seterror(true);
                    setErrorMessage(error);
                    setLoader(false);
                  });
              } else if (
                vtr_id
              ) {
                var myHeaders = new Headers();

                myHeaders.append("Authorization", token);

                var formdata = new FormData();
                formdata.append("user_token", token);
                formdata.append(
                  "response_1",
                 response1
                );
                formdata.append(
                  "response_2",
                  response2
                );
                formdata.append(
                  "response_3",
                  response3
                );
                formdata.append(
                  "response_4",
                 response4
                );
                formdata.append(
                  "response_5",
                  response5
                );
                formdata.append(
                  "response_6",
                  response6
                );
                formdata.append(
                  "response_7",
                 response7
                );
                formdata.append(
                  "response_8",
                  response8
                );
                formdata.append(
                  "response_9",
                 response9
                );
                formdata.append(
                  "response_10",
                  response10
                );
                formdata.append(
                  "response_11",
                  response11
                );
                formdata.append(
                  "response_12",
                  response12
                );
                formdata.append(
                  "trainer_id",
                  vtr_id
                );
                formdata.append(
                  "tr_name",
                 tr_name
                );
                formdata.append("reason", "Weight loss");
                formdata.append(
                  "apt_date",
                  moment(tr_date,"DD/MM/YYYY").format("MM/DD/YYYY")
                );
                formdata.append(
                  "apt_day",
                 tr_day
                );
                formdata.append(
                  "apt_time",
                 tr_time
                );
                formdata.append("amount", cost);
                var requestOptions = {
                  method: "POST",
                  headers: myHeaders,
                  body: formdata,
                  redirect: "follow",
                };

                fetch(
                  "https://dashboard.weightlossondemand.com/backend/api/appointmentByProvider",
                  requestOptions
                )
                  .then((response) => response.json())
                  .then((result) => {
                    console.log("appt result", result);
                    if (result.status == 200) {
                      setapt(true);
                      setcongrats("Congratulations");
                      setErrorMessage("Your Appointment has been booked!");
                      setLoader(false);
                    } else {
                      seterror(true);
                      setErrorMessage(result.message);
                      setLoader(false);
                    }
                  })
                  .catch((error) => console.log("error", error));
                // }else{

                // }
              } else if (
                atr_id
              ) {
                var myHeaders = new Headers();
                myHeaders.append("Authorization", token);
                var formdata = new FormData();
                formdata.append("user_token", token);
                formdata.append(
                  "response_1",
                  response1
                );
                formdata.append(
                  "response_2",
                  response2
                );
                formdata.append(
                  "response_3",
                 response3
                );
                formdata.append(
                  "response_4",
                 response4
                );
                formdata.append(
                  "response_5",
                response5
                );
                formdata.append(
                  "response_6",
                response6
                );
                formdata.append(
                  "response_7",
                 response7
                );
                formdata.append(
                  "response_8",
                 response8
                );
                formdata.append(
                  "response_9",
                 response9
                );
                formdata.append(
                  "response_10",
                  response10
                );
                formdata.append(
                  "response_11",
                  response11
                );
                formdata.append(
                  "response_12",
                  response12
                );
                // formdata.append("trainer_id", params.state?.data?.trainer?.asl_time ? params.state?.data?.trainer?.atr_id : params?.state?.coupon?.data?.trainer?.atr_id);
                // formdata.append("tr_name", params.state?.data?.trainer.asl_time ? params.state?.data?.trainer?.atr_name : params?.state?.coupon?.data?.trainer?.atr_name);
                formdata.append("reason", "Weight loss");
                formdata.append(
                  "apt_date",
                  moment(tr_date,"DD/MM/YYYY").format("MM/DD/YYYY")
                );
                formdata.append(
                  "apt_day",
                  tr_day
                );
                formdata.append(
                  "apt_time",
                 tr_time
                );
                formdata.append("amount", cost);
                var requestOptions = {
                  method: "POST",
                  headers: myHeaders,
                  body: formdata,
                  redirect: "follow",
                };
                fetch(
                  "https://dashboard.weightlossondemand.com/backend/api/appointmentBytime",
                  requestOptions
                )
                  .then((response) => response.json())
                  .then((result) => {
                    console.log("appt result", result);
                    if (result.status == 200) {
                      setapt(true);
                      setcongrats("Congratulations");
                      setErrorMessage("Your Appointment has been booked!");
                      setLoader(false);
                    } else {
                      seterror(true);
                      setErrorMessage(result.message);
                      setLoader(false);
                    }
                  })
                  .catch((error) => console.log("error", error));
                // }else{

                // }
              }
              // seterror(true)
              // setErrorMessage("your session is going to start")
              // navigate("/Videocall");
            } else {
              seterror(true);
              setErrorMessage(result.message);
              setLoader(false);
            }
          })
          .catch((error) => {
            console.log("error", error);
            seterror(true);
            setErrorMessage(error);
            setLoader(false);
          });
      } else if (
        params?.state?.coupon?.cardnumber ||
        params?.state?.ApplyCupon
      ) {
        console.log("with cuopon", error);

        var formdata = new FormData();
        formdata.append(
          "number",
          params?.state?.coupon?.cardnumber
            ? params?.state?.coupon?.cardnumber
            : payment?.cardnumber
        );
        formdata.append(
          "expr_num",
          params?.state?.coupon?.Expiration
            ? params?.state?.coupon?.Expiration
            : payment?.Expiration
        );
        formdata.append(
          "exp_year",
          params?.state?.coupon?.ExpirationYY
            ? params?.state?.coupon?.ExpirationYY
            : payment?.ExpirationYY
        );
        formdata.append(
          "cvc",
          params?.state?.coupon?.Cvv
            ? params?.state?.coupon?.Cvv
            : payment?.Cvv
        );
        formdata.append("amount", "250");

        var requestOptions = {
          method: "POST",
          body: formdata,
          redirect: "follow",
        };

        fetch(
          "https://dashboard.weightlossondemand.com/backend/api/pay",
          requestOptions
        )
          .then((response) => response.json())
          .then((result) => {
            console.log(result);
            // tr_id: 1, tr_name: 'Lisa G.'
            if (result.status == 200 && result.message == "succeeded") {
              if (
                params.state?.data?.trainer?.tr_id ||
                params?.state?.coupon?.data?.trainer.tr_id
              ) {
                console.log("visit ka kam");
                var formdata = new FormData();
                formdata.append("user_token", token);
                formdata.append(
                  "response_1",
                  params.state?.data?.trainer?.tr_id
                    ? params.state?.data?.response1
                    : params?.state?.coupon?.data?.response1
                );
                formdata.append(
                  "response_2",
                  params.state?.data?.trainer?.tr_id
                    ? JSON.stringify(params.state?.data?.response2)
                    : JSON.stringify(params?.state?.coupon?.data?.response2)
                );
                formdata.append(
                  "response_3",
                  params.state?.data?.trainer?.tr_id
                    ? params.state?.data?.response3
                    : params?.state?.coupon?.data?.response3
                );
                formdata.append(
                  "response_4",
                  params.state?.data?.trainer?.tr_id
                    ? params.state?.data?.response4
                    : params?.state?.coupon?.data?.response4
                );
                formdata.append(
                  "response_5",
                  params.state?.data?.trainer?.tr_id
                    ? params.state?.data?.response5
                    : params?.state?.coupon?.data?.response5
                );
                formdata.append(
                  "response_6",
                  params.state?.data?.trainer?.tr_id
                    ? params.state?.data?.response6
                    : params?.state?.coupon?.data?.response6
                );
                formdata.append(
                  "response_7",
                  params.state?.data?.trainer?.tr_id
                    ? params.state?.data?.response7
                    : params?.state?.coupon?.data?.response7
                );
                formdata.append(
                  "response_8",
                  params.state?.data?.trainer?.tr_id
                    ? params.state?.data?.response8
                    : params?.state?.coupon?.data?.response8
                );
                formdata.append(
                  "response_9",
                  params.state?.data?.trainer?.tr_id
                    ? params.state?.data?.response9
                    : params?.state?.coupon?.data?.response9
                );
                formdata.append(
                  "response_10",
                  params.state?.data?.trainer?.tr_id
                    ? params.state?.data?.regularexercises
                    : params?.state?.coupon?.data?.regularexercises
                );
                formdata.append(
                  "response_11",
                  params.state?.data?.trainer?.tr_id
                    ? params.state?.data?.plansthemeals
                    : params?.state?.coupon?.data?.regularexercises
                );
                formdata.append(
                  "response_12",
                  params.state?.data?.trainer?.tr_id
                    ? params.state?.data?.preparesthemeal
                    : params?.state?.coupon?.data?.preparesthemeal
                );
                formdata.append(
                  "trainer_id",
                  params.state?.data?.trainer?.tr_id
                    ? params.state?.data?.trainer?.tr_id
                    : params?.state?.coupon?.data?.trainer?.tr_id
                );
                formdata.append(
                  "tr_name",
                  params.state?.data?.trainer?.tr_id
                    ? params.state?.data?.trainer?.tr_name
                    : params?.state?.coupon?.data?.trainer?.tr_name
                );
                // formdata.append("tr_name", "tr");
                formdata.append("reason", "Weight loss");
                formdata.append("amount", cost);

                var requestOptions = {
                  method: "POST",
                  body: formdata,
                  redirect: "follow",
                };

                fetch(
                  "https://dashboard.weightlossondemand.com/backend/api/create_visit",
                  requestOptions
                )
                  .then((response) => response.json())
                  .then((result) => {
                    console.log(result);
                    if (
                      result.status == 200 ||
                      result.message == "Visit created successfully"
                    ) {
                      seterror(true);
                      setcongrats("Congratulations");
                      setErrorMessage("Your Session is going to start!");
                      setLoader(false);
                      navigate("/Videocall", {
                        state: {
                          token,
                          tr_id: params.state?.data?.trainer?.tr_id
                            ? params.state?.data?.trainer?.tr_id
                            : params?.state?.coupon?.data?.trainer?.tr_id,
                        },
                      });
                    } else {
                      seterror(true);
                      setErrorMessage(result.message);
                      setLoader(false);
                    }
                  })
                  .catch((error) => {
                    console.log("error", error);
                    seterror(true);
                    setErrorMessage(error);
                    setLoader(false);
                  });
              } else if (
                params.state?.data?.trainer.vsl_time ||
                params?.state?.coupon?.data?.trainer.vsl_time
              ) {
                var myHeaders = new Headers();
                myHeaders.append("Authorization", token);

                var formdata = new FormData();
                formdata.append("user_token", token);
                formdata.append(
                  "response_1",
                  params.state?.data?.trainer.vsl_time
                    ? params.state?.data?.response1
                    : params?.state?.coupon?.data?.response1
                );
                formdata.append(
                  "response_2",
                  params.state?.data?.trainer.vsl_time
                    ? JSON.stringify(params.state?.data?.response2)
                    : JSON.stringify(params?.state?.coupon?.data?.response2)
                );
                formdata.append(
                  "response_3",
                  params.state?.data?.trainer.vsl_time
                    ? params.state?.data?.response3
                    : params?.state?.coupon?.data?.response3
                );
                formdata.append(
                  "response_4",
                  params.state?.data?.trainer.vsl_time
                    ? params.state?.data?.response4
                    : params?.state?.coupon?.data?.response4
                );
                formdata.append(
                  "response_5",
                  params.state?.data?.trainer.vsl_time
                    ? params.state?.data?.response5
                    : params?.state?.coupon?.data?.response5
                );
                formdata.append(
                  "response_6",
                  params.state?.data?.trainer.vsl_time
                    ? params.state?.data?.response6
                    : params?.state?.coupon?.data?.response6
                );
                formdata.append(
                  "response_7",
                  params.state?.data?.trainer.vsl_time
                    ? params.state?.data?.response7
                    : params?.state?.coupon?.data?.response7
                );
                formdata.append(
                  "response_8",
                  params.state?.data?.trainer.vsl_time
                    ? params.state?.data?.response8
                    : params?.state?.coupon?.data?.response8
                );
                formdata.append(
                  "response_9",
                  params.state?.data?.trainer.vsl_time
                    ? params.state?.data?.response9
                    : params?.state?.coupon?.data?.response9
                );
                formdata.append(
                  "response_10",
                  params.state?.data?.trainer.vsl_time
                    ? params.state?.data?.regularexercises
                    : params?.state?.coupon?.data?.regularexercises
                );
                formdata.append(
                  "response_11",
                  params.state?.data?.trainer.vsl_time
                    ? params.state?.data?.plansthemeals
                    : params?.state?.coupon?.data?.regularexercises
                );
                formdata.append(
                  "response_12",
                  params.state?.data?.trainer.vsl_time
                    ? params.state?.data?.preparesthemeal
                    : params?.state?.coupon?.data?.preparesthemeal
                );
                formdata.append(
                  "trainer_id",
                  params.state?.data?.trainer?.vsl_time
                    ? params.state?.data?.trainer?.vtr_id
                    : params?.state?.coupon?.data?.trainer?.vtr_id
                );
                formdata.append(
                  "tr_name",
                  params.state?.data?.trainer.vsl_time
                    ? params.state?.data?.trainer?.vtr_name
                    : params?.state?.coupon?.data?.trainer?.vtr_name
                );
                formdata.append("reason", "Weight loss");
                // formdata.append("apt_date", params.state?.data?.trainer.vsl_time ? params.state?.data?.trainer?.vtr_date : params?.state?.coupon?.data?.trainer?.vtr_date);
                formdata.append(
                  "apt_date",
                  params.state?.data?.trainer.vsl_time
                    ? moment(
                        params.state?.data?.trainer?.vtr_date,
                        "DD/MM/YYYY"
                      ).format("MM/DD/YYYY")
                    : moment(
                        params?.state?.coupon?.data?.trainer?.vtr_date,
                        "DD/MM/YYYY"
                      ).format("MM/DD/YYYY")
                );
                formdata.append(
                  "apt_day",
                  params.state?.data?.trainer.vsl_time
                    ? params.state?.data?.trainer?.vtr_day
                    : params?.state?.coupon?.data?.trainer?.vtr_day
                );
                formdata.append(
                  "apt_time",
                  params.state?.data?.trainer.vsl_time
                    ? params.state?.data?.trainer.vsl_time
                    : params?.state?.coupon?.data?.trainer?.vsl_time
                );
                formdata.append("amount", cost);
                var requestOptions = {
                  method: "POST",
                  headers: myHeaders,
                  body: formdata,
                  redirect: "follow",
                };

                fetch(
                  "https://dashboard.weightlossondemand.com/backend/api/appointmentByProvider",
                  requestOptions
                )
                  .then((response) => response.json())
                  .then((result) => {
                    console.log("appt result", result);
                    if (result.status == 200) {
                      setapt(true);
                      setcongrats("Congratulations");
                      setErrorMessage("Your Appointment has been booked!");
                      setLoader(false);
                    } else {
                      seterror(true);
                      setErrorMessage(result.message);
                      setLoader(false);
                    }
                  })
                  .catch((error) => {
                    console.log("error", error);
                    seterror(true);
                    setErrorMessage(error);
                    setLoader(false);
                  });
                // }else{

                // }
              } else if (
                params.state?.data?.trainer.asl_time ||
                params?.state?.coupon?.data?.trainer.asl_time
              ) {
                var myHeaders = new Headers();
                myHeaders.append("Authorization", token);
                var formdata = new FormData();
                formdata.append("user_token", token);
                formdata.append(
                  "response_1",
                  params.state?.data?.trainer.asl_time
                    ? params.state?.data?.response1
                    : params?.state?.coupon?.data?.response1
                );
                formdata.append(
                  "response_2",
                  params.state?.data?.trainer.asl_time
                    ? JSON.stringify(params.state?.data?.response2)
                    : JSON.stringify(params?.state?.coupon?.data?.response2)
                );
                formdata.append(
                  "response_3",
                  params.state?.data?.trainer.asl_time
                    ? params.state?.data?.response3
                    : params?.state?.coupon?.data?.response3
                );
                formdata.append(
                  "response_4",
                  params.state?.data?.trainer.asl_time
                    ? params.state?.data?.response4
                    : params?.state?.coupon?.data?.response4
                );
                formdata.append(
                  "response_5",
                  params.state?.data?.trainer.asl_time
                    ? params.state?.data?.response5
                    : params?.state?.coupon?.data?.response5
                );
                formdata.append(
                  "response_6",
                  params.state?.data?.trainer.asl_time
                    ? params.state?.data?.response6
                    : params?.state?.coupon?.data?.response6
                );
                formdata.append(
                  "response_7",
                  params.state?.data?.trainer.asl_time
                    ? params.state?.data?.response7
                    : params?.state?.coupon?.data?.response7
                );
                formdata.append(
                  "response_8",
                  params.state?.data?.trainer.asl_time
                    ? params.state?.data?.response8
                    : params?.state?.coupon?.data?.response8
                );
                formdata.append(
                  "response_9",
                  params.state?.data?.trainer.asl_time
                    ? params.state?.data?.response9
                    : params?.state?.coupon?.data?.response9
                );
                formdata.append(
                  "response_10",
                  params.state?.data?.trainer.asl_time
                    ? params.state?.data?.regularexercises
                    : params?.state?.coupon?.data?.regularexercises
                );
                formdata.append(
                  "response_11",
                  params.state?.data?.trainer.asl_time
                    ? params.state?.data?.plansthemeals
                    : params?.state?.coupon?.data?.regularexercises
                );
                formdata.append(
                  "response_12",
                  params.state?.data?.trainer.asl_time
                    ? params.state?.data?.preparesthemeal
                    : params?.state?.coupon?.data?.preparesthemeal
                );
                // formdata.append("trainer_id", params.state?.data?.trainer?.asl_time ? params.state?.data?.trainer?.atr_id : params?.state?.coupon?.data?.trainer?.atr_id);
                // formdata.append("tr_name", params.state?.data?.trainer.asl_time ? params.state?.data?.trainer?.atr_name : params?.state?.coupon?.data?.trainer?.atr_name);
                formdata.append("reason", "Weight loss");
                formdata.append(
                  "apt_date",
                  params.state?.data?.trainer.asl_time
                    ? moment(
                        params.state?.data?.trainer?.atr_date,
                        "DD/MM/YYYY"
                      ).format("MM/DD/YYYY")
                    : moment(
                        params?.state?.coupon?.data?.trainer?.atr_date,
                        "DD/MM/YYYY"
                      ).format("MM/DD/YYYY")
                );
                formdata.append(
                  "apt_day",
                  params.state?.data?.trainer.asl_time
                    ? params.state?.data?.trainer?.atr_day
                    : params?.state?.coupon?.data?.trainer?.atr_day
                );
                formdata.append(
                  "apt_time",
                  params.state?.data?.trainer.asl_time
                    ? params.state?.data?.trainer.asl_time
                    : params?.state?.coupon?.data?.trainer?.asl_time
                );
                formdata.append("amount", cost);
                var requestOptions = {
                  method: "POST",
                  headers: myHeaders,
                  body: formdata,
                  redirect: "follow",
                };
                fetch(
                  "https://dashboard.weightlossondemand.com/backend/api/appointmentBytime",
                  requestOptions
                )
                  .then((response) => response.json())
                  .then((result) => {
                    console.log("appt result", result);
                    if (result.status == 200) {
                      setapt(true);
                      setcongrats("Congratulations");
                      setErrorMessage("Your Appointment has been booked!");
                      setLoader(false);
                    } else {
                      seterror(true);
                      setErrorMessage(result.message);
                      setLoader(false);
                    }
                  })
                  .catch((error) => console.log("error", error));
                // }else{

                // }
              }
              // navigate("/Videocall");
            } else {
              seterror(true);
              setErrorMessage(result.message);
              setLoader(false);
            }
            // console.log('error', error);
          })
          .catch((error) => {
            console.log("error", error);
            seterror(true);
            setErrorMessage(error);
            setLoader(false);
          });
        setLoader(false);
      }
    } else {
      // console.log(result.message)
      seterror(true);
      setErrorMessage("Card not added");
      setLoader(false);
      // alert("card not added")
    }
  };
  return (
    <div className="of maincontainer">
     <div className="navshow">
            <BasicExample/>
        </div>
        <div className="sidenavshow">
        <NavSidebar />
        </div>
        <div className="mobilediv maincontainer">

      <Row class="d-flex justify-content-center flex-column align-items-center gap-5 pt-5 maincontainer">
        <Col
          lg="12"
          className="d-flex justify-content-center flex-column align-items-center pt-5 maincontainer"
        > <button className="paybutt1 mt-2 mb-2" onClick={goto} >
            {btext}
          </button>
          
          <button
            className="paybutt1 mt-2 mb-2"
            onClick={gotoConfirmpay}
            style={{ backgroundColor: paycolor }}
           
          >
            {cuopontext}
          </button>
          <button className="paybutt12 mt-4 pt-4">
            <p className="cost">Cost</p> <p className="cost">{cost}</p>
          </button>
          <Button className="paybutt1" onClick={Pay}>
            {/* <button className="paybutt1" onClick={goto} > */}
            Confirm and Pay
          </Button>
          <p className="mt-2 paytext1 text-center">NOTE: Please make sure that your device uses a mic and camera</p>
        </Col>
      </Row>
      
    </div>
    {loader && <Loader />}
      {error && (
        <Error onClick={Close} tittle={errorMessage} congrats={congrats} />
      )}
      {apt && (
        <Error onClick={dialog_Close} tittle={errorMessage} congrats={true} />
        )}
        </div>
  );
};

export default ConfirmAndPay;
