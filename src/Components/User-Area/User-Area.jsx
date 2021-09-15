import React , {useEffect , useRef} from "react";
import HeaderSearchInUsers from "./Header-Search-In-Users";
import MapInFakerData from "./Map-In-Faker-Data";


export default function UserArea({Dark_UserArea , OpenChatArea})
{
    const UserArea = useRef()

    useEffect(()=>{

        //Set Ref of User Area for Dark Mood
        Dark_UserArea(UserArea)

    } , [])


    return (
        <div ref={UserArea} className='User-Area'>
            <HeaderSearchInUsers/>
            <MapInFakerData OpenChatArea={OpenChatArea}/>
        </div>
    )
}