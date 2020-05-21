import React from "react";
import Header from "./Header";
import FriendList from "./FriendList";

const Sidebar = ({ switchConversation, currentFriend }) => (
  <div className="h-full px-3">
    <Header />
    <FriendList switchConversation={switchConversation} currentFriend={currentFriend} />
  </div>
);

export default Sidebar;
