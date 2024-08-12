import JWPlayer from "@jwplayer/jwplayer-react";
import { useNavigate } from "react-router-dom";

function PlayerPage() {
  const navigate = useNavigate();

  document.addEventListener("keydown", (e) => {
    if (jwplayer().id == undefined) return;

    switch (e.keyCode) {
      case 27:
        navigate("/");
        break;
      case 415:
        jwplayer().play();
        break;
      case 19:
        jwplayer().pause();
        break;
      default:
        break;
    }
  });

  const config = {
    key: "XSuP4qMl+9tK17QNb+4+th2Pm9AWgMO/cYH8CI0HGGr7bdjo",
    stretching: "exactfit",
    width: "100%",
    heigth: "100%",
    aspectratio: "16:9",
    autostart: true,
    cast: {},
    sharing: {},
    mute: false,
  };

  const didMountCallback = () => {
    jwplayer().setFullscreen(true);
    jwplayer().setMute(false);
  };

  return (
    <JWPlayer
      library="https://ssl.p.jwpcdn.com/player/v/8.22.0/jwplayer.js"
      file="https://coolestguidesontheplanet.com/videodrome/cgp_video/mymovie.mp4"
      config={config}
      didMountCallback={didMountCallback}
    />
  );
}

export default PlayerPage;
