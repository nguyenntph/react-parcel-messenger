import React from "react";
import ReactDOM from "react-dom";
import Messenger from "./components/App";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faEdit,
  faVideo,
  faCog,
  faPhone,
  faInfoCircle,
  faChild,
  faAngleRight,
  faPlus,
  faPaperPlane,
  faFile
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faEdit,
  faVideo,
  faCog,
  faPhone,
  faInfoCircle,
  faAngleRight,
  faChild,
  faPlus,
  faPaperPlane,
  faFile
);

let App = document.getElementById("app");

ReactDOM.render(<Messenger />, App);
