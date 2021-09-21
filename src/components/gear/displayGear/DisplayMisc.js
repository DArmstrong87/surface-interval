import React from "react";

export const DisplayMisc = ({ gear }) => {
    return (<>
        <h2 className='gearHeading'>Misc</h2>
        <ul className='diveList'>
            {gear.dryBag ?
                <li><b>Dry bag</b></li> : ''}
            {gear.defog ?
                <li><b>Mask Defogger</b></li> : ''}
            {gear.sunglasses ?
                <li><b>Sunglasses</b></li> : ''}
            {gear.toolKit ?
                <li><b>Tool kit</b></li> : ''}
            {gear.towel ?
                <li><b>Towel</b></li> : ''}
            {gear.waterBottle ?
                <li><b>Water bottle</b></li> : ''}
        </ul>
    </>)
}