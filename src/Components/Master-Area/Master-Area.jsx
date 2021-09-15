import React ,{useState , useEffect} from "react";
import ChatArea from "../Chat-Area/Chat-Area";
import ItemArea from "../Item-Area/Item-Area";
import UserArea from "../User-Area/User-Area";
import MessageFaker from "../Faker/Message-Faker";
import ChatPanel from "../Chat-Panel-Area/Chat-Panel";
import SettingPanel from "../Setting-Panel/Setting-Panel";

export default function MasterArea ()
{
    //Set Statement
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
    const [State_GoHome , Go_ToHome] = useState()
    //Set Statement

    //Scroll up and show unread message
    const UpdateMessage = () => {
        return SetFakeMessage( {Message: [...MessageFaker(20) , ...FakeMessage.Message]})
    }
    //Scroll up and show unread message

    //Send user Message
    const SendMessage = (value) => {
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
    //Send user Message


    //Get information style of inside panel
    const GetWidthSize = (Event) => {
        return SetWidthPanel(Event.current)
    }

    //Main Panel
    const OpenPanel = () => {
        return (
            WidthPanel.style.display = 'block'
        )
    }

    const SettingPanelData = (Data) => {
        Dark_SetItenArea(Data)
    }

    //3 Dots Panel
    const OpenSettingPanel = () => {
        State_Setting.current.style.display = 'flex'
    }
    //Get information style of inside panel


    //Get Refs Of All Parent Element For Dark Mood
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
    //Get Refs Of All Parent Element For Dark Mood


    //Set Dark Mood By this Function
    const SetDarkMood = () => {
        State_ItemArea.current.classList.toggle('DarkMood-Item-Area')
        State_UserArea.current.classList.toggle('DarkMood-User-Area')
        State_ChatArea.current.classList.toggle('DarkMood-Chat-Area')
        State_ChatPanel.current.classList.toggle('DarkMood-Chat-Panel')
    }
    //Set Dark Mood By this Function


    //Open Chat Panel in Responsive Mood
    const GetRefHome = (Data) => {
        Go_ToHome(Data)
    }

    const OpenChatArea = () =>
    {
        State_ChatArea.current.style.zIndex = '1'
        State_GoHome.current.style.display = 'flex'
    }


    const CloseChatArea = () =>
    {
        State_ChatArea.current.style.zIndex = '-1'
        State_GoHome.current.style.display = 'none'
    }
    //Open Chat Panel in Responsive Mood


    return (
        <div className='Master-Area'>
            <ItemArea Dark_ItemArea={Dark_ItemArea} OpenSettingPanel={OpenSettingPanel}/>
            {/***/}
            <UserArea Dark_UserArea={Dark_UserArea}  OpenChatArea={OpenChatArea}/>
            {/***/}
            {FakeMessage.Message &&
            <ChatArea
                MessageLenght={FakeMessage}
                UpdateMessage={UpdateMessage}
                SendMessage={SendMessage}
                OpenPanel={OpenPanel}
                Dark_ChatArea={Dark_ChatArea}
                CloseChatArea={CloseChatArea}
                GetRefHome={GetRefHome}
            />}
            {/***/}
            <ChatPanel GetWidthSize={GetWidthSize} Dark_ChatPanel={Dark_ChatPanel} State_ChatArea={State_ChatArea}/>
            {/***/}
            <SettingPanel SettingPanelData={SettingPanelData} SetDarkMood={SetDarkMood}/>
        </div>
    )
}