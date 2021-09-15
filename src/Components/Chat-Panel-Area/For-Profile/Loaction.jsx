import React from "react";
import {HiOutlineLocationMarker, HiOutlinePhone} from "react-icons/hi";

export default function Loaction()
{
    return (
        <div className='Loaction'>
            <div className='Title-Panel'>
                <h1>Location</h1>
                <p>USA, Houston</p>
            </div>
            <div className='Logo-Panel'>
                <HiOutlineLocationMarker className={'Icone'}/>
            </div>
        </div>
    )
}