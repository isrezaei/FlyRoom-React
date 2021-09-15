import React from "react";
import {HiOutlineDocumentAdd, HiOutlineEmojiHappy} from "react-icons/hi";


export default function FooterForSendMessage ({KeyBoard_SendInputSearchValue , InputValue , SendInputSearchValue , HandelChenge , SendLogo})
{
    return (
        <div className='Footer-Input-Chat'>
            <div className='Input-TypeChat'>
                <div className='Attach-File'>
                    <HiOutlineDocumentAdd className={'Icone'}/>
                </div>

                <input onKeyPress={KeyBoard_SendInputSearchValue}
                       onChange={HandelChenge}
                       value={InputValue}
                       placeholder='Type your message...'
                       className='Input-Type'/>

                <div className='Emoji'>
                    <HiOutlineEmojiHappy className={'Icone'}/>
                </div>

                <button className='Search-Button' onClick={SendInputSearchValue}>
                    <img src={SendLogo}/>
                </button>
            </div>
        </div>
    )
}