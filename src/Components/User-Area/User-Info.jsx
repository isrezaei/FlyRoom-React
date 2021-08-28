import React , {useState , useEffect} from "react";

export default function UserInfo ({Value})
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
        <div className='Users'>

            <div className='Avatar'>
                <img src={Profile}/>
            </div>

            <div className='Info'>

                <div className='TimeAndInfo'>
                    <div className='Name'>
                        {Name} {LastName}
                    </div>

                    <div className='Time'>
                        {Time}
                    </div>
                </div>

                <div className='PrevMessage'>
                    {SetSentence}
                </div>

            </div>
        </div>
    )
}