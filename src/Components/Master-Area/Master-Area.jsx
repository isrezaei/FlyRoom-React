import React ,{useState , useEffect} from "react";
import ChatArea from "../Chat-Area/Chat-Area";
import ItemArea from "../Item-Area/Item-Area";
import UserArea from "../User-Area/User-Area";

import MessageFaker from "../Faker/Message-Faker";
import {ne} from "faker/lib/locales";



export default function MasterArea ()
{

    const [FakeMessage , SetFakeMessage] = useState(
        {
            Message : MessageFaker(20)
        })



    useEffect(()=>{


    } , [])





    const UpdateMessage = () => {
        return SetFakeMessage( {Message: [...MessageFaker(20) , ...FakeMessage.Message]})
    }


    const SendMessage = (value) => {

        console.log(value)

        SetFakeMessage(
            {
                Message: [...FakeMessage.Message ,
                    {
                        sentence : value ,
                        checked : true ,
                        time : new Date().toLocaleTimeString()
                    }
                ]


            })

    }




    return (
        <div className='Master-Area'>
            <ItemArea/>
            <UserArea/>
            {FakeMessage.Message &&  <ChatArea MessageLenght={FakeMessage} UpdateMessage={UpdateMessage} SendMessage={SendMessage}/>}

        </div>
    )
}