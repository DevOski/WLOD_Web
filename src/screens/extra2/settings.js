import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

const appId = '440edd9ffde44494a537d58b9d73bb1a';
const token ='007eJxTYEhan8y16F/nrknVjnIbv39OOu51suO43rpdr08Yb/2xPfGmAoOJiUFqSoplWlpKqomJiaVJoqmxeYqpRZJlirlxUpJh4j7zLckNgYwMSi8OMTBCIYjPzhCSWlySmZfOwAAA4tYk3w==';
export const channelName = "Testing";

export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
