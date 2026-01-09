import React from "react";
import Button from "./Button";


const list = [
  "All",
  "Live",
  "Song",
  "Dancing",
  "Cooking",
  "Gaming",
  "Cricket",
  "Soccer",
  "News",
  "Drawing",
  "Movies",
  "Motivation",
  "Lessons",
  "Love Songs",
  "Movie Music",
  "Pop Music"
];

const ButtonList = () => {
  return (
    <div className="flex px-4 py-2 overflow-x-auto scrollbar-hide whitespace-nowrap">
      {list.map((button) => (
        <Button key={button} name={button} />
      ))}
    </div>
  );
};

export default ButtonList;
