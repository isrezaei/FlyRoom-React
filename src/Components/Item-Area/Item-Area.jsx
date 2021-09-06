import React from "react";
import { IconContext } from "react-icons" ;
import { BsPencilSquare } from 'react-icons/bs';
import {FiUsers} from 'react-icons/fi'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {RiNotification3Line} from 'react-icons/ri'
import {RiSettingsLine} from 'react-icons/ri'
import Write from '../../Images/Icons/pencil-938.svg'

export default function ItemArea()
{
    return (
        <div className='Item-Area'>

            <div className='ParentIcon'>

                <div className='Logo'>
                    <img src="https://img.icons8.com/fluency/96/000000/butterfly.png"/>
                </div>

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

                    <div className='Setting'>

                            <RiSettingsLine className={'Icone'}/>

                    </div>

                </div>

                <div className='MyProfile'>
                    <img/>
                </div>
            </div>
        </div>
    )
}
