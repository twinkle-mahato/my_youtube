import React from "react";

const VideoCard = ({ info }) => {
  console.log(info);
  if (!info) return null;
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="p-2 m-3 w-72 shadow-lg rounded-lg hover:bg-gray-100 cursor-pointer h-full flex flex-col hover:scale-[1.02] transition-transform duration-200">
      <img
        alt="thumbnails"
        src={thumbnails?.high?.url}
        className="rounded-lg w-full aspect-video object-cover"
      />
      <ul className="mt-2">
        <li className="font-semibold text-sm line-clamp-2">{title}</li>
        <li className="text-gray-600 text-sm">{channelTitle}</li>
        <li className="text-gray-600 text-xs">
          {Number(statistics?.viewCount).toLocaleString()} views
        </li>
      </ul>
    </div>
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
