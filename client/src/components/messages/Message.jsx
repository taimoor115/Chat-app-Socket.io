import React from "react";
import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utils/extractTime";
import useConversation from "../../zustand/useConversation";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const isMe = authUser._id === message.senderId;
  const formatedTime = extractTime(message?.createdAt);
  const profilePic = isMe
    ? authUser.profilePic
    : selectedConversation.profilePic;
  const chatClassName = isMe ? "chat-end" : "chat-start";
  const bubbleBgColor = isMe ? "bg-blue-500" : "";
  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS chat bubble component" src={profilePic} />
        </div>
      </div>
      <div
        className={`chat-bubble text-white  ${bubbleBgColor} pb-2 ${"shakeClass"} pb-2`}
      >
        {message.message}
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1  items-center">
        {formatedTime}
      </div>
    </div>
  );
};

export default Message;