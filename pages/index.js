import React from "react";
import Lottie from "react-lottie";
import animationData from "../public/static/animation.json";

function Index() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <div className="main">
        <Lottie options={defaultOptions} height={400} width={500} />
        <h1  className="h1-1">We are currently working on our new website.</h1>
        <h1  className="h1-2">We&apos;ll be launching soon, subscribe to be notified.</h1>
        <h1 className="query">For any queries, please email at hello@houseofsingh.com</h1>
      </div>
    </>
  )
}

export default Index;
