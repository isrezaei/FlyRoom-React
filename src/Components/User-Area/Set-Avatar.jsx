import React from "react";

export default function SetAvatar({Profile})
{
    return(
        <div className='Avatar'>
            <img src={Profile}/>
        </div>
    )
}