import React from "react";
import Avatar from "../User/Avatar";

const Message = ({ content, user, isAuthor }) => (
  <div className={`flex items-center ${isAuthor ? "flex-row-reverse" : "flex-row"}`}>
    <Avatar url={user.avatar} width={25} height={25} className="mr-2" />
    <div
      className={`p-3 rounded-full m-2 ${
        isAuthor ? "bg-blue-600 text-white" : "bg-gray-200"
      }`}
    >
      <p>{content}</p>
    </div>
  </div>
);

export default Message;
