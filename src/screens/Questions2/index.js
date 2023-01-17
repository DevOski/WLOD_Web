import React, { useState } from "react";
import "./q.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BasicExample, Navbarmenu, TopBar } from "../../component";
import bg2 from "../../assets/bg2.png";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/logo.png";
import { IoIosArrowForward } from "@react-icons/all-files/io/IoIosArrowForward";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import { useLocation } from "react-router-dom";
import { Question1, Question3 } from "../../store/action";
import { useDispatch } from "react-redux";
const Questionpagetwo = () => {
  const params = useLocation();
  console.log("@@", params.state.vsl_time);
  const trainer = params.state;
  const tr_id =params.state?.tr_id;
  const atr_id =params.state?.atr_id;
  const vtr_id= params.state?.vtr_id;
  const tr_name = params.state?.tr_name ? params.state?.tr_name : params.state?.vtr_name;
  const tr_day = params.state?.atr_day ? params.state?.atr_day : params.state?.vtr_day;
  const tr_date = params.state?.atr_date ? params.state?.atr_date : params.state?.vtr_date;
  const sl_time = params.state?.asl_time ? params.state?.asl_time : params.state?.vsl_time;
  console.log("-+",tr_day,tr_date,sl_time);
  let navigate = useNavigate();
  const [allergiesintolerances, setallergiesintolerances] = useState("");
  const [list1, setlist1] = useState("");
  const [dose1, setdose1] = useState("");
  const [list2, setlist2] = useState("");
  const [dose2, setdose2] = useState("");
  const [list3, setlist3] = useState("");
  const [dose3, setdose3] = useState("");
  const [list4, setlist4] = useState("");
  const [dose4, setdose4] = useState("");
  const [list5, setlist5] = useState("");
  const [dose5, setdose5] = useState("");
  const [stressinyourlife, setstressinyourlife] = useState("");
  const [copewithstress, setcopewithstress] = useState("");
  const [culturalorreligious, setculturalorreligious] = useState("");
  const [readinesstomakelifestyle, setreadinesstomakelifestyle] = useState("");
  const [confidencetomakelifestyle, setconfidencetomakelifestyle] =
    useState("");
  const [physicallimitations, setphysicallimitations] = useState("");
  const [healthlimitation, setHealthlimitation] = useState("");

  const [CurrentHeight, setCurrentHeight] = useState("");
  const [CurrentWeight, setCurrentWeight] = useState("");
  const [lowestandhighestadultweight, setlowestandhighestadultweight] =
    useState("");
  const [weightchangesgainorloss, setweightchangesgainorloss] = useState("");
  const [dietedinthepast, setdietedinthepast] = useState("");
  const [hardforyoutoloseweight, sethardforyoutoloseweight] = useState("");
  const [helpedyouloseweight, sethelpedyouloseweight] = useState("");
  const [weightwouldyouliketolose, setweightwouldyouliketolose] = useState("");
  const [benefitfromthisweightloss, setbenefitfromthisweightloss] =
    useState("");
  const [isrestfulsleepNo, setisrestfulsleepNo] = useState(false);
  const [isrestfulsleepyes, setisrestfulsleepyes] = useState(false);
  const [regularexercises, setregularexercises] = useState("");
  const [plansthemeals, setplansthemeals] = useState("");
  const [preparesthemeal, setpreparesthemeal] = useState("");

  const dipatch = useDispatch();
  function handleNext() {
    console.log("hello");
    const response2 = {
      medication1: list1,
      dosage1: dose1,
      medication2: list2,
      dosage2: dose2,
      medication3: list3,
      dosage3: dose3,
      medication4: list4,
      dosage4: dose4,
      medication5: list5,
      dosage5: dose5,
    };
    const response1 = physicallimitations;
    console.log("array", response1);
    dipatch(
      Question1(
        response1,
        healthlimitation,
        CurrentWeight,
        CurrentHeight,
        lowestandhighestadultweight,
        weightchangesgainorloss,
        dietedinthepast,
        weightwouldyouliketolose,
        benefitfromthisweightloss,
        regularexercises,
        plansthemeals,
        preparesthemeal,
        tr_id,
        tr_name,
        tr_day,
        tr_date,
        sl_time,
        atr_id,
        vtr_id,
      )
    );
    navigate("/Reviewpage", {
      state: {
        trainer,
        response1,
        response2: healthlimitation,
        response3: CurrentWeight,
        response4: CurrentHeight,
        response5: lowestandhighestadultweight,
        response6: weightchangesgainorloss,
        response7: dietedinthepast,
        response8: weightwouldyouliketolose,
        response9: benefitfromthisweightloss,
        regularexercises,
        plansthemeals,
        preparesthemeal,
      },
      // Question1
    });
  }

  const handleOnChange = () => {
    setisrestfulsleepyes(!isrestfulsleepyes);
    setisrestfulsleepNo(!isrestfulsleepNo);
  };

  const goto = () => {
    console.log("navigate to 3", params.state.response1);
    navigate("/question4", {
      state: {
        trainer: params.state.trainer,
        response1: params.state.response1,
        response2: params.state.response2,
        response3: CurrentHeight,
        response4: CurrentWeight,
        response5: lowestandhighestadultweight,
        response6: weightchangesgainorloss,
        response7: dietedinthepast,
        response8: weightwouldyouliketolose,
        response9: benefitfromthisweightloss,
      },
    });
  };
  const enterKye = (e) => {
    if (e.key === "Enter") {
      handleNext();
    }
  };
  return (
    <>
      <BasicExample />
      <Row className="d-flex justify-content-center flex-column align-items-center  pt-5 pb-5">
        <Col
          lg="12"
          className="d-flex justify-content-center flex-column align-items-center"
        >
          <div className="d-flex justify-content-between  flex-column  align-items-center ww">
            <div>
              <h4 className="qdesig">General Health Information</h4>
            </div>
            <div className="mb-3 inwi">
              <label className="pb-2 ">
                1) List any health problems and physical limitations:{" "}
              </label>
              <textarea
                type="text"
                className="form-control"
                placeholder="Enter health problems/physical limitations"
                onChange={(event) => setphysicallimitations(event.target.value)}
                onKeyPress={enterKye}
              />
            </div>

            <div className="mb-3 inwi">
              <label className="pb-2">
                2) List All Medications, Vitamins, and Herbals: Dosage{" "}
              </label>
              <textarea
                type="text"
                className="form-control"
                placeholder="Enter health problems/physical limitations"
                onChange={(event) => setHealthlimitation(event.target.value)}
                onKeyPress={enterKye}
              />
            </div>

            <div>
              <h4 className="qdesig">Weight Information</h4>
            </div>
            <div className="mb-3 inwi">
              <label className="pb-2">3) Current Weight:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Current weight"
                onChange={(event) => setCurrentWeight(event.target.value)}
                onKeyPress={enterKye}
              />
            </div>
            <div className="mb-3 inwi">
              <label className="pb-2">4) Current Height</label>
              <input
                type="text"
                className="form-control"
                placeholder="Current height"
                onChange={(event) => setCurrentHeight(event.target.value)}
                onKeyPress={enterKye}
              />
              <div className="mb-3 inwi">
                <label className="pb-2">
                  5) What was your lowest and highest adult weight? __________lb
                  __________lb
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Lowest and highest adult weight"
                  onChange={(event) =>
                    setlowestandhighestadultweight(event.target.value)
                  }
                  onKeyPress={enterKye}
                />
              </div>
              <div className="mb-3 inwi">
                <label className="pb-2">
                  6) Describe any weight changes (gain or loss) in the past 2
                  years:{" "}
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Weight change"
                  onChange={(event) =>
                    setweightchangesgainorloss(event.target.value)
                  }
                  onKeyPress={enterKye}
                />
              </div>
              <div className="mb-3 inwi">
                <label className="pb-2">
                  7) Have you dieted in the past for weight loss? No Yes If yes,
                  please indicate what you have done:
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Past diet details"
                  onChange={(event) => setdietedinthepast(event.target.value)}
                  onKeyPress={enterKye}
                />
              </div>

              <div className="mb-3 inwi">
                <label className="pb-2">
                  8) How much weight would you like to lose?
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter amount of weight"
                  onChange={(event) =>
                    setweightwouldyouliketolose(event.target.value)
                  }
                  onKeyPress={enterKye}
                />
              </div>
              <div className="mb-3 inwi">
                <label className="pb-2">
                  9) How will you benefit from this weight loss?
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter benefits"
                  onChange={(event) =>
                    setbenefitfromthisweightloss(event.target.value)
                  }
                  onKeyPress={enterKye}
                />
              </div>

              <div className=" align-items-center">
                <h4 className="qdesig" style={{ textAlign: "center" }}>
                  Physical Activity Information
                </h4>
                <div>
                  <div>
                    <label className="pb-2">
                      10) What, if any, regular exercises do you do?{" "}
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Health problems and physical limitations"
                      onChange={(event) =>
                        setregularexercises(event.target.value)
                      }
                      onKeyPress={enterKye}
                    />
                  </div>
                </div>

                <div className="mt-3">
                  <h4 className="qdesig" style={{ textAlign: "center" }}>
                    Nutrition Information
                  </h4>
                </div>
                <div>
                  <div className="mb-3 inwi">
                    <label className="pb-2">
                      11) Who plans the meals at home?
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Who plans the meals at home?"
                      onChange={(event) => setplansthemeals(event.target.value)}
                      onKeyPress={enterKye}
                    />
                  </div>
                  <div className="mb-3 inwi">
                    <label className="pb-2">
                      12) Who prepares the meals at home?{" "}
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Who prepares the meals at home?"
                      onChange={(event) =>
                        setpreparesthemeal(event.target.value)
                      }
                      onKeyPress={enterKye}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="q-next-btn-div">
              <Button className="bdiv" onClick={handleNext}>
                Submit
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Questionpagetwo;
