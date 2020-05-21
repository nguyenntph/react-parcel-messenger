import React from "react";
import Avatar from "../User/Avatar";
import currentUser from "../../../data/settings.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => (
  <div className="flex itesms-center justify-between p-3">
    <div className="flex items-center">
      <Avatar url={currentUser["avatar"]} />
      <h1
        className="font-black text-2xl ml-2 text-black"
        style={{ fontFamily: "Helvetica Neue" }}
      >
        Chats
      </h1>
    </div>
    <div>
      <button className="rounded-full w-10 h-10 bg-gray-200 mx-1">
        <FontAwesomeIcon icon="cog" />
      </button>
      <button className="rounded-full w-10 h-10 bg-gray-200 mx-1">
        <FontAwesomeIcon icon="video" />
      </button>
      <button className="rounded-full w-10 h-10 bg-gray-200 mx-1">
        <FontAwesomeIcon icon="edit" />
      </button>
    </div>
  </div>
);

export default Header;
