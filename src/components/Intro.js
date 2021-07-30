import React from "react";

const Intro = () => {
  const introStyle = {
    width: "100vw",
    height: "100vh",
  };

  return (
    <div
      style={introStyle}
      className="text-center d-flex justify-content-center align-items-center vw-100 vh-100"
      id="intro"
    >
      <div style={{paddingLeft:"15%",paddingRight:"15%"}}>
        <h2>Hi, I’m Meet. Nice to meet &#129309; you.</h2>
        <p>
          I am pursuing my bachlor's and learning everything that i can. I build interactive websites that
          run across platforms & devices. I want to make things that make a difference. Focussed on creative interactions & animations.
        </p>
      </div>
    </div>
  );
};

export default Intro;
