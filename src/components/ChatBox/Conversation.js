import React, { useState, useEffect } from "react";
import { currentConversation, getUser } from "../../helpers/conversation";
import defaultUser from "../../../data/settings";
import Message from "./Message";
import Form from "./Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Conversation = currentUser => {
  const [conversation, setConversation] = useState();
  const [messages, setMessages] = useState();
  const saySomething = content => {
    if (!conversation) {
      setConversation({});
    }
    const newData = messages.concat([{ from: defaultUser.id, content: content }]);
    setMessages(newData);
  };

  useEffect(() => {
    const newConversation = currentConversation(currentUser);
    const newMessages = newConversation ? newConversation.messages : [];
    setConversation(newConversation);
    setMessages(newMessages);
  }, [currentUser]);

  const user = id => getUser(id);
  const isAuthor = id => defaultUser.id == id;

  return (
    <div className="px-5 py-3 relative h-full">
      {conversation ? (
        messages.map(message => (
          <Message
            content={message.content}
            user={user(message.from)}
            isAuthor={isAuthor(message.from)}
          />
        ))
      ) : (
        <div className="p-10 pt-20 text-center">
          <FontAwesomeIcon icon="child" className="text-lg" />
          <p>Start a conversation</p>
        </div>
      )}
      <Form submit={saySomething} />
    </div>
  );
};

export default Conversation;
