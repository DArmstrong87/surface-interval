import React from "react";

export const DisplayEssential = ({ gear }) => {
    return (<>
        <h2 className='gearHeading'>Essential</h2>
        <ul className='diveList'>
            {gear.bcd ?
                <li><b>BCD:</b> {gear.bcd}</li> : ''}
            {gear.regulator ?
                <li><b>Regulator:</b> {gear.regulator}</li> : ''}
            {gear.octopus ?
                <li><b>Octopus:</b> {gear.octopus}</li> : ''}
            {gear.mask ?
                <li><b>Mask:</b> {gear.mask}</li> : ''}
            {gear.fins ?
                <li><b>Fins:</b> {gear.fins}</li> : ''}
            {gear.boots ?
                <li><b>Boots:</b> {gear.boots}</li> : ''}
            {gear.console ?
                <li><b>Console:</b> {gear.console}</li> : ''}
            {gear.computer ?
                <li><b>Computer:</b> {gear.computer}</li> : ''}
            {gear.exposureSuit ?
                <li><b>Exposure Suit:</b> {gear.exposureSuit}</li> : ''}
            {gear.weight ?
                <li><b>Weight:</b> {gear.weight} lbs</li> : ''}
            {gear.tank ?
                <li><b>Tank:</b> {gear.tank}</li> : ''}
        </ul>
    </>)
}