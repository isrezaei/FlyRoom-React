import React from "react";

export default function MapInFakeMessage ({MessageLenght , InterStyleChat})
{
    const FakeMessage = MessageLenght.Message.map((value , index)=>{
        return (
            <div style={InterStyleChat} key={index} className={value.checked ? 'Body-Chat-Right' : 'Body-Chat-Left'}>
                <div className='Send-Message'>
                    <div className='Text-Area'>
                        <div className='Sentence'>
                            {value.sentence}
                        </div>
                        <div className='Time'>
                            {value.time}
                        </div>
                    </div>
                    <div className='Avatar-Area'>
                        <div className={'Message-Avatar'}></div>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div style={InterStyleChat} className='Fake-Message-Block'>
            {FakeMessage}
        </div>
    )
}