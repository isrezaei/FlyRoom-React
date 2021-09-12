import React , {useEffect , useRef} from "react";
import ShareLogo from '../../Images/Icons/icons8-clapperboard.gif'
import FileLogo from  '../../Images/Icons/icons8-add-folder.gif'
import { easings , animations } from 'react-animation'
import {BiVolumeMute} from 'react-icons/bi'
import {TiPinOutline} from 'react-icons/ti'
import {CgBlock} from 'react-icons/cg'
import {HiOutlinePhone} from 'react-icons/hi'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {HiOutlineMail} from 'react-icons/hi'
import {MdKeyboardArrowRight} from 'react-icons/md'
import {HiOutlineDotsVertical} from 'react-icons/hi'


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

            <div style={OpenDots} ref={FriendsDots} className='Friends-Dots'>

                <div className='DotsStyle'>
                    <p>Mute</p>
                    <BiVolumeMute className={'Icons'}/>

                </div>
                <div className='DotsStyle'>
                    <p>Pin</p>
                    <TiPinOutline className={'Icons'}/>
                </div>
                <div className='Block'>
                    <p>Block</p>
                    <CgBlock className={'Icons'}/>
                </div>

            </div>

            {/*Header-Panel*/}
            <div style={stylePanelIcon}  className='Handel-Postion'>

                <MdKeyboardArrowRight onClick={ClosePanel} className={'Icone'}/>
                <HiOutlineDotsVertical onClick={OpenDot} className={'Icone'} />
            </div>

            {/*Item-Panel*/}
            <div style={stylePanelIcon}  className='Profile-Media-Files'>

                <img className='Image-Profile'/>
                <p className='Name-Profile'>Ollie Chandler</p>
                <div className='Item-Profile'>
                    <p onClick={GetActiveToProfile} ref={Profile} className='Active'>Profile</p>
                    <p onClick={GetActiveToMedia} ref={Media}>Media</p>
                    <p onClick={GetActiveToFiles} ref={Files}>Files</p>
                </div>
            </div>

            {/*For-Profile*/}
            <div style={stylePanelIcon} ref={FriendProfile} className='Friend-Profile'>

                <div className='Phone'>
                    <div className='Title-Panel'>
                        <h1>Phone</h1>
                        <p>1-800-275-2273</p>
                    </div>
                    <div className='Logo-Panel'>
                        <HiOutlinePhone className={'Icone'}/>
                    </div>
                </div>

                <div className='Loaction'>
                    <div className='Title-Panel'>
                        <h1>Location</h1>
                        <p>USA, Houston</p>
                    </div>
                    <div className='Logo-Panel'>
                        <HiOutlineLocationMarker className={'Icone'}/>
                    </div>
                </div>

                <div className='Email'>
                    <div className='Title-Panel'>
                        <h1>E-mail</h1>
                        <p>chandler@ollie.com</p>
                    </div>
                    <div className='Logo-Panel'>
                        <HiOutlineMail className={'Icone'}/>
                    </div>
                </div>

                <div className='Notifications'>
                    <div className='Title-Panel'>
                        <h1>Notifications</h1>
                        <p>Enable sound notifications</p>
                    </div>
                    <div className='Logo-Panel'>
                        <input type="checkbox" id="switch"/><label htmlFor="switch">Toggle</label>
                    </div>
                </div>

            </div>

            {/*For-Media*/}

            <div style={stylePanelIcon} ref={FriendMedia} className={'Friend-Media'}>
                <img src={ShareLogo}/>
                <p>has not yet shared</p>
            </div>

            {/*For-Files*/}
            <div style={stylePanelIcon} ref={FriendFile} className={'Friend-File'}>
                <img src={FileLogo}/>
                <p>has not yet shared</p>
            </div>


        </div>
    )
}