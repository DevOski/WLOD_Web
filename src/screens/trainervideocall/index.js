import React, { useEffect, useState } from "react";
import AgoraUIKit from "agora-react-uikit";
import {
  createChannel,
  getTokenFromAPI,
  getUser,
} from "../../services/utilities/api";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Loader } from "../../component";

const TrainerVideo = () => {
  const [videoCall, setVideoCall] = useState(false);
  const rtcProps = {
    appId: '440edd9ffde44494a537d58b9d73bb1a',
    channel: 'Testing', // your agora channel
    token: '007eJxTYEhan8y16F/nrknVjnIbv39OOu51suO43rpdr08Yb/2xPfGmAoOJiUFqSoplWlpKqomJiaVJoqmxeYqpRZJlirlxUpJh4j7zLckNgYwMSi8OMTBCIYjPzhCSWlySmZfOwAAA4tYk3w==' // use null or skip if using app in testing mode
  };
  const callbacks = {
    EndCall: () => setVideoCall(false),
  };
  return videoCall ? (
    <div style={{display: 'flex', width: '100vw', height: '100vh'}}>
      <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks} />
    </div>
  ) : (
    <h3 onClick={() => setVideoCall(true)}>Start Call</h3>)
};

export default TrainerVideo;
