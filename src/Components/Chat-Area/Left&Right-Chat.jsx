import React , {Component} from "react";

export default class LeftRightChat extends Component{

    constructor(props) {
        super(props);
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

    render() {

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


        console.log(this.props.MessageLenght.Message.length)

        return (
            <>
                {FakeMessage}
            </>
        )
    }


}