import React , {Component} from "react";

export default class LeftRightChat extends Component{

    constructor(props) {
        super(props);


        this.state = {
            Message : ''
        }

    }


    componentDidMount() {

        const FakeMessage = this.props.MessageLenght.Message.map((value , index)=>{
            return (
                <div key={index} className={value.checked ? 'Body-Chat-Right' : 'Body-Chat-Left'}>
                    <div className='Send-Message'>
                        <div className='Text-Area'>{value.sentence}</div>
                        <div className='Avatar-Area'>
                            <div className={'Message-Avatar'}></div>
                        </div>
                    </div>
                </div>
            )
        })

        this.setState({Message : FakeMessage})
    }





    getSnapshotBeforeUpdate(prevProps, prevState) {

        if (this.props.MessageLenght.Message.length > prevProps.MessageLenght.Message.length){
            const Element = this.props.RefBodyMessage.current

            return Element.scrollHeight - Element.scrollTop
        }


    }


    componentDidUpdate(prevProps, prevState, snapshot) {

        const Element = this.props.RefBodyMessage.current


        if (this.props.MessageLenght.Message.length > prevProps.MessageLenght.Message.length && snapshot !== null)
        {
            Element.scrollTop = Element.scrollHeight - snapshot


            const FakeMessage = this.props.MessageLenght.Message.map((value , index)=>{
                return (
                    <div key={index} className={value.checked ? 'Body-Chat-Right' : 'Body-Chat-Left'}>
                        <div className='Send-Message'>
                            <div className='Text-Area'>{value.sentence}</div>
                            <div className='Avatar-Area'>
                                <div className={'Message-Avatar'}></div>
                            </div>
                        </div>
                    </div>
                )
            })

            this.setState({Message : FakeMessage})


        }


    }






    render() {

        return (
            this.state.Message
        )
    }


}