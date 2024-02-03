import React from "react";
import "./Video.scss";

const Video: React.FC<{ videoSrc: string }> = (props) => {
  return (
    <div className="video">
      <video src={props.videoSrc} autoPlay loop muted>
        <source src={props.videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;
