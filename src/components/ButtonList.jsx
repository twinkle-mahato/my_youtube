import React, { useRef } from "react";
import Button from "./Button";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

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
  "Pop Music",
];

const ButtonList = () => {
  const scrollRef = useRef(null);

  // move left
  const slideLeft = () => {
    scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };

  // move right
  const slideRight = () => {
    scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };
  return (
    <div className="flex md:px-4 md:py-2 items-center relative">
      {/* Left Arrow */}
      <MdChevronLeft onClick={slideLeft} className=" text-sm md:text-3xl cursor-pointer" />

      {/* Buttons */}
      <div
        ref={scrollRef}
        className="  text-sm md:text-base p-0.5 md:p-0 flex overflow-x-auto whitespace-nowrap scrollbar-hide"
      >
        {list.map((button) => (
          <Button key={button} name={button} />
        ))}
      </div>
      {/* Right Arrow */}
      <MdChevronRight
        onClick={slideRight}
        className=" text-sm md:text-3xl cursor-pointer"
      />
    </div>
  );
};

export default ButtonList;
