import React, { useState } from "react";
import Sidebar from "../Sidebar";
import Chatbox from "../Chatbox";
import data from "../../../data/friends.json";

const DEFAULT_FRIEND = data.friends[0];

const App = () => {
  const [currentFriend, switchConversation] = useState(DEFAULT_FRIEND);

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="w-1/4 border-r">
        <Sidebar
          switchConversation={friend => switchConversation(friend)}
          currentFriend={currentFriend}
        />
      </div>
      <div className="w-3/4">
        <Chatbox {...currentFriend} />
      </div>
    </div>
  );
};

export default App;
