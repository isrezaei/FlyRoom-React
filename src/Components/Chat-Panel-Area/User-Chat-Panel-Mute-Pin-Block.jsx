import React from "react";
import {BiVolumeMute} from "react-icons/bi";
import {TiPinOutline} from "react-icons/ti";
import {CgBlock} from "react-icons/cg";

export default function UserChatPanelMutePinBlock({OpenDots , FriendsDots})
{
    return (
        <div style={OpenDots} ref={FriendsDots} className='Friends-Dots'>

            <div className='DotsStyle'>
                <p>Mute</p>
                <BiVolumeMute className={'Icons'}/>
            </div>
            <div className='DotsStyle'>
                <p>Pin</p>
                <TiPinOutline className={'Icons'}/>
            </div>
            <div className='Block'>
                <p>Block</p>
                <CgBlock className={'Icons'}/>
            </div>

        </div>
    )
}