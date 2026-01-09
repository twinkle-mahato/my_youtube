import React from "react";
import ButtonList from "./ButtonList";
import VideoConatiner from "./VideoConatiner";

const MainContainer = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <ButtonList />
      <VideoConatiner />
    </div>
  );
};

export default MainContainer;
