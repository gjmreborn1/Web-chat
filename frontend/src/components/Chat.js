import React from "react";
import "./styles/Chat.css";
import { Redirect } from "react-router-dom";

const Chat = () => {
    if(localStorage.getItem("jwt") === null) {
        return <Redirect to="/" />;
    }

    return (
        <div className="Chat">

        </div>
    )
};

export default Chat;
