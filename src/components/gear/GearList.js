import React from "react";
import { Computer } from "./GearComputer";

export const GearList = ({ gear, deleteGear }) => {
    return (
        <article className='diveLogMain' key='article2'>
            {gear.map(
                (gearset) => {
                    return <section className='diveLogEntry' key={`section--${gearset.id}`}><div>
                        <h2 className='diveNumber'>{gearset.name}</h2>
                        <h3 className='gearHeading'>Essential Gear</h3>
                        <ul className='diveList'>
                            {gearset.bcd !== '' ?
                                <li><b>BCD:</b> {gearset.bcd}</li> : ''}
                            {gearset.regulator !== '' ?
                                <li><b>Regulator:</b> {gearset.regulator}</li> : ''}
                            {gearset.octopus !== '' ?
                                <li><b>Octopus:</b> {gearset.octopus}</li> : ''}
                            {gearset.mask !== '' ?
                                <li><b>Mask:</b> {gearset.mask}</li> : ''}
                            {gearset.fins !== '' ?
                                <li><b>Fins:</b> {gearset.fins}</li> : ''}
                            {gearset.boots !== '' ?
                                <li><b>Boots:</b> {gearset.boots}</li> : ''}
                            {gearset.console !== '' ?
                                <li><b>Console:</b> {gearset.console}</li> : ''}
                            {gearset.computer !== '' ?
                                <li><b>Computer:</b> {gearset.computer}</li> : ''}
                            {gearset.exposureSuit !== '' ?
                                <li><b>Exposure Suit:</b> {gearset.exposureSuit}</li> : ''}
                            {gearset.weight !== '' ?
                                <li><b>Weight:</b> {gearset.weight}</li> : ''}
                            {gearset.tank !== '' ?
                                <li><b>Tank:</b> {gearset.tank}</li> : ''}
                            <Computer gear={gear} />
                        </ul>
                    </div>
                        <div className='edit-delete'>
                            <a href={`/gear/edit/${gearset.id}`}>Edit</a>
                            <a href="##" onClick={() => {
                                deleteGear(gearset.id)
                            }}>Delete</a>
                        </div>
                    </section>
                }
            )}
        </article>
    )
}