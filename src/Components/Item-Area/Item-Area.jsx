import React, {useEffect , useRef} from "react";
import ItemsIconsLogo from "./Items-Icons&logo";
import ProfileImage from "./Profile-Image";

export default function ItemArea({Dark_ItemArea , OpenSettingPanel})
{
    const ItemArea = useRef()

    useEffect(()=>{

        //Set Ref of Item Area for Dark Mood
        Dark_ItemArea(ItemArea)

    } , [])


    return (
        <div ref={ItemArea} className='Item-Area'>
            <div className='ParentIcon'>

                <ItemsIconsLogo OpenSettingPanel={OpenSettingPanel}/>
                <ProfileImage/>

            </div>
        </div>
    )
}
