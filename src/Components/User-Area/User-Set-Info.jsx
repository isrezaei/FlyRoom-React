import React , {useState , useEffect} from "react";
import SetAvatar from "./Set-Avatar";
import Informations from "./Informations";

export default function UserSetInfo ({Value , OpenChatArea_InResponsive})
{
    const [Profile , SetProfile] = useState()
    const [Name ,SetName] = useState()
    const [LastName ,SetLastName] = useState()
    const [Time ,SetTime] = useState()
    const [Sentence , SetSentence] = useState()


    useEffect(()=> {

        SetProfile(Value.avatar)
        SetName(Value.name)
        SetLastName(Value.lastName)
        SetTime(Value.time)
        SetSentence(Value.sentence)

    } , [])


    return (

        <div onClick={OpenChatArea_InResponsive} className='Users'>

            <SetAvatar Profile={Profile}/>

            <Informations
                Name={Name}
                LastName={LastName}
                Time={Time}
                Sentence={Sentence}
            />

        </div>
    )
}