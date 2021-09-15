import React , {useEffect , useRef} from "react";
import { easings , animations } from 'react-animation'
import UserChatPanelMutePinBlock from "./User-Chat-Panel-Mute-Pin-Block";
import InfoOpenCloseControl from "./User-Chat-Panel-Info-Open-Close-Control";
import UserChatPanelInfoItemsPanel from "./User-Chat-Panel-Info-ItemsPanel";
import UserChatPanelOptions from "./User-Chat-Panel-Options";

export default function ChatPanel({GetWidthSize , Dark_ChatPanel , State_ChatArea})
{
    const Panel = useRef()
    const FriendProfile = useRef()
    const FriendMedia = useRef()
    const FriendFile = useRef()
    const FriendsDots = useRef()
    const Profile = useRef()
    const Media = useRef()
    const Files = useRef()

    useEffect(()=>{

        GetWidthSize(Panel)
        FriendMedia.current.style.display = 'none'
        FriendFile.current.style.display = 'none'
        Dark_ChatPanel(Panel)

    } , [])

    const ClosePanel = () => {
        return(
            Panel.current.style.display = 'none'
        )
    }

    const GetActiveToProfile = () => {
        return (
            Media.current.classList.remove('Active'),
                Files.current.classList.remove('Active'),
                Profile.current.classList.add('Active'),
                FriendMedia.current.style.display = 'none',
                FriendProfile.current.style.display = 'flex',
                FriendFile.current.style.display = 'none'
        )
    }

    const GetActiveToMedia = () => {
        return (
            Profile.current.classList.remove('Active'),
                Files.current.classList.remove('Active'),
                Media.current.classList.add('Active'),
                FriendProfile.current.style.display = 'none',
                FriendMedia.current.style.display = 'flex',
                FriendFile.current.style.display = 'none'
        )
    }

    const GetActiveToFiles = () => {
        return (
            Media.current.classList.remove('Active'),
                Profile.current.classList.remove('Active'),
                Files.current.classList.add('Active'),
                FriendProfile.current.style.display = 'none',
                FriendMedia.current.style.display = 'none',
                FriendFile.current.style.display = 'flex'
        )
    }

    const OpenDot = () => {
        return FriendsDots.current.classList.toggle('Show-Dots')
    }

    const stylePanelIcon = {
        animation: `pop-in ${easings.easeOutExpo} 500ms forwards`
    }

    const OpenDots = {
        animation: animations.fadeIn
    }


    return (
        <div ref={Panel} className='Chat-Panel'>

            {/*Mute-Pin-Block*/}
            <UserChatPanelMutePinBlock OpenDots={OpenDots} FriendsDots={FriendsDots}/>

            {/*Headel-Panel*/}

            <InfoOpenCloseControl
                stylePanelIcon={stylePanelIcon}
                ClosePanel={ClosePanel}
                OpenDot={OpenDot}
            />

            {/*Item-Panel*/}
            <UserChatPanelInfoItemsPanel
                stylePanelIcon={stylePanelIcon}
                GetActiveToProfile={GetActiveToProfile}
                GetActiveToMedia={GetActiveToMedia}
                GetActiveToFiles={GetActiveToFiles}
                Profile={Profile}
                Media={Media}
                Files={Files}
            />

            {/*For-Profile*/}
            <UserChatPanelOptions
                stylePanelIcon={stylePanelIcon}
                FriendProfile={FriendProfile}
                FriendMedia={FriendMedia}
                FriendFile={FriendFile}
            />

        </div>
    )
}