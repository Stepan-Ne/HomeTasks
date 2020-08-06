import React from "react";
import s from './Message.module.css'

type PropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: PropsType) {
    return (
            <div className={s.message}>
                <div>
                    <img src={props.avatar} alt="Avatar"/>
                </div>

                <div className={s.text}>
                    <p>{props.name}</p>
                    <p>{props.message}</p>
                    <span className={s.time}>{props.time}</span>
                </div>

            </div>
    );
}

export default Message;
