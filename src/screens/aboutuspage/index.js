import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Navbarmenu, TopBar } from "../../component";
import bg2 from "../../assets/bg2.png";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/logo.png";
import mother from "../../assets/mother.png";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import "./aboutus.css";
import Form from "react-bootstrap/Form";
import { AiFillStar } from "@react-icons/all-files/ai/AiFillStar";
const About = () => {
  const [email, setEmail] = useState(null);
  const [date, setdate] = useState(null);
  const [Password, setPassword] = useState(null);
  const handleSubmit = () => {
    console.log(email, Password, date);
  };
  const handleInputChange = (e) => {
    const { id, value } = e.target;

    if (id === "email") {
      setEmail(value);
    }
    if (id === "date") {
      setdate(value);
    }
    if (id === "password") {
      setPassword(value);
    }
  };

  return (
    < div className="over">
      <Navbar expand="lg" variant="light" bg="light">
        <Container fluid >
          <Navbar.Brand href="#">
            <img style={{ width: "50%" }} src={logo} />
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Row>
        <Col lg='6'>
          <div className="imm">
            <img style={{ width: "100%", heigh: "100%" }} src={mother} />
          </div>
        </Col>
        <Col lg='6' className="bg">
          <div className="grandgrandparent">
            <h4>Weight Loss On Demand®</h4>
            <p>
              Get access professional consultants 24 hours a day, 365 days a year.
             
            </p>
            <div className="grandparentdiv">
              <div className="parentdiv">
                <div className="inputdiv">
                  <div className="emaildiv">Email</div>
                  <div className="inputmain">
                    <input
                      type="email"
                      id="email"
                      className="in"
                      value={email}
                      onChange={(e) => handleInputChange(e)}
                      placeholder="Email"
                      />{" "}
                  </div>
                </div>
                <div className="inputdiv">
                  <div className="emaildiv">Date </div>
                  <div className="inputmain">
                    <input
                      type="date"
                      id="email"
                      className="in"
                      value={email}
                      onChange={(e) => handleInputChange(e)}
                      placeholder="Date of Birth"
                      />{" "}
                  </div>
                </div>
                <div className="inputdiv">
                  <div className="emaildiv">Password</div>
                  <div className="inputmain">
                    <input
                      type="email"
                      id="email"
                      value={email}
                      className="in"
                      onChange={(e) => handleInputChange(e)}
                      placeholder="Password"
                      />{" "}
                  </div>
                </div>
                <div className="inputdiv">
                  <div className="emaildiv">
                    {["checkbox"].map((type) => (
                      <div key={`default-${type}`} className="mb-3">
                        <Form.Check
                          type={type}
                          id={`default-${type}`}
                          // label={`default ${type}`}
                          />
                      </div>
                    ))}
                  </div>
                  <div className="inputmain2">
                    I agree to Weight Loss On Demand's
                    <span className="member">Membership Terms</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lastchild">
              <Button onClick={() => handleSubmit()}>Create account</Button>
              <p>
                Already a member? <span>Sign in</span>{" "}
              </p>
            </div>
          </div>
        </Col>
      </Row>
   
   
    <Container fluid  className="bg2">
   
         <Row>
           <Col lg='4'>
             <h3 className="foterhead">Lauren, Illinois</h3>
             <div>
             <AiFillStar className="rate"/>
             <AiFillStar className="rate"/>
             <AiFillStar className="rate"/>
             <AiFillStar className="rate"/>
             </div>
             <p className="foterhead">
               "I love the convenience! When I need to see a doctor there is
               always one available. Seeing my psychologist and psychiatrist is a
               breeze too."
             </p>
           </Col>
           <Col lg='4'>
             <h3 className="foterhead" >Lauren, Illinois</h3>
             <div>
             <AiFillStar className="rate"/>
             <AiFillStar className="rate"/>
             <AiFillStar className="rate"/>
             <AiFillStar className="rate"/>
             </div>
             <p className="foterhead">
               "I love the convenience! When I need to see a doctor there is
               always one available. Seeing my psychologist and psychiatrist is a
               breeze too."
             </p>
           </Col>
           <Col lg='4'>
             <h3 className="foterhead">Lauren, Illinois</h3>
             <div>
             <AiFillStar className="rate"/>
             <AiFillStar className="rate"/>
             <AiFillStar className="rate"/>
             <AiFillStar className="rate"/>
             </div>
             <p className="foterhead">
               "I love the convenience! When I need to see a doctor there is
               always one available. Seeing my psychologist and psychiatrist is a
               breeze too."
             </p>
           </Col>
         </Row>
       
    </Container>
                          </div>
  );
};

export default About;
