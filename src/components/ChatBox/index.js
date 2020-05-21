import React, { Fragment } from "react";
import Header from "./Header";
import Conversation from "./Conversation";
import Profile from "./Profile";

const Chatbox = currentFriend => (
  <Fragment>
    <div className="p-3">
      <Header {...currentFriend} />
    </div>
    <div className="border-t flex h-full">
      <div className="w-2/3">
        <Conversation {...currentFriend} />
      </div>
      <div className="w-1/3 border-l">
        <Profile {...currentFriend} />
      </div>
    </div>
  </Fragment>
);

export default Chatbox;
