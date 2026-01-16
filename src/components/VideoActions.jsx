import React, { useState } from "react";

const VideoActions = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [liked, setLiked] = useState(null); // null | true | false
  const [likesCount, setLikesCount] = useState(1200);

  const handleLike = () => {
    if (liked === true) return;
    setLiked(true);
    setLikesCount((prev) => prev + (liked === false ? 2 : 1));
  };

  const handleUnlike = () => {
    if (liked === false) return;
    setLiked(false);
    setLikesCount((prev) => prev - (liked === true ? 2 : 1));
  };

  return (
    <div className="flex items-center justify-between mt-3">
      {/* Left - Subscribe */}
      <div>
        <button
          onClick={() => setIsSubscribed(!isSubscribed)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition 
            ${
              isSubscribed
                ? "bg-gray-200 text-black"
                : "bg-black text-white"
            }`}
        >
          {isSubscribed ? "Subscribed" : "Subscribe"}
        </button>
      </div>

      {/* Right - Like / Unlike */}
      <div className="flex items-center gap-2">
        <button
          onClick={handleLike}
          className={`px-3 py-2 rounded-full border text-sm flex items-center gap-1
            ${liked === true ? "bg-blue-100 border-blue-400" : ""}`}
        >
          👍 {likesCount}
        </button>

        <button
          onClick={handleUnlike}
          className={`px-3 py-2 rounded-full border text-sm
            ${liked === false ? "bg-red-100 border-red-400" : ""}`}
        >
          👎
        </button>
      </div>
    </div>
  );
};

export default VideoActions;
