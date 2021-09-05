import React ,{useState , useEffect} from "react";
import ChatArea from "../Chat-Area/Chat-Area";
import ItemArea from "../Item-Area/Item-Area";
import UserArea from "../User-Area/User-Area";
import MessageFaker from "../Faker/Message-Faker";
import ChatPanel from "../ChatPanel-Area/ChatPanel";




export default function MasterArea ()
{

    const [FakeMessage , SetFakeMessage] = useState(
        {
            Message : MessageFaker(20)
        })

    const [WidthPanel , SetWidthPanel] = useState()


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



    const GetWidthSize = (Event) => {
        return SetWidthPanel(Event.current)
    }


    const OpenPanel = () => {
        console.log(WidthPanel)

        return (
            WidthPanel.style.width = '30%',
            WidthPanel.style.display = 'block'

        )

    }





    return (


        <div className='Master-Area'>
            <ItemArea/>
            <UserArea/>
            {FakeMessage.Message &&
            <ChatArea
                MessageLenght={FakeMessage}
                UpdateMessage={UpdateMessage}
                SendMessage={SendMessage}
                OpenPanel={OpenPanel}
            />}
            <ChatPanel GetWidthSize={GetWidthSize}/>



        </div>
    )
}