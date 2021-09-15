import React from "react";
import Logo from "./Logo";
import Icons from "./Icons";

export default function ItemsIconsLogo ({OpenSettingPanel})
{
    return (
        <>
            {/*Logo*/}
            <Logo/>

            {/*Icons*/}
            <Icons OpenSettingPanel={OpenSettingPanel}/>
        </>
    )
}