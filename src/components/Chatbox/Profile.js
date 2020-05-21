import React, { Fragment } from "react";
import Avatar from "../User/Avatar";
import Setting from "./Setting";

const SETTING_DATAS = [
  "Options",
  "Group",
  "People",
  "Privacy & Support",
  "Shared files",
  "Shared photos"
];

const Profile = ({ avatar, username }) => (
  <Fragment>
    <div className="text-center m-auto p-4">
      <Avatar url={avatar} className="m-auto" width={100} height={100} />
      <h1 className="font-bold text-md text-black mt-2 text-lg">{username}</h1>
      <sub>Active 12m ago</sub>
    </div>
    {SETTING_DATAS.map(value => (
      <Setting name={value} key={value} />
    ))}
  </Fragment>
);

export default Profile;
