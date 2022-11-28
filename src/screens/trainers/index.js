import React, { useState } from "react";
import "./trainer.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Navbarmenu, TopBar } from "../../component";
import bg2 from "../../assets/bg2.png";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/logo.png";
import theropist from "../../assets/theropist.png";
import { IoIosArrowDown } from "@react-icons/all-files/io/IoIosArrowDown";
import { IoIosArrowUp, } from "@react-icons/all-files/io/IoIosArrowUp";

import { Button } from "react-bootstrap";
const Trainer = () => {
  const [show, setshow] = useState(false);
  let navigate = useNavigate();
  const checkavailablity = () => {
    navigate('/slots');
  };
  const Open=()=>{
    setshow(!show)
  }
  return (
    <div className="of">
      <Container fluid>
        <Navbar expand="lg" variant="light" bg="light">
          <Navbar.Brand href="#">
            <img src={logo} />
          </Navbar.Brand>
        </Navbar>
      </Container>
      <Row className="d-flex justify-content-center flex-column align-items-center gap-5 pt-5">
        <Col
          lg="12"
          className="d-flex justify-content-center flex-column align-items-center"
        >
          <div  className="d-flex flex-column   wwtrai">
            <div className="d-flex justify-content-space-between align-items-center gap-2 trwi">
              <div className="img22">
                <img
                  style={{ width: "100%", height: "100%" }}
                  src={theropist}
                />
              </div>
              <div className="padingtrainer">
                <h5>Michelle Klotz, PhD, MA, LCSW</h5>
                <p>Clinical Social Worker</p>
              </div>
            </div>
            <div className="top">
              <h6>next</h6>
            </div>
            <div className="top  fle">
              <div className="brder">
                <p>Tue, 11/29 3:00 AM</p>
              </div>
              <div className="brder">
                <p>Tue, 11/29 3:00 AM</p>
              </div>
              <div className="brder">
                <p>Tue, 11/29 3:00 AM</p>
              </div>
            </div>
            <div className="top">
              <h6>BACKGROUND</h6>
            </div>
            <div className="top">
              <p>
                Alexandra Rocheleau is a licensed independent clinical social
                worker who enjoys working with adolescents and adults on several
                different mental health areas, including anxiety and depression,
                relation...
              </p>
             {!show ?<> <p>
                Alexandra Rocheleau is a licensed independent clinical social
                worker who enjoys working with adolescents and adults on several
                different mental health areas, including anxiety and depression,
                relationship issues, trauma and PTSD, stress management,
                personality disorders and self-esteem/self-worth issues. She
                obtained her master’s in social work from the University of
                Vermont in 2015 and has since worked many individuals and
                groups, facilitating therapeutic interventions and establishing
                trusting therapeutic relationships. Alex is specially trained in
                Dialectical Behavioral Therapy with extensive experience working
                with clients who are experiencing borderline personality
                disorder and other types of behavioral issues. In her free time,
                Alexandra enjoys spending time with her family and playing
                softball.
              </p>
              <h6>FOCUS AREAS</h6>
              <p>
                Anxiety, Depression, Relationship Issues, Insomnia / Sleep
                Issues, Trauma and PTSD, Anger Management, Gender Identity, Drug
                / Substance Abuse, Work Stress / Burnout, Active Military /
                Veterans, Addiction, Alcohol Abuse, Behavioral Issues, Bipolar
                Disorder, Child or Adolescent Care, Couples Therapy, Domestic
                Abuse / Violence, Family Therapy, Fear / Phobias, Fertility
                Issues, Grief, Learning Disabilities, Life Transitions,
                Obsessive-Compulsive (OCD), Panic Disorders, Parenting,
                Personality Disorders, Pregnancy, Prenatal, Postpartum, Self
                Esteem / Self Worth, Sexuality, Stress Management
              </p>
              <h6>LANGUAGES</h6>
              <h6>English</h6>
              <h6>QUALIFICATIONS</h6>
              <p>Florida License (#TPSW2057), Vermont License (#089.0131983), West Virginia License (#TH00946334)</p></>:null}
            </div>
            <div className="top">
            <h6 onClick={Open}>
                Show full profile { !show? <IoIosArrowUp/>:<IoIosArrowDown />}
              </h6>
              <button onClick={checkavailablity} className="checkAvailblity">Check Availablilty</button>
            </div>
          </div>
          
        </Col>
      </Row>
    </div>
  );
};

export default Trainer;
