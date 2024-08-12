import JWPlayer from "@jwplayer/jwplayer-react";
import { channelDetail } from "../types";
import { usePlayerConfig } from "../hooks/usePlayerConfig";
import { useNavigate } from "react-router-dom";

declare global {
  interface Window {
    jwplayer: any;
  }
}

type videoJwplayerType = {
  channel: channelDetail;
};

function videoJwplayer({ channel }: videoJwplayerType) {
  const playlist = usePlayerConfig(channel);
  const navigate = useNavigate();

  document.addEventListener("keydown", (e) => {
    if (window.jwplayer().id == undefined) return;

    const keys: { [key: number]: () => void } = {
      27: () => navigate("/"),
      415: () => window.jwplayer().play(),
      19: () => window.jwplayer().pause(),
    };

    if (e.keyCode in keys) return keys[e.keyCode]();
  });

  const didMountCallback = () => {
    window.jwplayer().setFullscreen(true);
    window.jwplayer().setMute(false);
  };

  const config = {
    key: "XSuP4qMl+9tK17QNb+4+th2Pm9AWgMO/cYH8CI0HGGr7bdjo",
    stretching: "exactfit",
    width: "100%",
    height: "100%",
    aspectratio: "16:9",
    autostart: true,
    cast: {},
    sharing: {},
  };

  return (
    <JWPlayer
      library="https://ssl.p.jwpcdn.com/player/v/8.22.0/jwplayer.js"
      playlist={playlist}
      config={config}
      didMountCallback={didMountCallback}
    />
  );
}

export default videoJwplayer;
