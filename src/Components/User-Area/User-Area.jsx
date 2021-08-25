import React , {useState , useEffect} from "react";
import FakerData from "../Faker/Faker";
import UsersInfo from "./UsersInfo";

export default function UserArea({Avatar})
{
    const [Faker , SetFaker] = useState()


    useEffect(()=>{

        SetFaker(FakerData)

    } , [])



   const User = FakerData().map( (value , index)=> {
        return <UsersInfo key={index} Value={value} Avatar={Avatar}/>
    })



    console.log(Faker)

    return (
        <div className='User-Area'>

            <div className='Groups'></div>
            <div className='Parent-Users'>{User}</div>


        </div>
    )
}