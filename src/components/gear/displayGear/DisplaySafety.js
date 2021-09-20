import React from "react";

export const DisplaySafety = ({ gear }) => {
    return (<>
        <h2 className='gearHeading'>Safety</h2>
        <ul className='diveList'>
            {gear.audSignal ?
                <li><b>Audible surface signal:</b> {gear.audSignal}</li> : ''}
            {gear.firstAid ?
                <li><b>First Aid Kit ⚕️</b></li> : ''}
            {gear.knife ?
                <li><b>Knife:</b> {gear.knife}</li> : ''}
            {gear.meds ?
                <li><b>Medications:</b> {gear.meds}</li> : ''}
            {gear.o2Kit ?
                <li><b>Oxygen Rescue Kit 🚑</b></li> : ''}
            {gear.sunscreen ?
                <li><b>Reef-safe sunscreen:</b> {gear.sunscreen}</li> : ''}
            {gear.vizSignal ?
                <li><b>Visual surface signal:</b> {gear.vizSignal}</li> : ''}
            {gear.wreckReel ?
                <li><b>Wreck reel:</b> {gear.wreckReel}</li> : ''}
        </ul>
    </>)
}