import React , {useEffect , useRef} from "react";
import ShareLogo from '../../Images/Icons/icons8-link.gif'
import FileLogo from  '../../Images/Icons/icons8-add-folder.gif'
import { easings } from 'react-animation'



export default function ChatPanel({GetWidthSize})
{


    const RefPanel = useRef()
    const FriendProfile = useRef()
    const FriendMedia = useRef()
    const FriendFile = useRef()
    const Profile = useRef()
    const Media = useRef()
    const Files = useRef()


    useEffect(()=>{


        GetWidthSize(RefPanel)
        FriendMedia.current.style.display = 'none'
        FriendFile.current.style.display = 'none'

    } , [])


    const ClosePanel = () => {
        return (
            RefPanel.current.style.width = '0',
                RefPanel.current.style.display = 'none'
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


    const stylePanelIcon = {
        animation: `pop-in ${easings.easeOutExpo} 500ms forwards`
    }


    return (
        <div ref={RefPanel} className='Chat-Panel'>

            {/*Header-Panel*/}

            <div style={stylePanelIcon}  className='Handel-Postion'>
                <img onClick={ClosePanel} src="https://img.icons8.com/ios-filled/96/000000/more-than.png"/>
                <img src="https://img.icons8.com/material-rounded/48/000000/menu-2.png"/>
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
                        <img src="https://img.icons8.com/material-outlined/48/000000/outgoing-call.png"/>
                    </div>
                </div>

                <div className='Loaction'>
                    <div className='Title-Panel'>
                        <h1>Location</h1>
                        <p>USA, Houston</p>
                    </div>
                    <div className='Logo-Panel'>
                        <img src="https://img.icons8.com/pastel-glyph/64/000000/worldwide-location--v1.png"/>
                    </div>
                </div>

                <div className='Email'>
                    <div className='Title-Panel'>
                        <h1>E-mail</h1>
                        <p>chandler@ollie.com</p>
                    </div>
                    <div className='Logo-Panel'>
                        <img src="https://img.icons8.com/ios-glyphs/90/000000/email.png"/>
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