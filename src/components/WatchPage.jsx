import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import { YOUTUBE_VIDEOS_BY_ID_API } from "../utils/constants";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  //console.log(searchParams.get("v"));
  const videoId = searchParams.get("v");

  const [videoInfo, setVideoInfo] = useState(null); // store video data
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);

  useEffect(() => {
    const fetchVideoInfo = async () => {
      try {
        const response = await fetch(
          `${YOUTUBE_VIDEOS_BY_ID_API}&id=${videoId}`,
        );
        const data = await response.json();
        if (data.items && data.items.length > 0) {
          setVideoInfo(data.items[0].snippet); // get title, channel, etc.
        }
      } catch (error) {
        console.error("Error fetching video info:", error);
      }
    };

    if (videoId) fetchVideoInfo();
  }, [videoId]);

  if (!videoInfo)
    return <div className="font-bold text-xl px-4 py-4">Loading...</div>;

  return (
    <div className="flex flex-col w-full px-2 py-2">
      <div className=" px-1 md:px-5 flex">
        <div className="flex flex-col md:w-3/4">
          <iframe
            className="rounded-lg aspect-video overflow-hideen h-47 md:h-155"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=1&rel=0&modestbranding=1&iv_load_policy=3`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>

          {/* Video Title & Like/Dislike */}
          <div className=" px-3 mt-4 w-full">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3 mb-4">
              <h1 className="text-sm lg:text-3xl font-bold text-gray-900 leading-snug wrap-break-words">
                {videoInfo.title}
              </h1>
            </div>
            <p className="text-gray-700 text-sm sm:text-base lg:text-base line-clamp-4 whitespace-pre-line">
              {videoInfo.description}
            </p>
          </div>
        </div>

        <div className="hidden md:block md:w-1/2">
          <LiveChat />
        </div>
      </div>
      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
