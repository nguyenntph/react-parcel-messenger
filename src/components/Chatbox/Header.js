import React from "react";
import Avatar from "../User/Avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = ({ username, avatar }) => (
  <div className="flex itesms-center justify-between px-2">
    <div className="flex items-center">
      <Avatar url={avatar} />
      <div className="ml-3">
        <h1
          className="font-black text-md text-black leading-none"
          style={{ fontFamily: "Helvetica Neue" }}
        >
          {username}
        </h1>
        <sub>Active 12m ago</sub>
      </div>
    </div>
    <div>
      <button className="w-10 h-10 text-blue-500 text-xl">
        <FontAwesomeIcon icon="phone" />
      </button>
      <button className="w-10 h-10 text-blue-500 text-xl">
        <FontAwesomeIcon icon="video" />
      </button>
      <button className="w-10 h-10 text-blue-500 text-xl">
        <FontAwesomeIcon icon="info-circle" />
      </button>
    </div>
  </div>
);

export default Header;
