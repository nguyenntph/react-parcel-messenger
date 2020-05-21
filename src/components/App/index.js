import React, { useState } from "react";
import Sidebar from "../Sidebar";
import Chatbox from "../Chatbox";

const App = () => {
  const [currentFriend, switchConversation] = useState({});

  return (
    <div className="flex h-screen">
      <div className="w-1/4 border-r">
        <Sidebar switchConversation={switchConversation} />
      </div>
      <div className="w-3/4">
        <Chatbox currentFriend={currentFriend} />
      </div>
    </div>
  );
};

export default App;
