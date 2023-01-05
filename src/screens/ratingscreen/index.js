import React, { useEffect, useState } from "react";
import "./rat.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  BasicExample,
  Error,
  Loader,
  Navbarmenu,
  TopBar,
} from "../../component";
import bg2 from "../../assets/bg2.png";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import tr from "../../assets/tr.jpg";
import { AiOutlineStar } from "@react-icons/all-files/ai/AiOutlineStar";
import { Button } from "react-bootstrap";
import { useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getUser, trainerRating } from "../../services/utilities/api";
import moment from "moment";
import Card from "react-bootstrap/Card";
import StarRatings from "react-star-ratings";
import axios from "axios";
const RatingScreen = () => {
  const params = useLocation();
  const tr_id = params?.state?.tr_id;
  const [rating, setrating] = useState(0);
  const [loader, setLoader] = useState("");
  const [error, seterror] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [trainerName, setTrainerName] = useState("Test");
  const [trImg, setTrImg] = useState(tr);

  const changrating = async (newRating, name) => {
    setrating(newRating);
    setLoader(true);
    try {
      let response = await trainerRating(newRating, tr_id);
      seterror(true);
      setErrorMessage(response.data.message);
      // setIsModalVisible(true);
      setLoader(true);
    } catch (error) {
      console.log(error);
      seterror(false);

      setLoader(false);
    }
  };
  const Close = () => {
    seterror(false);
    setLoader(false);
    navigate("/thankyou");
  };
  let navigate = useNavigate();
  const goto = () => {
    navigate("/thankyou");
  };

  useEffect(() => {
    getTrainer();
  }, []);

  const getTrainer = async () => {
    // let requestOptions = {
    //   method: "GET",
    //   redirect: "follow",
    // };

    // fetch(
    //   `{https://dashboard.weightlossondemand.com/backend/api/get_tr/${tr_id}`,
    //   requestOptions
    // )
    //   .then((response) => response.json())
    //   .then((result) => console.log(result, "trainer------------->>>>>"))
    //   .catch((error) => console.log("error", error));
    let response = await axios.get(
      `https://dashboard.weightlossondemand.com/backend/api/get_tr/${tr_id}`
    );
    setTrainerName(response.data.data[0].tr_name);
    setTrImg(response.data.data[0].images);
  };
  return (
    <div className="of">
      <BasicExample />

      <Row className="d-flex justify-content-center flex-column align-items-center gap-5 pt-5">
        <Col
          lg="12"
          className="d-flex justify-content-center flex-column align-items-center"
        >
          <Card
            style={{
              width: "38rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div style={{ width: "200px", height: "200px", padding: "4%" }}>
              <Card.Img
                style={{ width: "100%", height: "100%", borderRadius: "100px" }}
                letiant="top"
                src={trImg}
              />
            </div>
            <Card.Title>{trainerName}</Card.Title>
            <StarRatings
              rating={rating}
              starRatedColor="red"
              changeRating={changrating}
              numberOfStars={5}
              name="rating"
            />
            <Card.Body
              style={{
                width: "18rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button onClick={goto} variant="primary">
                Skip
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {loader && <Loader />}
      {error && (
        <Error
          onClick={Close}
          tittle={"Your rating is submitted"}
          congrats={true}
        />
      )}
    </div>
  );
};

export default RatingScreen;
