import React, { useState } from "react";
import "./vt.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BasicExample, Navbarmenu, TopBar } from "../../component";
import bg2 from "../../assets/bg2.png";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/logo.png";
// import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";
import { IoIosArrowForward } from "@react-icons/all-files/io/IoIosArrowForward";
import { Button } from "react-bootstrap";
import { storePayment } from "../../store/action";
import { useDispatch } from "react-redux";
const Confirmpay = () => {
  const [cardnumber, setcardnumber] = useState("");
  const [Expiration, setExpiration] = useState("");
  const [Cvv, setCvv] = useState("");
  const [ExpirationYY, setExpirationYY] = useState("");
  const [isChecked, setisisChecked] = useState(false);

  const dispatch = useDispatch();
  const handleOnChange = () => {
    setisisChecked(!isChecked);
  };

  let navigate = useNavigate();
  const goto = () => {
    navigate("/Confrimandpay");
  };

  const saveCreditCard = () => {
    if (cardnumber && Expiration && ExpirationYY && Cvv) {
      console.log(cardnumber , Expiration , ExpirationYY , Cvv);
      // let paymentData = { cardNum, expirationMonth, expirationYear, cvv };
      // dispatch(storePayment(paymentData));
    }
  };
  return (
    <Container fluid>
      <div className="of">
        {/* <Navbar expand="lg" variant="light" bg="light">
          <Navbar.Brand href="#">
            <img className="header-logo" src={logo} />
          </Navbar.Brand>
        </Navbar> */}
        <BasicExample/>
        <Row class="d-flex justify-content-center  align-items-center gap-5 pt-5">
          <Col
            lg="12"
            className="d-flex justify-content-center  align-items-center con-col"
          >
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Credit card number</Form.Label>
                <Form.Control
                  type="numberic"
                  placeholder="Add your credit card number"
                  onChange={(event) => setcardnumber(event.target.value)}
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Expiration(MM)</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Expiration(MM)"
                  onChange={(event) => setExpiration(event.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Cvv</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Cvv"
                  onChange={(event) => setCvv(event.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Expiration(YY)</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Expiration(YY)"
                  onChange={(event) => setExpirationYY(event.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  label="Check me out"
                  checked={isChecked}
                  onChange={handleOnChange}
                />
              </Form.Group>
              <Button
                variant="primary"
                className="comfirm-pay-submit"
                onClick={goto}
              >
                Submit
              </Button>
            </Form>
          </Col>

         
        </Row>
      </div>
    </Container>
  );
};

export default Confirmpay;
