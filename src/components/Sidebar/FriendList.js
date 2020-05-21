import React from "react";
import data from "../../../data/friends.json";
import SearchBar from "./SearchBar";
import Friend from "./Friend";

const FriendList = ({ currentFriend, switchConversation }) => (
  <div className="overflow-y-auto h-full pt-0">
    <SearchBar />
    {data["friends"].map(friend => (
      <Friend
        key={friend.id}
        friend={friend}
        switchConversation={switchConversation}
        active={currentFriend["id"] == friend.id}
      />
    ))}
  </div>
);

export default FriendList;
