import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatslice";
import { generateRandomnames, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();

  const chatMessages = useSelector((state) => state.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      //API Pooling
      //console.log("API Pooling");

      dispatch(
        addMessage({
          name: generateRandomnames(),
          message: makeRandomMessage(20) + "🚀",
        })
      );
    }, 1500);
    return () => clearInterval(i);
  }, []);

  return (
    <>
      {/* Chat Messages */}
      <div className="w-full h-[600px] ml-2 border border-black bg-white rounded-lg overflow-y-scroll flex flex-col-reverse scrollbar-hide">
        <div>
          {chatMessages.map((chat, index) => (
            <ChatMessage key={index} name={chat.name} message={chat.message} />
          ))}
        </div>
      </div>

      {/* Chat Input */}
      <form
        className="flex items-center gap-2 p-2 border-t border-gray-300"
        onSubmit={(e) => {
          e.preventDefault();
          console.log("ON Form Submit", liveMessage);
          dispatch(
            addMessage({
              name: "Akshay Saini",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          className="w-[95%] px-3 py-1 border rounded-lg text-sm outline-none"
          type="text"
          placeholder="Chat..."
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="px-4 py-1 bg-blue-500 text-white rounded-lg text-sm">
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
