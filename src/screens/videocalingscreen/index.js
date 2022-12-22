import React, { useRef, useState } from 'react'

import { Button } from "@material-ui/core";
import VideoCall from "./VideoCall";


const Videocalling = () => {
    const [inCall,setInCall] = useState(false);
    return (
        <div  >
      {inCall ? (
        <VideoCall setInCall={setInCall} />
      ) : (
        <Button
          variant="contained"
          color="primary"
          onClick={() => setInCall(true)}
        >
          Join Call
        </Button>
      )}
    </div>
    )}


export default Videocalling