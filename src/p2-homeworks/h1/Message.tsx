import React from "react";
import s from "./Message.module.css";

type MessageType = {
  avatar: string;
  name: string;
  message: string;
  time: string;
};

function Message(props: MessageType) {
  return (
    <div className={s.message}>
      <div
        className={s.message__avatar}
        style={{
          backgroundImage: `url(${props.avatar})`,
        }}
      ></div>
      <div className={s.message__content}>
        <div className={s.message__name}>{props.name}</div>
        <div className={s.message__text}>{props.message}</div>
        <div className={s.message__time}>{props.time}</div>
      </div>
    </div>
  );
}

export default Message;
