import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Setting = ({ name }) => (
  <Fragment>
    <div className="flex justify-between p-3 border-t font-bold text-gray-500 hover:bg-gray-200 cursor-pointer">
      {name}
      <FontAwesomeIcon icon="angle-right" />
    </div>
  </Fragment>
);

export default Setting;
