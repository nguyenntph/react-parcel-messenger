import React, { Fragment } from "react";
import Header from "./Header";
import Conversation from "./Conversation";
import Profile from "./Profile";

const Chatbox = () => (
  <Fragment>
    <div className="p-3">
      <Header />
    </div>
    <div className="border-t flex">
      <div className="w-2/3">
        <Conversation />
      </div>
      <div className="w-1/3 border-l">
        <Profile />
      </div>
    </div>
  </Fragment>
);

export default Chatbox;
