import React from "react";

import onlineIcon from "../Icons/onlineIcon.png";

import "./textcontainer.css";

const TextContainer = ({ roomData: { room, users } }) => (
  <div className="textContainer">
    <div>
      <h1>
        Realtime Chat Application{" "}
        <span role="img" aria-label="emoji">
          💭
        </span>
      </h1>
      <h2>
        Created with react, node, express and socket.io{" "}
        <span role="img" aria-label="emoji">
          ❤
        </span>
      </h2>
      <h2>
        try it out now!{" "}
        <span role="img" aria-label="emoji">
          ⬅
        </span>
      </h2>
    </div>
    {users && (
      <div>
        <h1>People currently chatting:</h1>
        <div className="activeContainer">
          <h2>
            {users.map((user, index) => (
              <div key={index} className="activeItem">
                {user.name}
                <img alt="online-icon" src={onlineIcon} />
              </div>
            ))}
          </h2>
        </div>
      </div>
    )}
  </div>
);

export default TextContainer;
