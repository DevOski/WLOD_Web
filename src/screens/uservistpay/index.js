import React, { useState, useEffect } from "react";
import "./vt.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BasicExample, Loader, Navbarmenu, Error } from "../../component";
import bg2 from "../../assets/bg2.png";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/logo.png";
// import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";
import { IoIosArrowForward } from "@react-icons/all-files/io/IoIosArrowForward";
import { Button } from "react-bootstrap";
import { storePayment } from "../../store/action";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import NavSidebar from "../../component/navsidebar";
const Confirmpay = () => {
  const params = useLocation();
  console.log("@", params?.state?.data);
  const [loader, setLoader] = useState(true);
  const [cardnumber, setcardnumber] = useState("");
  const [Expiration, setExpiration] = useState("");
  const [Cvv, setCvv] = useState("");
  const [ExpirationYY, setExpirationYY] = useState("");
  const [isChecked, setisisChecked] = useState(false);
  const [error, seterror] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const ApplyCupon = params?.state?.bparams?.ApplyCupon;
  const data = params?.state?.data;

   setTimeout(() => {
    setLoader(false)
   },3000);
  const dispatch = useDispatch();
  const handleOnChange = () => {
    setisisChecked(!isChecked);
  };
  const Close = () => {
    seterror(false);
  };
  let navigate = useNavigate();
  const goto = () => {
    navigate("/Confrimandpay", {
      state: {
        card: params.state.bparams,
      },
    });
  };
  const payment = useSelector((state) => state.payment);

  const saveCreditCard = () => {
    if (cardnumber && Expiration && ExpirationYY && Cvv) {
      console.log(cardnumber, Expiration, ExpirationYY, Cvv);
      //   setcardnumber(cardnumber)
      let paymentData = { cardnumber, Expiration, ExpirationYY, Cvv };
      dispatch(storePayment(paymentData));
      navigate("/Confrimandpay", {
        state: {
          cardnumber,
          Expiration,
          ExpirationYY,
          Cvv,
          ApplyCupon,
          data,
        },
      });

      // let paymentData = { cardNum, expirationMonth, expirationYear, cvv };
      // dispatch(storePayment(paymentData));
    }else{
      seterror(true);
      setErrorMessage("All fields are required");
    }
  };
  useEffect(() => {
    if (params?.state?.bparams?.cardnumber != null) {
      console.log("works00000000000000");
      setcardnumber(params?.state?.bparams?.cardnumber);
      setExpiration(params?.state?.bparams?.Expiration);
      setCvv(params?.state?.bparams?.Cvv);
      setExpirationYY(params?.state?.bparams?.ExpirationYY);
    } else if (params?.state?.bparams?.coupon?.cardnumber != null) {
      console.log("work");
      setcardnumber(params?.state?.bparams?.coupon?.cardnumber);
      setExpiration(params?.state?.bparams?.coupon?.Expiration);
      setCvv(params?.state?.bparams?.coupon?.Cvv);
      setExpirationYY(params?.state?.bparams?.coupon?.ExpirationYY);
    } else if (payment) {
      setcardnumber(payment.cardnumber);
      setExpiration(payment.Expiration);
      setCvv(payment.Cvv);
      setExpirationYY(payment.ExpirationYY);
    }
  }, []);

  // useEffect(() => {
  //   // return () => {
  //     if(params?.state?.bparams?.cardnumber != null){
  //       console.log('works00000000000000');
  //       // setcardnumber(params?.state?.bparams?.cardnumber);
  //       setExpiration(params?.state?.bparams?.Expiration);
  //       setCvv(params?.state?.bparams?.Cvv);
  //       setExpirationYY(params?.state?.bparams?.ExpirationYY);

  //       // setbtext("Card Added");
  //       // setbparams(params.state)
  //       // }else{
  //         // setbtext("Add Card");
  //         // setbparams("card not entered")
  //       // }
  //   }
  // },)
  const enterKye=(e)=>{
    if(e.key==="Enter"){
      saveCreditCard();
      }
    }
  return (
    <>
      <div className="of">
        {/* <Navbar expand="lg" variant="light" bg="light">
          <Navbar.Brand href="#">
          <img className="header-logo" src={logo} />
          </Navbar.Brand>
        </Navbar> */}
         <div className="navshow">
            <BasicExample/>
        </div>
        <div className="sidenavshow">
        <NavSidebar />
        </div>
        <div className="mobilediv ">
      <Container fluid>
      <Row>
      <Col lg='4' md="3" sm="1"></Col>
        <Col lg='4' md="6" sm="10" 
            className="con-col "
            >
            <Row>
              <Col lg='2' md="1" sm="1" xs="1">
              </Col>
              <Col lg='8' md="10" sm="10" xs="10">
              <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Credit card number</Form.Label>
                <Form.Control
                  type="numberic"
                  defaultValue={cardnumber}
                  placeholder="Add your credit card number"
                  onChange={(event) => setcardnumber(event.target.value)}
                  onKeyPress={enterKye}
                  maxLength={16}
                  />
                {/* <Form.Text className="text-muted">
                  We'll never share your information with anyone else.
                </Form.Text> */}
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Expiration(MM)</Form.Label>
                <Form.Control
                  defaultValue={Expiration}
                  type="text"
                  placeholder="Expiration(MM)"
                  onChange={(event) => setExpiration(event.target.value)}
                  onKeyPress={enterKye}
                  maxLength={2}
                  />
              </Form.Group>
         
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Expiration(YY)</Form.Label>
                <Form.Control
                  defaultValue={ExpirationYY}
                  type="text"
                  placeholder="Expiration(YY)"
                  onChange={(event) => setExpirationYY(event.target.value)}
                  onKeyPress={enterKye}
                  maxLength={2}
                  />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Cvv</Form.Label>
                <Form.Control
                  defaultValue={Cvv}
                  type="text"
                  placeholder="Cvv"
                  onChange={(event) => setCvv(event.target.value)}
                  onKeyPress={enterKye}
                  maxLength={4}
                  />
              </Form.Group>
              {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                type="checkbox"
                  label="Check me out"
                  checked={isChecked}
                  onChange={handleOnChange}
                  />
                </Form.Group> */}
              <Button
                variant="primary"
                className="comfirm-pay-submit"
                onClick={saveCreditCard}
                >
                Submit
              </Button>
            </Form>
              </Col>
              <Col lg='2' md="1" sm="10" xs="10">
              </Col>

            </Row>
           
          </Col>
      <Col lg='4' md="3" sm="1"></Col>

        </Row>
    </Container>
      </div>
      </div>
      {loader && <Loader />}
      {error && (
        <Error onClick={Close} tittle={errorMessage} congrats="" />
        )}
      </>
  );
};

export default Confirmpay;
