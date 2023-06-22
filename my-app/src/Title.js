import React, { useState } from "react";

export default function Title({message, onGetData}){

    const [newMessage, setNewMessage] = useState("new Message입니다");

    onGetData(newMessage);

    return <h2 id="title">{message}</h2>
}