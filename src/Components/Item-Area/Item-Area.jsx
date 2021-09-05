import React from "react";
import { BsPencilSquare } from 'react-icons/bs';

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
                        <BsPencilSquare/>
                    </div>
                    <div className='People'>
                        <img src="https://img.icons8.com/ios/50/000000/user-group-man-man.png"/>
                    </div>
                    <div className='Message'>
                        <img src="https://img.icons8.com/ios/100/000000/message-group.png"/>
                    </div>
                    <div className='Alert'>
                        <img src="https://img.icons8.com/ios/50/000000/alarm.png"/>
                    </div>

                    <div className='Setting'>
                        <img src="https://img.icons8.com/ios/100/000000/settings.png"/>
                    </div>

                </div>

                <div className='MyProfile'>
                    <img/>
                </div>


            </div>



        </div>
    )
}
