import React , {useState , useEffect} from "react";
import FakerData from "../Faker/Faker-Data";
import UserInfo from "./User-Info";

export default function UserArea({Avatar})
{

   const User = FakerData().map( (value , index)=> {
        return <UserInfo key={index} Value={value} Avatar={Avatar}/>
    })

    return (
        <div className='User-Area'>

            <div className='User-Search'>


                <div className='Chats'>
                    <p>Chats</p>
                </div>

                <div className='Input-Search'>
                    <img src="https://img.icons8.com/ios/100/000000/search--v1.png"/>
                    <input placeholder='Search messages or users'/>
                </div>

            </div>


            <div className='Parent-Users'>{User}</div>
        </div>
    )
}