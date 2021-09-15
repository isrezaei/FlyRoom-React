import React from "react";
import ForProfile from "./For-Profile/#For-Profile";
import ForMedia from "./For-Media/#For-Media";
import ForFiles from "./For-Files/#For-Files";

export default function UserChatPanelOptions({stylePanelIcon , FriendFile , FriendMedia , FriendProfile})
{
    return (
        <>
            {/*For-Profile*/}
            <ForProfile stylePanelIcon={stylePanelIcon} FriendProfile={FriendProfile}/>

            {/*For-Media*/}
            <ForMedia stylePanelIcon={stylePanelIcon}  FriendMedia={FriendMedia} />

            {/*For-Files*/}
            <ForFiles stylePanelIcon={stylePanelIcon} FriendFile={FriendFile}/>
        </>
    )
}