import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

const appId = '440edd9ffde44494a537d58b9d73bb1a';
const token ='007eJxTYOia2fb9s0dGsL2R566szQsW27R/nfFapqTFzPRlwhuXQiMFBhMTg9SUFMu0tJRUExMTS5NEU2PzFFOLJMsUc+OkJMPEuZVLkhsCGRnUp+5kZWSAQBCfnSEktbgkMy+dgQEACcEh0Q==';
export const channelName = "Testing";
export const config = { mode:"rtc", codec:"vp8",appId:appId, token:token};
export const useClient=createClient(config);
export const useMicrophoneAndCameraTracks=createMicrophoneAndCameraTracks();

