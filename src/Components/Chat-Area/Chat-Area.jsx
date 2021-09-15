import React , { useState , useEffect , useRef} from "react";
import HeaderChatArea from "./Header-Chat-Area";
import ScrollBlock from "./Scroll-Block";

export default function ChatArea ({SendMessage , UpdateMessage , MessageLenght ,OpenPanel , Dark_ChatArea , CloseChatArea ,GetRefHome})
{


    let RefBodyChat = useRef()
    let RefChatArea = useRef()
    let RefGoHome = useRef()

    const [RefBodyMessage , SetRefBodyMessage] = useState()



    useEffect(()=>{

        SetRefBodyMessage(RefBodyChat)

        // Set Ref of ChatArea For Dartk Mood
        Dark_ChatArea(RefChatArea)
        GetRefHome(RefGoHome)

    } , [MessageLenght])





    const HandeleScroll = () =>{
        if (RefBodyMessage.current.scrollTop === 0){
            UpdateMessage()
        }
    }




        return (

            <div ref={RefChatArea} className='Chat-Area'>

                <HeaderChatArea
                    RefGoHome={RefGoHome}
                    CloseChatArea={CloseChatArea}
                    OpenPanel={OpenPanel} />

                <ScrollBlock
                    HandeleScroll={HandeleScroll}
                    RefBodyChat={RefBodyChat}
                    MessageLenght={MessageLenght}
                    SendMessage={SendMessage}
                    RefBodyMessage={RefBodyMessage}
                />

            </div>
        )
    }

