import React, { useEffect, useState } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import InfoBar from "../InfoBar/InfoBar";
import Messages from "../Messages/Messages";
import Input from "../Input/Input";
import TextContainer from "../TextContainer/TextContainer";

import "./chat.css";

let socket;
// const connectionOptions = {
//   "force new connection": true,
//   reconnectionAttempts: "Infinity",
//   timeout: 10000,
//   transports: ["websocket", "polling", "flashsocket"],
// };

const Chat = ({ location, history }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [roomData, setRoomData] = useState([]);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const ENDPOINT = "http://localhost:5000";

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setName(name);
    setRoom(room);

    socket.emit("join", { name, room }, (error) => {
      if (error) {
        history.push("/");
        alert(error);
      }
    });

    return () => {
      socket.emit("disconnect");

      socket.off();
    };
  }, [location, ENDPOINT, history]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });

    socket.on("roomData", (roomData) => {
      setRoomData(roomData);
    });
  }, [messages]);

  // function for sending messages
  const sendMessage = (e) => {
    e.preventDefault();

    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  return (
    <div className="outerContainer">
      <div className="container">
        <InfoBar room={room} />
        <Messages messages={messages} name={name} />
        <Input
          message={message}
          sendMessage={sendMessage}
          setMessage={setMessage}
        />
      </div>
      <TextContainer roomData={roomData} />
    </div>
  );
};

export default Chat;
