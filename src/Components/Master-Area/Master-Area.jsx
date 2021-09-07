import React ,{useState , useEffect} from "react";
import ChatArea from "../Chat-Area/Chat-Area";
import ItemArea from "../Item-Area/Item-Area";
import UserArea from "../User-Area/User-Area";
import MessageFaker from "../Faker/Message-Faker";
import ChatPanel from "../ChatPanel-Area/ChatPanel";
import SettingPanel from "../Setting-Panel/Setting-Panel";

export default function MasterArea ()
{

    const [FakeMessage , SetFakeMessage] = useState(
        {
            Message : MessageFaker(20)
        })

    const [WidthPanel , SetWidthPanel] = useState()

    const [State_Setting , Dark_SetItenArea] = useState()
    const [State_ItemArea , Dark_SetItemArea] =  useState()
    const [State_UserArea , Dark_SetUserArea] = useState()
    const [State_ChatArea , Dark_SetChatArea] = useState()
    const [State_ChatPanel , Dark_SetChatPanel] = useState()


    const UpdateMessage = () => {
        return SetFakeMessage( {Message: [...MessageFaker(20) , ...FakeMessage.Message]})
    }
    const SendMessage = (value) => {

        console.log(value)

        SetFakeMessage(
            {
                Message: [...FakeMessage.Message ,
                    {
                        sentence : value ,
                        checked : true ,
                        time : new Date().toLocaleTimeString()
                    }
                ]
            })
    }



    const GetWidthSize = (Event) => {
        return SetWidthPanel(Event.current)
    }


    const OpenPanel = () => {
        console.log(WidthPanel)

        return (
            WidthPanel.style.width = '30%',
            WidthPanel.style.display = 'block'

        )

    }


    const SettingPanelData = (Data) => {
        Dark_SetItenArea(Data)
    }

    const OpenSettingPanel = () => {
          State_Setting.current.style.display = 'flex'
    }


    const Dark_ItemArea = (Data) =>
    {
        Dark_SetItemArea(Data)
    }

    const Dark_UserArea = (Data) => {
        Dark_SetUserArea(Data)
    }

    const Dark_ChatArea = (Data) => {
      Dark_SetChatArea(Data)
    }

    const Dark_ChatPanel = (Data) => {
      Dark_SetChatPanel(Data)
    }


    const SetDarkMood = () => {
        State_ItemArea.current.classList.toggle('DarkMood-Item-Area')
        State_UserArea.current.classList.toggle('DarkMood-User-Area')
        State_ChatArea.current.classList.toggle('DarkMood-Chat-Area')
        State_ChatPanel.current.classList.toggle('DarkMood-Chat-Panel')
    }

    console.log(State_ItemArea)
    console.log(State_UserArea)
    console.log(State_ChatArea)
    console.log(State_Setting)

    return (


        <div className='Master-Area'>
            <ItemArea Dark_ItemArea={Dark_ItemArea} OpenSettingPanel={OpenSettingPanel}/>
            <UserArea Dark_UserArea={Dark_UserArea}/>
            {FakeMessage.Message &&
            <ChatArea
                MessageLenght={FakeMessage}
                UpdateMessage={UpdateMessage}
                SendMessage={SendMessage}
                OpenPanel={OpenPanel}
                Dark_ChatArea={Dark_ChatArea}
            />}

            <ChatPanel GetWidthSize={GetWidthSize} Dark_ChatPanel={Dark_ChatPanel}/>

            <SettingPanel SettingPanelData={SettingPanelData} SetDarkMood={SetDarkMood}/>





        </div>
    )
}