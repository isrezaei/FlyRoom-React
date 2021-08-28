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

            <div className='Groups'></div>
            <div className='Parent-Users'>{User}</div>
        </div>
    )
}