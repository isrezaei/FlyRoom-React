import React from "react";
import FakerData from "../Faker/Faker-Data";
import UserSetInfo from "./User-Set-Info";

export default function MapInFakerData({Avatar , OpenChatArea})
{
    const MapInData = FakerData().map( (value , index)=> {
            return <UserSetInfo
                    key={index}
                    Value={value}
                    OpenChatArea_InResponsive={OpenChatArea}/>

        }
    )

    return(
        <div className='Parent-Users'>{MapInData}</div>
    )
}