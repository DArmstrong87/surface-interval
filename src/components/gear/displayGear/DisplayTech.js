import React from "react";

export const DisplayTech = ({ gear }) => {
    return (<>
        <h2 className='gearHeading'>Tech</h2>
        <ul className='diveList'>
            {gear.camera ?
                <li><b>Camera:</b> {gear.camera}</li> : ''}
            {gear.cameraAcc ?
                <li><b>Camera Accessories:</b> {gear.cameraAcc}</li> : ''}
            {gear.chargers ?
                <li><b>Chargers:</b> {gear.chargers}</li> : ''}
            {gear.o2Analyzer ?
                <li><b>O2 Analyzer:</b> {gear.o2Analyzer}</li> : ''}
            {gear.power ?
                <li><b>Power bank:</b> {gear.power}</li> : ''}
            {gear.strobe ?
                <li><b>Tank strobe:</b> {gear.strobe}</li> : ''}
            {gear.torch ?
                <li><b>Torch:</b> {gear.torch}</li> : ''}
            {gear.torchBackup ?
                <li><b>Torch Backup:</b> {gear.torchBackup}</li> : ''}
        </ul>
    </>)
}