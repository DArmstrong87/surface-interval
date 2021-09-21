import React from "react";

export const DisplayBackups = ({ gear }) => {
    return (<>
        <h2 className='gearHeading'>Backups</h2>
        <ul className='diveList'>
            {gear.finStrap ?
                <li><b>Fin strap</b></li> : ''}
            {gear.maskBackup ?
                <li><b>Mask</b></li> : ''}
            {gear.maskStrap ?
                <li><b>Mask strap</b></li> : ''}
            {gear.mouthpiece ?
                <li><b>Regulator mouthpiece</b></li> : ''}
            {gear.oRings ?
                <li><b>O-Rings</b></li> : ''}
            {gear.zipTies ?
                <li><b>Zip ties</b></li> : ''}
        </ul>
    </>)
}