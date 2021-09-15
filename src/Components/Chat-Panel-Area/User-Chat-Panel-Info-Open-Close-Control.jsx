import React from "react";
import {MdKeyboardArrowRight} from "react-icons/md";
import {HiOutlineDotsVertical} from "react-icons/hi";

export default function InfoOpenCloseControl({ClosePanel , OpenDot , stylePanelIcon})
{
    return(
        <div style={stylePanelIcon}  className='Handel-Postion'>
            <MdKeyboardArrowRight onClick={ClosePanel} className={'Icone'}/>
            <HiOutlineDotsVertical onClick={OpenDot} className={'Icone'} />
        </div>
    )
}