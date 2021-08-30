import React , {Component} from "react";
import SendLogo from '../../Images/Icons/icons8-forward-arrow-100 .png'

export default class LeftRightChat extends Component{

    constructor(props) {
        super(props);

        this.state = {
            InputValue : ''
        }
    }


    componentDidMount() {
        this.props.RefBodyMessage.current.scrollTop = 3051
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        if (this.props.MessageLenght.Message.length !== prevProps.MessageLenght.Message.length)
        {
            const Element = this.props.RefBodyMessage.current
            return Element.scrollHeight - Element.scrollTop
            console.log(Element)
        }
        return null
    }



    componentDidUpdate(prevProps, prevState, snapshot) {
        if(snapshot !== null)
        {
            const Element = this.props.RefBodyMessage.current
            return  Element.scrollTop = Element.scrollHeight - snapshot
        }
    }


    HandelChenge = (e) =>
    {
        this.setState({
            InputValue : e.target.value
        })

    }

    SendInputSearchValue = () =>
    {
        this.props.SendMessage(this.state.InputValue)
        this.setState({
            InputValue : ''
        })
    }

    KeyBoard_SendInputSearchValue = (e) =>
    {
        if (e.key === 'Enter')
        {
            this.props.SendMessage(e.target.value)
            this.setState({
                InputValue : ''
            })
        }

    }



    render() {

        const FakeMessage = this.props.MessageLenght.Message.map((value , index)=>{
            return (
                <div key={index} className={value.checked ? 'Body-Chat-Right' : 'Body-Chat-Left'}>
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
            <>

                <div className='Fake-Message-Block'>
                    {FakeMessage}
                </div>

                <div className='Footer-Input-Chat'>

                    <div className='Input-Button'>

                        <div className='Attach-File'>
                            <img src="https://img.icons8.com/small/32/000000/add-file.png"/>
                        </div>

                        <input onKeyPress={this.KeyBoard_SendInputSearchValue}
                               onChange={this.HandelChenge}
                               value={this.state.InputValue}
                               placeholder='Type your message...'
                               className='Input-Search'/>

                        <div className='Emoji'>
                            <img src="https://img.icons8.com/ios/96/000000/anime-emoji--v1.png"/>
                        </div>

                        <button className='Search-Button' onClick={this.SendInputSearchValue}>
                            <img src={SendLogo}/>
                        </button>

                    </div>


                </div>

            </>
        )
    }


}