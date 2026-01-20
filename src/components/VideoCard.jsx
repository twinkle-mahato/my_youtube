import React from "react";
import { Link } from "react-router";

const VideoCard = ({ info }) => {
  if (!info) return null;
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  const videoId = typeof info.id === "string" ? info.id : info.id.videoId;
  return (
    <Link to={"/watch?v=" + videoId}>
      <div className="p-2 md:m-3 md:w-72 shadow-lg rounded-lg hover:bg-gray-100 cursor-pointer h-full flex flex-col md:hover:scale-[1.03] transition-transform duration-200">
        <img
          alt="thumbnails"
          src={thumbnails?.high?.url}
          className="rounded-lg w-full aspect-video object-cover"
        />
        <ul className="md:mt-2">
          <li className="font-semibold text-sm line-clamp-2">{title}</li>
          <li className="text-gray-600 text-sm">{channelTitle}</li>
          <li className="text-gray-600 text-xs">
            {Number(statistics?.viewCount).toLocaleString()} views
          </li>
        </ul>
      </div>
    </Link>
  );
};

//  AdVideoCard is a higher order component
export const AdVideoCard = ({ info }) => {
  return (
    <div className=" relative border border-red-900 rounded-xl overflow-hidden m-2 ">
      {/* Label it as an AD */}
      <span className="absolute top-2 left-2 bg-yellow-400 text-[10px] font-bold px-1 rounded z-10 shadow-sm">
        AD
      </span>
      <VideoCard info={info} />
    </div>
  );
};
export default VideoCard;
