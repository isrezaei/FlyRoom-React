import React from "react";
import ShareLogo from "../../../Images/Icons/icons8-clapperboard.gif";

export default function ForMedia({stylePanelIcon , FriendMedia})
{
    return (
        <div style={stylePanelIcon} ref={FriendMedia} className={'Friend-Media'}>
            <img src={ShareLogo}/>
            <p>has not yet shared</p>
        </div>
    )
}