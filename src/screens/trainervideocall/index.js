import React, { useEffect, useState } from "react";
import AgoraUIKit from "agora-react-uikit";
import {
  createChannel,
  getTokenFromAPI,
  getTrainer,
  getUser,
} from "../../services/utilities/api";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Loader } from "../../component";

const TrainerVideo = () => {
  const [videoCall, setVideoCall] = useState(false);
  const [channelName, setChannelName] = useState("");
  const [tokenAPI, setTokenAPI] = useState("");

  const callbacks = {
    EndCall: () => setVideoCall(false),
  };
  const usertoken = useSelector((state) => state.token);
  useEffect(() => {
    // join();
    getUserDetails();
  }, []);
  const getUserDetails = async () => {
    try {
      let response = await getTrainer(usertoken);
      // console.log('--->>>>>>>>'response.data.data.channel);
      setChannelName(response.data.data.channel);
      let resToken = await getTokenFromAPI(response.data.data.channel);
      let token = resToken.data.rtcToken;
      setTokenAPI(token);

      // console.log(response.data.data.channel);
      // setUserName(response.data.data.first_name);
      // dispatch(storeUserData(response.data.data));
    } catch (error) {
      console.log(error);
    }
  };
  const rtcProps = {
    appId: "270b512970864b0a93b14650e52e8f9c",
    channel: channelName, // your agora channel
    token: tokenAPI,
  };
  console.log(rtcProps,'------------------------------------->>>>>>>>>>');
  return videoCall ? (
    <div style={{ display: "flex", width: "100vw", height: "100vh" }}>
      <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks} />
    </div>
  ) : (
    <h3 onClick={() => setVideoCall(true)}>Start Call</h3>
  );
};

export default TrainerVideo;
