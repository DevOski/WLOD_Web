import React, { useEffect, useState } from "react";
import AgoraUIKit from "agora-react-uikit";
import { getTokenFromAPI, getUser } from "../../services/utilities/api";
import { useSelector } from "react-redux";

const Videocalling = () => {
  const [videoCall, setVideoCall] = useState(false);
  const [channelName, setChannelName] = useState("");
  const [tokenAPI, setTokenAPI] = useState("");

  const usertoken = useSelector((state) => state.token);
  useEffect(() => {
    console.log("123------------------->>>");
    getUserDetails();
  }, []);

  const getUserDetails = async () => {
    try {
      let response = await getUser(usertoken);
      console.log("chane--->", response.data.data.channel);
      setChannelName(response.data.data.channel);
      let resToken = await getTokenFromAPI(response.data.data.channel);
      let token = resToken.data.rtcToken;
      setTokenAPI(token);
    } catch (error) {
      console.log(error);
    }
  };
  const rtcProps = {
    appId: "270b512970864b0a93b14650e52e8f9c",
    channel: channelName, // your agora channel
    token: tokenAPI, // use null or skip if using app in testing mode
  };
  console.log(rtcProps,'====>rctprops');
  const callbacks = {
    EndCall: () => setVideoCall(false),
  };
  return videoCall ? (
    <div style={{ display: "flex", width: "100vw", height: "100vh" }}>
      <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks} />
    </div>
  ) : (
    <h3 onClick={() => setVideoCall(true)}>Start Call</h3>
  );
};

export default Videocalling;
