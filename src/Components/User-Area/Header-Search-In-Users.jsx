import React from "react";
import UserAreaTopic from "./User-Area-Topic";
import InputSearch from "./Input-Search";

export default function HeaderSearchInUsers()
{
    return(
        <div className='User-Search'>
            {/*UserAreaTopic*/}
            <UserAreaTopic/>

            {/*Input of search*/}
            <InputSearch/>
        </div>
    )
}