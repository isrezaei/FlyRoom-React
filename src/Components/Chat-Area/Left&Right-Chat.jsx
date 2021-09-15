import React , {Component} from "react";
import SendLogo from '../../Images/Icons/icons8-forward-arrow-100 .png'
import { animations } from 'react-animation'
import MapInFakeMessage from "./Map-In-Fake-Message";
import FooterForSendMessage from "./Footer-For-Send-Message";

const InterStyleChat = {
    animation: animations.fadeIn
}

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

    HandelChenge = (e) => {
        this.setState({
            InputValue : e.target.value
        })
    }

    SendInputSearchValue = () => {
        this.props.SendMessage(this.state.InputValue)
        this.setState({
            InputValue : ''
        })
    }

    KeyBoard_SendInputSearchValue = (e) => {
        if (e.key === 'Enter')
        {
            this.props.SendMessage(e.target.value)
            this.setState({
                InputValue : ''
            })
        }
    }



    render() {
        return (
            <>
                <MapInFakeMessage
                    InterStyleChat={InterStyleChat}
                    MessageLenght={this.props.MessageLenght}
                />

                <FooterForSendMessage
                    KeyBoard_SendInputSearchValue={this.KeyBoard_SendInputSearchValue}
                    HandelChenge={this.HandelChenge}
                    InputValue={this.state.InputValue}
                    SendInputSearchValue={this.SendInputSearchValue}
                    SendLogo={SendLogo}
                />
            </>
        )
    }


}