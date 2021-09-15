import React from "react";

export default function HeaderUserInChatInfo({RefGoHome , OpenPanel , CloseChatArea})
{
    return (
        <div className= 'Header-Sender-and-Reciver-Avatar-Info'>
            <div className='Sender-Recive-Avatar-Info'>
                <div ref={RefGoHome} onClick={CloseChatArea}>
                    <img className='BackToHome' src="https://img.icons8.com/fluency/96/000000/home.png"/>
                </div>
                <div onClick={OpenPanel} className='Click-To-Info'>
                    <img src="https://img.icons8.com/color/96/000000/information--v2.png"/>
                </div>
                <img className='Reciver'/>
                <img className='Sender'/>
            </div>
        </div>
    )
}