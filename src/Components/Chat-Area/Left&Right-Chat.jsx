import React from "react";

export default function LeftRightChat ({Sentence , Cheked}){

    console.log(Cheked)
    return (
        <div className={Cheked ? 'Body-Chat-Right' : 'Body-Chat-Left'}>
            <div className='Send-Message'>
                <div className='Text-Area'>{Sentence}</div>
                <div className='Avatar-Area'>
                    <div className={'Message-Avatar'}></div>
                </div>
            </div>
        </div>
    )
}