import React , {Component} from "react";
import LeftRightChat from "./Left&Right-Chat";

export default class ChatArea extends Component
{

    constructor()
    {
        super();

        this.state = {
            Sentence : ''
        }

    }


    componentDidMount() {

    }




    render() {

        console.log(this.state.Sentence)


        return (
            <div className='Chat-Area'>

                <div className='Parent-Chats'>
                    <div className='Header-Chat'>
                        <div className='Header-Avatar'>
                            <div className='Avatar'>
                                <img/>
                            </div>
                            <div className='Name-Status'>
                                <p className='Name'>Ollie Chandler</p>
                                <p className='Status'>is typing...</p>
                            </div>

                        </div>
                        <div className= 'Header-Sender-and-Reciver-Avatar'>
                            <div className='Click-To-Info'>
                                <img src="https://img.icons8.com/ios/50/000000/info--v1.png"/>
                            </div>
                            <div className='Sender-Recive-Avatar'>
                                <img className='Reciver'/>
                                <img className='Sender'/>
                            </div>
                        </div>
                    </div>


                    {
                        this.props.FakeMessage.map((value , index) => {
                            return <LeftRightChat key={index}  Sentence={value.sentence} Cheked={value.checked}/>
                        })
                    }


                </div>

            </div>
        )
    }

}