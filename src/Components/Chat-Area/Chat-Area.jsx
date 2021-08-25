import React , {Component} from "react";

export default class ChatArea extends Component
{

constructor()
{
    super();
}


render() {
    return (
        <div className='Chat-Area'>

            <div className='Parent-Chats'>
                <div className='Heder-Chat'></div>
                <div className='Body-Chat'></div>
            </div>

        </div>
    )
}

}