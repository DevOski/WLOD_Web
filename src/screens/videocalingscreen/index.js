import React, { useRef, useState } from 'react'
import {AgoraVideoPlayer,Controls,InitForm,init} from 'agora-rtm-sdk'


const Videocalling = () => {
    //Store the User Data
const [users, setUsers] = useState([])
//Regulates the start of the video call
const [start, setStart] = useState(true)
//Contains the RTC and RTM data
const client = useRef({
   rtc: {
       client: null,
       localAudioTrack: null,
       localVideoTrack: null,
   },
   rtm: {
       client: null,
       channel: null
   }
});
//Whether you are the admin or not
const admin = useRef(false)
const initClientEvents = () => {
    client.current.rtc.client.on('user-joined', async (user) => {
        // A remote user has joined, add him to the users state
    })
    client.current.rtc.client.on("user-published", async (user, type) => {
        //Remote user published a track
        //Subscribe to it and alter the user state accordingly
    });
    client.current.rtc.client.on('user-left', async (user) => {
        //Remote user has left, delete from the user state
    })
    client.current.rtc.client.on("user-unpublished", (user, type) => {
        //Remote user unpublished a track
        //Alter the user state accordingly
    });
 }
    let action = async (action) => {
        if (action == 'leave') {
            //Destroy the local audio and video tracks.
            //Remove your user info from the RTM channel attributes
            //Leave the RTC client and RTM channel and client
            //Set users state to [] and start state to false
        }
        else {
            //Mute your audio or video respectively
            //Alter the users state accordingly
        }
     }
     const initRtmEvents = () => {
        client.current.rtm.client.on('MessageFromPeer', async (message, memberId) => {
            //Message from an admin to either mute audio/video yourself or quit the call
            //Call to action function
        })
        client.current.rtm.channel.on('AttributesUpdated', (attr) => {
            //An update to channel Attributes indicating an alteration to the users list of the call
        })
     }
     
const Videos = () => {
    return (
        <div id='videos'>
            {users.length && users.map((user) => {
                if (user.videoTrack) {
                    return (
                        <div className="user-container" key={user.uid}>
                            {user.videoTrack && <AgoraVideoPlayer className='vid' videoTrack={user.videoTrack} ></AgoraVideoPlayer>}
                            <Controls user={user} />
                        </div>
                    )
                }
            })}
        </div>
    )
 }
  return (
    <div className="App">
        
       {start && <Videos />}
       {!start && <InitForm initFunc={init} />}
   </div>
  )
}

export default Videocalling