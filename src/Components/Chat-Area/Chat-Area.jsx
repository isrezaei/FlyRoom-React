import React , { useState , useEffect , useRef} from "react";
import LeftRightChat from "./Left&Right-Chat";

export default function ChatArea ({SendMessage , UpdateMessage , MessageLenght})
{


    let RefBodyChat = useRef()

    const [RefBodyMessage , SetRefBodyMessage] = useState()



    useEffect(()=>{

        SetRefBodyMessage(RefBodyChat)



    } , [MessageLenght])





    const HandeleScroll = () =>{
        if (RefBodyMessage.current.scrollTop === 0){
            UpdateMessage()
        }
    }





        return (



            <div className='Chat-Area'>


                <div className='Header-Chat'>
                    <div className='Header-Avatar'>
                        <div className='Avatar'>
                            <img/>
                        </div>
                        <div className='Name-StatusType'>
                            <p className='Name'>Ollie Chandler</p>
                            <p className='Status'>Last Seen Recently</p>
                        </div>

                    </div>
                    <div className= 'Header-Sender-and-Reciver-Avatar-Info'>

                        <div className='Sender-Recive-Avatar-Info'>

                            <div className='Click-To-Info'>
                                <img src="https://img.icons8.com/ios/50/000000/info--v1.png"/>
                            </div>

                            <img className='Reciver'/>
                            <img className='Sender'/>


                        </div>
                    </div>
                </div>

                <div onScroll={HandeleScroll} ref={RefBodyChat} className='Parent-Chats'>
                    {MessageLenght && RefBodyMessage && <LeftRightChat RefBodyMessage={RefBodyMessage} MessageLenght={MessageLenght} SendMessage={SendMessage}/>}
                </div>




            </div>
        )
    }

