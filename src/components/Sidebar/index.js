import React, { Fragment } from "react";
import Header from "./Header";
import FriendList from "./FriendList";

const Sidebar = () => (
  <Fragment>
    <Header></Header>
    <FriendList></FriendList>
  </Fragment>
);

export default Sidebar;
