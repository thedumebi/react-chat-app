import React from "react";

import Message from "./Message/Message";

import "./messages.css";

const Messages = ({ messages, name }) => {
  const scrollHeight = () => {
    const chatMessages = document.getElementById("chat-messages");
    chatMessages.scrollTop = chatMessages.scrollHeight;
  };

  return (
    <div id="chat-messages" className="messages">
      {messages.map((message, index) => (
        <div key={index}>
          <Message message={message} name={name} />
          {scrollHeight()}
        </div>
      ))}
    </div>
  );
};

export default Messages;
