import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

const appId = '440edd9ffde44494a537d58b9d73bb1a';
const token =
"007eJxTYPid/CB8qchNg8+nfn733fDAoXi5wJzq/Q3b5L0UnXbvKj+kwGBiYpCakmKZlpaSamJiYmmSaGpsnmJqkWSZYm6clGSYeFt8cXJDICNDf/0TVkYGCATx2RlCUotLMvPSGRgAnwgjug==";

export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "Testing";
