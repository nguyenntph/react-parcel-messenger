import React from "react";
import Avatar from "../User/Avatar";

const Friend = ({ friend, switchConversation }) => (
  <div
    onClick={() => switchConversation(friend)}
    className="flex items-center py-3 cursor-pointer"
  >
    <Avatar url={friend.avatar}></Avatar>
    <div className="pl-3 w-full">
      <p className="font-semibold">{friend.username}</p>
      <div className="flex justify-between">
        <p>Last message</p>
        <sub>11:00 AM</sub>
      </div>
    </div>
  </div>
);

export default Friend;
