import React from "react";
import FileLogo from "../../../Images/Icons/icons8-add-folder.gif";

export default function ForFiles({stylePanelIcon , FriendFile})
{
    return (
        <div style={stylePanelIcon} ref={FriendFile} className={'Friend-File'}>
            <img src={FileLogo}/>
            <p>has not yet shared</p>
        </div>
    )
}