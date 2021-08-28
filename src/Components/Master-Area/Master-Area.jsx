import React ,{useState , useEffect} from "react";
import ChatArea from "../Chat-Area/Chat-Area";
import ItemArea from "../Item-Area/Item-Area";
import UserArea from "../User-Area/User-Area";

import MessageFaker from "../Faker/Message-Faker";



export default function MasterArea ()
{

    const [FakeMessage , SetFakeMessage] = useState(
        {
            Message : MessageFaker(5)
        })



    useEffect(()=>{


    } , [])





    const UpdateMessage = () => {
        return SetFakeMessage( {Message: [...MessageFaker(5) , ...FakeMessage.Message]})
    }



    console.log(FakeMessage.Message)


    return (
        <div className='Master-Area'>
            <ItemArea/>
            <UserArea/>
            {FakeMessage.Message &&  <ChatArea MessageLenght={FakeMessage} UpdateMessage={UpdateMessage}/>}
        </div>
    )
}