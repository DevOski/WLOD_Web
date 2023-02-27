import { AgoraVideoPlayer } from "agora-rtc-react";
import { Grid } from "@material-ui/core";
import { useState, useEffect } from "react";

export default function Video(props) {
  const { users, tracks } = props;
  const [gridSpacing, setGridSpacing] = useState(12);

  useEffect(() => {
    setGridSpacing(7);
  }, [users, tracks]);

  return (
    <Grid container style={{ height:"100vh" }}>
      <Grid item lg={10} md={8} sm={8} xs={7}>
        <AgoraVideoPlayer
          videoTrack={tracks[1]}
          style={{ height: "100%", width: "100%",position:'absolute' }}
        />
      </Grid>
      {users.length > 0 &&
        users.map((user) => {
          if (user.videoTrack) {
            return (
              <Grid item lg={2} md={4} sm={4} xs={5} >
                <AgoraVideoPlayer
                // className="grid2"
                  videoTrack={user.videoTrack}
                  key={user.uid}
                  style={{ height: "30%", width: "100%",position:'relative'}}
                />
              </Grid>
            );
          } else return null;
        })}
    </Grid>
  );
}
