import React from "react";
import data from "../../../data/friends.json";
import SearchBar from "./SearchBar";
import Friend from "./Friend";

const FriendList = ({ switchConversation }) => (
  <div className="overflow-y-auto h-full p-3 pt-0">
    <SearchBar />
    {data["friends"].map(friend => (
      <Friend key={friend.id} friend={friend} switchConversation={switchConversation} />
    ))}
  </div>
);

export default FriendList;
