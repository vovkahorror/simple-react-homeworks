import React from "react";
import Message from "./Message";

const messageData = {
  avatar:
    "https://i.pinimg.com/564x/cc/41/db/cc41db184fa101984b8d7351f81709b4.jpg",
  name: "Artem",
  message: "npm start нажимал?",
  time: "20:00",
};

function HW1() {
  return (
    <div>
      <hr />
      homeworks 1{/*should work (должно работать)*/}
      <Message
        avatar={messageData.avatar}
        name={messageData.name}
        message={messageData.message}
        time={messageData.time}
      />
      <hr />
      {/*для личного творчества, могу проверить*/}
      {/*<AlternativeMessage/>*/}
      <hr />
    </div>
  );
}

export default HW1;
