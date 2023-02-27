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
  const rtcProps = {
    appId: "270b512970864b0a93b14650e52e8f9c",
    channel: channelName, // your agora channel
    token: tokenAPI, // use null or skip if using app in testing mode
  };
  
  console.log(rtcProps, "====>rctprops");
  const callbacks = {
    EndCall: () => {navigate('/rating',{
      state : {
        tr_id:tr_id,
       
      }
    }
    
    );}
  };
  const getChannel = () => {
    // getUserDetails();
    setloder(true)

    setVideoCall(true);
    // setloder(false)
  };
  return videoCall  ? (
    <div className="maincontainer" style={{ display: "flex", width: "100%", height: "100vh"}}>
      <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks} />
    </div>
  ) : (
    <div className="d-flex justify-content-center align-items-center maincontainer" style={{ display: "flex", width: "100vw", height: "100vh"}}>
<div className="maincontainer" style={{width:"auto"}}>

    <Button onClick={getChannel}>Join Session</Button>
</div>
{loder && <Loader />}
    </div>
  );
};

export default Videocalling;
