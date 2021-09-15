import React from "react";
import HeaderNameAvatar from "./Header-Name&Avatar";
import HeaderUserInChatInfo from "./Header-User-In-Chat-Info";

export default function HeaderChatArea({RefGoHome , OpenPanel , CloseChatArea})
{
    return (
        <div className='Header-Chat'>
            <HeaderNameAvatar/>
            <HeaderUserInChatInfo
                RefGoHome={RefGoHome}
                OpenPanel={OpenPanel}
                CloseChatArea={CloseChatArea}/>
        </div>
    )
}