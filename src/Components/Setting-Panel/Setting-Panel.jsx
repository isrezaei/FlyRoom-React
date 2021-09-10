import React , {useEffect,useRef} from "react";
import { WiMoonAltWaningCrescent1 } from 'react-icons/wi';
import { IoReturnUpBackOutline } from 'react-icons/io5';

export default function SettingPanel ({SettingPanelData , SetDarkMood})
{

    const SettingPanel = useRef()

    useEffect(()=>{

        SettingPanelData(SettingPanel)

    } , [])


    const ClosePanelSetting = () =>
    {
        SettingPanel.current.style.display ='none'
    }


    return (
        <div ref={SettingPanel} className='Setting-Panel'>



            <div className='Dark-Mood'>
                <p>Dark Mood</p>
                <button onClick={SetDarkMood}><WiMoonAltWaningCrescent1 className='Icone'/></button>
                <button onClick={ClosePanelSetting}><IoReturnUpBackOutline className='Icone'/></button>
            </div>





        </div>
    )
}