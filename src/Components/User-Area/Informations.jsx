import React from "react";

export default function Informations ({Name , LastName , Time ,Sentence})
{
    return (
        <div className='Info'>
            <div className='TimeAndInfo'>
                <p className='Name-LastName'>
                    {Name} {LastName}
                </p>
                <div className='Time'>
                    {Time}
                </div>
            </div>
            <div className='PrevMessage'>
                {Sentence}
            </div>
        </div>
    )
}