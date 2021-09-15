import React from "react";
import Phone from "./Phone";
import Loaction from "./Loaction";
import Email from "./Email";
import Notifications from "./Notifications";

export default function ForProfile({stylePanelIcon , FriendProfile})
{
    return(
        <div style={stylePanelIcon} ref={FriendProfile} className='Friend-Profile'>
            <Phone/>
            <Loaction/>
            <Email/>
            <Notifications/>
        </div>
    )
}