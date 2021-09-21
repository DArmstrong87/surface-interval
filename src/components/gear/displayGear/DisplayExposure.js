import React from "react";

export const DisplayExposure = ({ gear }) => {
    return (<>
        <h2 className='gearHeading'>Exposure Protection</h2>
        <ul className='diveList'>
            {gear.gloves ?
                <li><b>Gloves:</b> {gear.gloves}</li> : ''}
            {gear.hood ?
                <li><b>Hood:</b> {gear.hood}</li> : ''}
        </ul>
    </>)
}