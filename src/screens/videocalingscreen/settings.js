import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

const appId = '440edd9ffde44494a537d58b9d73bb1a';
const token ='007eJxTYFDvN5kU43lO+y+78cyPJbcMwk/J/pRfcSUiJfdZRfa7QwoKDCYmBqkpKZZpaSmpJiYmliaJpsbmKaYWSZYp5sZJSYaJPY82JTcEMjIU3lnPysgAgSA+O0NIanFJZl46AwMA7yYiaw==';
export const channelName = "Testing";

export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
