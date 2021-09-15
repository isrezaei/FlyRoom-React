import React from "react";
import {HiOutlineMail, HiOutlinePhone} from "react-icons/hi";

export default function Email()
{
    return (
        <div className='Email'>
            <div className='Title-Panel'>
                <h1>E-mail</h1>
                <p>chandler@ollie.com</p>
            </div>
            <div className='Logo-Panel'>
                <HiOutlineMail className={'Icone'}/>
            </div>
        </div>
    )
}