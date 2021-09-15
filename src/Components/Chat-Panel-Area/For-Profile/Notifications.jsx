import React from "react";
export default function Notifications()
{
    return (
        <div className='Notifications'>
            <div className='Title-Panel'>
                <h1>Notifications</h1>
                <p>Enable sound notifications</p>
            </div>
            <div className='Logo-Panel'>
                <input type="checkbox" id="switch"/><label htmlFor="switch">Toggle</label>
            </div>
        </div>
    )
}