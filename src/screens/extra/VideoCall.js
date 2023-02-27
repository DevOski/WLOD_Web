// import { useState, useEffect } from "react";
// import {
//   config,
//   useClient,
//   useMicrophoneAndCameraTracks,
//   // channelName,
// } from "./settings.js";
// import { Grid } from "@material-ui/core";
// import Video from "./Video";
// import Controls from "./Controls";
// import {
//   createChannel,
//   getTokenFromAPI,
//   getUser,
// } from "../../services/utilities/api";
// import { useSelector } from "react-redux";
// import { useLocation, useNavigate } from "react-router-dom";

// export default function VideoCall(props) {
  
//   const [loder, setloder] = useState(false)
//   const params = useLocation();
//   const { setInCall } = props;
//   const [users, setUsers] = useState([]);
//   const [start, setStart] = useState(false);
//   const client = useClient();
//   const { ready, tracks } = useMicrophoneAndCameraTracks();
//   const userID = useSelector((state) => state.user.user_id);
//   const tr_id = params.state.tr_id;
//   const usertoken = useSelector((state) => state.token);
//   const [channelName, setChannelName] = useState("");
//   const [tokenAPI, setTokenAPI] = useState("");
 

//   const getUserDetails = async () => {
//     try {
//       let response = await getUser(usertoken);
//       console.log("chane--->", response.data.data.channel);
//       setChannelName(response.data.data.channel);
//       let resToken = await getTokenFromAPI(response.data.data.channel);
//       let token = resToken.data.rtcToken;
//       setTokenAPI(token);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const channelCreate = async () => {
//     try {
//       let response = await createChannel(tr_id, userID);
//       console.log("----------->>>>>>", response.data.message);
//       if (response.data.message == "Channel created successfully") {

//         var myHeaders = new Headers();
//         myHeaders.append("Authorization", usertoken);
//         var formdata = new FormData();
//         formdata.append("tr_id", tr_id);
//         var requestOptions = {
//           method: "POST",
//           headers: myHeaders,
//           body: formdata,
//           redirect: "follow",
//         };

//         fetch(
//           "https://dashboard.weightlossondemand.com/backend/api/notification",
//           requestOptions
//         )
//           .then((response) => response.json())
//           .then((result) => {
//             console.log(result);
//             // setloder(false)
//           })
//           .catch((error) => console.log("error", error));
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };


//   useEffect(() => {
//     getUserDetails();
//     channelCreate();
//     let init = async (name) => {
//       client.on("user-published", async (user, mediaType) => {
//         await client.subscribe(user, mediaType);
//         if (mediaType === "video") {
//           setUsers((prevUsers) => {
//             return [...prevUsers, user];
//           });
//         }
//         if (mediaType === "audio") {
//           user.audioTrack.play();
//         }
//       });

//       client.on("user-unpublished", (user, mediaType) => {
//         if (mediaType === "audio") {
//           if (user.audioTrack) user.audioTrack.stop();
//         }
//         if (mediaType === "video") {
//           setUsers((prevUsers) => {
//             return prevUsers.filter((User) => User.uid !== user.uid);
//           });
//         }
//       });

//       client.on("user-left", (user) => {
//         setUsers((prevUsers) => {
//           return prevUsers.filter((User) => User.uid !== user.uid);
//         });
//       });
//       console.log("----------------------------------2",tokenAPI);

//       console.log("----------------------------------234",client.join(config.appId, name, tokenAPI, null));

//       try {
//         await client.join(config.appId, name, tokenAPI, null);
//       } catch (error) {
//         console.log("error");
//       }

//       if (tracks) await client.publish([tracks[0], tracks[1]]);
//       setStart(true);
//     };

//     if (ready && tracks) {
//       try {
//         init(channelName);
//       } catch (error) {
//         console.log(error);
//       }
//     }
//   }, [channelName, client, ready, tracks]);

//   return (
//     <Grid container direction="column" style={{ height: "100%" }}>
//       <Grid item style={{ height: "5%" }}>
//         {ready && tracks && (
//           <Controls tracks={tracks} setStart={setStart} setInCall={setInCall} />
//         )}
//       </Grid>
//       <Grid item style={{ height: "95%" }}>
//         {start && tracks && <Video tracks={tracks} users={users} />}
//       </Grid>
//     </Grid>
//   );
// }
