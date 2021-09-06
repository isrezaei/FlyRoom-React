import React , {useEffect,useRef} from "react";

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

            <p className='Appearance'>Appearance</p>

            <div className='Dark-Mood'>
                <p>Dark Mood</p>
                <button onClick={SetDarkMood}>Set</button>
            </div>


            <div className='Color-Theme'>

                <div className='Themes'>
                    <p>Theme 1</p>
                    <p>Theme 2</p>
                    <p>Theme 3</p>
                    <p>Theme 4</p>
                </div>

                <div className='Handel-Palette'>
                    <div className='Palette'>
                        <div className='Cercel N1'></div>
                        <div className='Cercel N2'></div>
                    </div>


                    <div className='Palette'>
                        <div className='Cercel N3'></div>
                        <div className='Cercel N4'></div>
                    </div>


                    <div className='Palette'>
                        <div className='Cercel N5'></div>
                        <div className='Cercel N6'></div>
                    </div>



                    <div className='Palette'>
                        <div className='Cercel N7'></div>
                        <div className='Cercel N8'></div>
                    </div>
                </div>
            </div>

            <button onClick={ClosePanelSetting}>Back</button>

        </div>
    )
}