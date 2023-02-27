import React, { useEffect, useState } from "react";
// import AgoraUIKit from "agora-react-uikit";
import {
  createChannel,
  getTokenFromAPI,
  getTrainer,
  getUser,
} from "../../services/utilities/api";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@material-ui/core";
import VideoCall from "./VideoCall";
import { Loader } from "../../component";
import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";


const TrainerVideo = () => {
  const [loder, setloder] = useState(false)
  const params = useLocation();
  
  const userID = useSelector((state) => state.user.user_id);
  const identity =  params.state?.identity;
  // console.log("----------->>>", userID, tr_id);
  const [videoCall, setVideoCall] = useState(false);
  const [channelName, setChannelName] = useState("");
  const [tokenAPI, setTokenAPI] = useState("");
  let navigate = useNavigate();
  const usertoken = useSelector((state) => state.token);

  const appId = '270b512970864b0a93b14650e52e8f9c';
  const [inCall, setInCall] = useState(false);
  //  const channelName = "Testings";
  
  
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
  const token=tokenAPI;
 const config = { mode: "rtc", codec: "vp8", appId: appId, token: token };
 const useClient = createClient(config);
 const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
  return ( 
    <div className="App" style={{ height: "100%" }}>
  {inCall ? (
    <VideoCall setInCall={setInCall} config={config} useClient={useClient} useMicrophoneAndCameraTracks={useMicrophoneAndCameraTracks} channelName={channelName} identity={identity}/>
  ) : (
    <div style={{ display: "flex",justifyContent:'center',alignItems:'center', width: "100vw", height: "100vh"}}>
    <Button
      style={{backgroundColor:"#be1f2d",color:"white",width:'250px',height:'40px'}}
      onClick={() => {setInCall(true)}}
    >
      Join Call
    </Button>
    </div>
  )}
{loder && <Loader />}
</div>
   
  );
};

export default TrainerVideo;
