import React from "react";
import {BsPencilSquare} from "react-icons/bs";
import {FiUsers} from "react-icons/fi";
import {BiMessageSquareDetail} from "react-icons/bi";
import {RiNotification3Line, RiSettingsLine} from "react-icons/ri";

export default function Icons({OpenSettingPanel})
{
    return(
        <div className='Item'>
            <div className='Write'>
                <BsPencilSquare className={'Icone'}/>
            </div>

            <div className='People'>
                <FiUsers className={'Icone'}/>
            </div>

            <div className='Message'>
                <BiMessageSquareDetail className={'Icone'}/>
            </div>

            <div className='Alert'>
                <RiNotification3Line className={'Icone'}/>
            </div>

            <div onClick={OpenSettingPanel} className='Setting'>
                <RiSettingsLine className={'Icone'}/>
            </div>
        </div>
    )
}