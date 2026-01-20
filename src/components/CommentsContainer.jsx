import React from "react";
import { USER_ICON } from "../utils/constants";

const commentsData = [
  {
    name: "User123",
    text: "Great video 👍",
    replies: [],
  },
  {
    name: "Ankit",
    text: "Really enjoyed watching this!",
    replies: [
      {
        name: "Riya",
        text: "Same here 😊",
        replies: [],
      },
    ],
  },
  {
    name: "Karan",
    text: "Thanks for sharing 🙌",
    replies: [],
  },
  {
    name: "Priya",
    text: "Very helpful and well explained 👌",
    replies: [
      {
        name: "Creator",
        text: "Glad it helped 🙂",
        replies: [],
      },
    ],
  },
  {
    name: "Aman",
    text: "Watching this again 🔁",
    replies: [],
  },
  {
    name: "Sneha",
    text: "Quality content as always 🔥",
    replies: [],
  },
  {
    name: "Rahul",
    text: "This deserves more views 🚀",
    replies: [],
  },
];



const Comment = ({ data }) => {
  const { name, text} = data;
  return (
    <div className="flex shadow-sm md:p-2 rounded-lg my-3">
      <img alt="user" src={USER_ICON} className="w-5 md:w-12 h-5 md:h-12 rounded-full" />
      <div className="px-3">
        <p className=" text-sm md:text-base font-semibold">{name}</p>
        <p className="text-sm md:text-base">{text}</p>
        <button className="text-xs text-blue-600 mt-1 hover:underline">
          Reply
        </button>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      {/* for single comment */}
      <Comment data={comment} />
        {comment.replies.length > 0 && (
      <div className=" pl-2 md:pl-5 border-l border-black ml-2 md:ml-5">
        {/* Replies */}
        <CommentsList comments={comment.replies} />
      </div>
        )}
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="md:m-5 p-2">
      <h1 className=" text-lg md:text-2xl font-bold">Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
