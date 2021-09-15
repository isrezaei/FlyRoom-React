import React from "react";

export default function HeaderNameAvatar()
{
    //Hard Code
    return (
        <div className='Header-Avatar'>
            <div className='Avatar'>
                <img/>
            </div>
            <div className='Name-StatusType'>
                <p className='Name'>Ollie Chandler</p>
                <p className='Status'>Last Seen Recently</p>
            </div>
        </div>
    )
}