import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Form = ({ submit }) => (
  <form
    onSubmit={submit}
    className="flex h-20 absolute inset-x-0 px-1 justify-between"
    style={{ bottom: 40 }}
  >
    <div>
      <button className="w-8 h-8 mx-1 text-blue-500">
        <FontAwesomeIcon icon="plus" />
      </button>
      <button className="w-8 h-8 mx-1 text-blue-500">
        <FontAwesomeIcon icon="edit" />
      </button>
      <button className="w-8 h-8 mx-1 text-blue-500">
        <FontAwesomeIcon icon="file" />
      </button>
      <button className="w-8 h-8 mx-1 text-blue-500">
        <FontAwesomeIcon icon="video" />
      </button>
    </div>
    <input
      type="text"
      className="bg-gray-200 rounded-full h-8 p-3 flex-grow"
      placeholder="Type a message ..."
    />
    <button className="w-8 h-8 mx-1 text-blue-500 text-xl" type="submit">
      <FontAwesomeIcon icon="paper-plane" />
    </button>
  </form>
);

export default Form;
