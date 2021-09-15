import React from "react";
import LeftRightChat from "./Left&Right-Chat";

export default function ScrollBlock ({RefBodyChat , RefBodyMessage , HandeleScroll , MessageLenght , SendMessage})
{
    return (
        <div onScroll={HandeleScroll} ref={RefBodyChat} className='Parent-Chats'>
            {MessageLenght && RefBodyMessage && <LeftRightChat RefBodyMessage={RefBodyMessage} MessageLenght={MessageLenght} SendMessage={SendMessage}/>}
        </div>
    )
}