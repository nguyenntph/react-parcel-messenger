import React from "react";
import Avatar from "../User/Avatar";

const Friend = ({ friend, switchConversation, active }) => (
  <div
    onClick={() => switchConversation(friend)}
    className={`flex items-center p-3 cursor-pointer ${
      active ? "bg-gray-200 rounded-lg" : ""
    }`}
  >
    <Avatar url={friend.avatar}></Avatar>
    <div className="pl-3 w-full">
      <p className="font-semibold">{friend.username}</p>
      <div className="flex justify-between">
        <p>{friend.lastMessage}</p>
        {friend.lastMessage && <sub>11:00 AM</sub>}
      </div>
    </div>
  </div>
);

export default Friend;
