import React from "react";
import "./style.scss";

const Error = () => {
  return (
    <div className="container">
      <h1 className="my-4"></h1>
      <iframe
        style={{ borderRadius: "12px", backgroundColor: "red !important" }}
        src="https://open.spotify.com/embed/track/6Wehv77PezqwbcY5fAdkoz?utm_source=generator&theme=0"
        width="100%"
        height="352"
        frameBorder="0"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Error;
