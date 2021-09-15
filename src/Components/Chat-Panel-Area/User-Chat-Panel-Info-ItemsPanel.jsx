import React from "react";

export default function UserChatPanelInfoItemsPanel ({stylePanelIcon , Files , Media , GetActiveToFiles , GetActiveToProfile , Profile , GetActiveToMedia})
{
    return(
        <div style={stylePanelIcon}  className='Profile-Media-Files'>

            <img className='Image-Profile'/>
            <p className='Name-Profile'>Ollie Chandler</p>
            <div className='Item-Profile'>
                <p onClick={GetActiveToProfile} ref={Profile} className='Active'>Profile</p>
                <p onClick={GetActiveToMedia} ref={Media}>Media</p>
                <p onClick={GetActiveToFiles} ref={Files}>Files</p>
            </div>
        </div>
    )
}