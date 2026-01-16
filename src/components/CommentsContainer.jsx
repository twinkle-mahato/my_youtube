import React from "react";
import { USER_ICON } from "../utils/constants";

const commentsData = [
  {
    name: "Akshay Saini",
    text: "This video explained recursion really well 🔥",
    replies: [
      {
        name: "Twinkle",
        text: "Agree! The example made it super clear.",
        replies: [
          {
            name: "Rohit",
            text: "Same here. Took me a while to get it though 😅",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Neha Sharma",
    text: "Can someone explain why we need keys in React?",
    replies: [
      {
        name: "Akshay Saini",
        text: "Keys help React identify which items changed.",
        replies: [
          {
            name: "Rahul",
            text: "Exactly, without keys React re-renders inefficiently.",
            replies: [
              {
                name: "Neha Sharma",
                text: "Got it now 👍 Thanks!",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Aman Verma",
    text: "Tailwind borders confused me at first 😐",
    replies: [
      {
        name: "Pooja",
        text: "Same! border-l needs width too.",
        replies: [
          {
            name: "Aman Verma",
            text: "Yeah border-l-2 finally fixed it.",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Sneha Patel",
    text: "Anyone building the YouTube clone along with this?",
    replies: [
      {
        name: "Twinkle",
        text: "Yes 🙋‍♀️ almost done with comments section!",
        replies: [
          {
            name: "Sneha Patel",
            text: "Nice! Drop the GitHub link when ready 🚀",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Ravi Kumar",
    text: "This comment has no replies but still should render clean.",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-3">
      <img alt="user" src={USER_ICON} className="w-12 h-12 rounded-full" />
      <div className="px-3">
        <p className="font-semibold">{name}</p>
        <p>{text}</p>
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
      <div className="pl-5 border-l border-black ml-5">
        {/* Replies */}
        <CommentsList comments={comment.replies} />
      </div>
        )}
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
