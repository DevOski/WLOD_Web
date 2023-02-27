import { useState } from "react";
import { Button } from "@material-ui/core";
import VideoCall from "./VideoCall";
import videocallprops from './settings'
import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";
 
var abc ="006270b512970864b0a93b14650e52e8f9cIACmaHwSdrmd+ZpE1AoWxdTArIpc3Vp6AcOXrx3fxV5/iTL78wsh39v0EACM2Ga6FI79YwEAAQCkSvxj";
function App() {
  const [inCall, setInCall] = useState(false);
  const token='006270b512970864b0a93b14650e52e8f9cIACmaHwSdrmd+ZpE1AoWxdTArIpc3Vp6AcOXrx3fxV5/iTL78wsh39v0EACM2Ga6FI79YwEAAQCkSvxj';
  const appId = '270b512970864b0a93b14650e52e8f9c';
 const config = { mode: "rtc", codec: "vp8", appId: appId, token: token };
 const useClient = createClient(config);
 const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
 const channelName = "Testings";
  return (
    <div className="App" style={{ height: "100%" }}>
      {inCall ? (
        <VideoCall setInCall={setInCall} config={config} useClient={useClient} useMicrophoneAndCameraTracks={useMicrophoneAndCameraTracks} channelName={channelName}/>
      ) : (
        <div style={{ display: "flex",justifyContent:'center',alignItems:'center', width: "100vw", height: "100vh"}}>
        <Button
          style={{backgroundColor:"#be1f2d",color:"white",width:'250px',height:'40px'}}
          onClick={() => {setInCall(true); abc="345"}}
        >
          Join Call
        </Button>
        </div>
      )}
    </div>
  );
}

export default App;
