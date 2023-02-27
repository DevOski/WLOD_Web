import React, { useEffect, useState } from "react";
// import AgoraUIKit from "agora-react-uikit";
import {
  createChannel,
  getTokenFromAPI,
  getUser,
} from "../../services/utilities/api";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@material-ui/core";
import VideoCall from "./VideoCall";
import { Loader } from "../../component";
import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";


const Videocalling = () => {
  const [loder, setloder] = useState(false)
  const params = useLocation();
  const userID = useSelector((state) => state.user.user_id);
  const tr_id = params.state.tr_id;
  console.log("----------->>>", userID, tr_id);
  const [videoCall, setVideoCall] = useState(false);
  const [channelName, setChannelName] = useState("");
  const [tokenAPI, setTokenAPI] = useState("");
  let navigate = useNavigate();
  const usertoken = useSelector((state) => state.token);

  const appId = '270b512970864b0a93b14650e52e8f9c';
  const [inCall, setInCall] = useState(false);
  //  const channelName = "Testings";
  


  useEffect(() => {
    // console.log("123------------------->>>");
    getUserDetails();
    channelCreate();
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

  const channelCreate = async () => {
    try {
      let response = await createChannel(tr_id, userID);
      console.log("----------->>>>>>", response.data.message);
      if (response.data.message == "Channel created successfully") {

        var myHeaders = new Headers();
        myHeaders.append("Authorization", usertoken);
        var formdata = new FormData();
        formdata.append("tr_id", tr_id);
        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: formdata,
          redirect: "follow",
        };

        fetch(
          "https://dashboard.weightlossondemand.com/backend/api/notification",
          requestOptions
        )
          .then((response) => response.json())
          .then((result) => {
            console.log(result);
            setloder(false)
          })
          .catch((error) => console.log("error", error));
      }
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
    <VideoCall setInCall={setInCall} config={config} useClient={useClient} useMicrophoneAndCameraTracks={useMicrophoneAndCameraTracks} channelName={channelName} tr_id={tr_id}/>
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

export default Videocalling;
