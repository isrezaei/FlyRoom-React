import React ,{useState , useEffect} from "react";
import ChatArea from "../Chat-Area/Chat-Area";
import ItemArea from "../Item-Area/Item-Area";
import UserArea from "../User-Area/User-Area";

import FakerData from "../Faker/Faker";



export default function MasterArea ()
{

    const [Avatar , SetAvatar] = useState()



    useEffect(()=>{



    } , [])








    console.log(Avatar)

      return (
         <div className='Master-Area'>
             <ItemArea/>
             <UserArea/>
             <ChatArea/>
         </div>
      )
}