import React from "react";

const Avatar = ({ url, className, width = 50, height = 50, ...others }) => (
  <img
    src={url}
    className={`${className} rounded-full`}
    width={width}
    height={height}
    {...others}
  />
);

export default Avatar;
