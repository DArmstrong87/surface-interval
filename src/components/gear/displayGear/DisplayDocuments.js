import React from "react";

export const DisplayDocuments = ({ gear }) => {
    return (<>
        <h2 className='gearHeading'>Documents</h2>
        <ul className='diveList'>
            {gear.itinerary ?
                <li><b>Itinerary</b></li> : ''}
            {gear.maps ?
                <li><b>Maps</b></li> : ''}
            {gear.passport ?
                <li><b>Passport</b></li> : ''}
            {gear.logbook ?
                <li><b>Physical log book</b></li> : ''}
            {gear.planeTicket ?
                <li><b>Plane Ticket</b></li> : ''}
            {gear.travelIns ?
                <li><b>Travel Insurance</b></li> : ''}
            {gear.vaxRec ?
                <li><b>Vaccination record</b></li> : ''}
        </ul>
    </>)
}