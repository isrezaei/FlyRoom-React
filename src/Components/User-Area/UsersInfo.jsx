import React , {useState , useEffect} from "react";

export default function UsersInfo ({Value})
{
    const [Profile , SetProfile] = useState()


    useEffect(()=> {

        SetProfile(Value.avatar)

    } , [])




    return (
        <div className='Users'>

            <div className='Avatar'>
                <img src={Profile}/>
            </div>

            <div className='Info'>

                <div className='TimeAndInfo'>
                    <div className='Name'>
                        {Value.name} {Value.lastName}
                    </div>
                    <div className='Time'>
                        {Value.time}
                    </div>
                </div>

                <div className='PrevMessage'>
                    {Value.sentence}
                </div>

            </div>
        </div>
    )
}