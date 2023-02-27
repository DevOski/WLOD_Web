// import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";
// import { Tokendata } from "./set";
// const appId = '270b512970864b0a93b14650e52e8f9c';
// console.log("yeraha data ========>>>>>>>>>>>>>>>>>>>>>>>>>>",Tokendata);
// const token ='006270b512970864b0a93b14650e52e8f9cIAAZ8KXm7pQAxyYoIsMqzFqh+DB1XYhOAykisZ3ECCW+9TL78wsh39v0EABluztIclX9YwEAAQACEvxj';
// export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token };
// export const useClient = createClient(config);
// export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
// export const channelName = "Testings";

// export const channelName = "main";



import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";
import { useState } from "react";
import { useEffect } from "react";
var test = "";

function videocallprops(props){
    // const [res, setRes] = useState('');
    // setRes('006270b512970864b0a93b14650e52e8f9cIAAZ8KXm7pQAxyYoIsMqzFqh+DB1XYhOAykisZ3ECCW+9TL78wsh39v0EABluztIclX9YwEAAQACEvxj')
    // return res
test = "006270b512970864b0a93b14650e52e8f9cIACLZB2BQxMMLZK85fvxcW6q7zF8iyoh07HrbOXzp0CAKDL78wsh39v0EABluztIwmP9YwEAAQBSIPxj";

};
videocallprops();
// useEffect(() => {
//    const ress= this.downloadurl();
//     console.log(ress);
//   }, [ress]);
const token=test;
const appId = '270b512970864b0a93b14650e52e8f9c';
export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "Testings";

// // export const channelName = "main";
