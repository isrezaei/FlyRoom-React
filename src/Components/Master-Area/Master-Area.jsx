import React ,{useState , useEffect} from "react";
import ChatArea from "../Chat-Area/Chat-Area";
import ItemArea from "../Item-Area/Item-Area";
import UserArea from "../User-Area/User-Area";

import MessageFaker from "../Faker/Message-Faker";



export default function MasterArea ()
{

    const [FakeMessage , SetFakeMessage] = useState()



    useEffect(()=>{

        SetFakeMessage(MessageFaker)


    } , [])








      return (
         <div className='Master-Area'>
             <ItemArea/>
             <UserArea/>
             {FakeMessage && <ChatArea FakeMessage={FakeMessage}/>}
         </div>
      )
}