import React from "react";
import {HiOutlinePhone} from "react-icons/hi";

export default function Phone()
{
    return (
        <div className='Phone'>
            <div className='Title-Panel'>
                <h1>Phone</h1>
                <p>1-800-275-2273</p>
            </div>
            <div className='Logo-Panel'>
                <HiOutlinePhone className={'Icone'}/>
            </div>
        </div>
    )
}