import React from "react";
import { Page, Text, Document, View, StyleSheet } from '@react-pdf/renderer';
import { findGear } from "./FindGear";

export const GearPDF = ({ gear }) => {
    const foundGear = findGear(gear)
    const styles = StyleSheet.create({
        page: {
            margin: 20,
            marginBottom: 20
        },
        box: {
            border: 'solid' | 2
        },
        h2: {
            fontSize: 30,
            textAlign: 'center',
            marginBottom: 10,
            border: 'solid' | 1
        },
        h3: {
            fontSize: 20,
            marginBottom: 5,
            marginTop: 10,
            marginLeft: 10,
            textDecoration: 'underline'
        },
        li: {
            fontSize: 16,
            marginLeft: 15,
            fontWeight: 'bolder'
        },
        section: {
            margin: 10,
            padding: 10,
            flexGrow: 1
        },
        box: {
            borderWidth: 2,
            borderStyle: 'solid',
            borderColor: 'black',
            border: 'black'
        }
    });

    return (
        <>
            <Document>
                <Page style={styles.page}>
                    <View style={styles.page}>
                        <Text style={styles.h2}>{gear.name}</Text>

                        <Text style={styles.box}>hello</Text>
                        <Text style={styles.h3}>Essential Gear</Text>
                        <Text style={styles.li}>
                            {gear.bcd ? `___ BCD: ${gear.bcd}` : ''}
                        </Text>
                        <Text style={styles.li}>
                            {gear.regulator ? `___ Regulator: ${gear.regulator}` : ''}
                        </Text>
                        <Text style={styles.li}>
                            {gear.octopus ? `___ Octopus: ${gear.octopus}` : ''}
                        </Text>
                        <Text style={styles.li}>
                            {gear.mask ? `___ Mask: ${gear.mask}` : ''}
                        </Text>
                        <Text style={styles.li}>
                            {gear.fins ? `___ Fins: ${gear.fins}` : ''}
                        </Text>
                        <Text style={styles.li}>
                            {gear.boots ? `___ Boots: ${gear.boots}` : ''}
                        </Text>
                        <Text style={styles.li}>
                            {gear.console ? `___ Console: ${gear.console}` : ''}
                        </Text>
                        <Text style={styles.li}>
                            {gear.computer ? `___ Computer: ${gear.computer}` : ''}
                        </Text>
                        <Text style={styles.li}>
                            {gear.exposureSuit ? `___ Exposure Suit: ${gear.exposureSuit}` : ''}
                        </Text>
                        <Text style={styles.li}>
                            {gear.weight ? `___ Weight: ${gear.weight} lbs` : ''}
                        </Text>
                        <Text style={styles.li}>
                            {gear.tank ? `___ Tank: ${gear.tank}` : ''}
                        </Text>

                        <Text style={styles.h3}>{foundGear.exposure > 0 ? 'Exposure Protection' : ''}</Text>
                        <Text style={styles.li}>
                            {gear.gloves ? `___ Gloves: ${gear.gloves}` : ''}
                        </Text>
                        <Text style={styles.li}>
                            {gear.hood ? `___ Hood: ${gear.hood}` : ''}
                        </Text>

                        <Text style={styles.h3}>{foundGear.tech > 0 ? 'Tech' : ''}</Text>
                        <Text style={styles.li}>
                            {gear.batteries ? `___ Batteries: ${gear.batteries}` : ''}
                        </Text>
                        <Text style={styles.li}>
                            {gear.camera ? `___ Camera: ${gear.camera}` : ''}
                        </Text>
                        <Text style={styles.li}>
                            {gear.cameraAcc ? `___ Camera Accessories: ${gear.cameraAcc}` : ''}
                        </Text>
                        <Text style={styles.li}>
                            {gear.chargers ? `___ Chargers: ${gear.chargers}` : ''}
                        </Text>
                        <Text style={styles.li}>
                            {gear.o2Analyzer ? `___ Oxygen Analyzer: ${gear.o2Analyzer}` : ''}
                        </Text>
                        <Text style={styles.li}>
                            {gear.power ? `___ Power Bank: ${gear.power}` : ''}
                        </Text>
                        <Text style={styles.li}>
                            {gear.strobe ? `___ Tank Strobe: ${gear.strobe}` : ''}
                        </Text>
                        <Text style={styles.li}>
                            {gear.torch ? `___ Torch: ${gear.torch}` : ''}
                        </Text>
                        <Text style={styles.li}>
                            {gear.torchBackup ? `___ Torch (Backup): ${gear.torchBackup}` : ''}
                        </Text>

                        <Text style={styles.h3}>{foundGear.backups > 0 ? 'Backups' : ''}</Text>
                        <Text style={styles.li}>
                            {gear.finStrap ? `___ Finstrap` : ''}
                        </Text>
                        <Text style={styles.li}>
                            {gear.maskBackup ? `___ Mask` : ''}
                        </Text>
                        <Text style={styles.li}>
                            {gear.maskStrap ? `___ Mask strap` : ''}
                        </Text>
                        <Text style={styles.li}>
                            {gear.oRings ? `___ O-Rings` : ''}
                        </Text>
                        <Text style={styles.li}>
                            {gear.mouthpiece ? `___ Reg Mouthpiece` : ''}
                        </Text>
                        <Text style={styles.li}>
                            {gear.zipTies ? `___ Zip ties` : ''}
                        </Text>

                        <Text style={styles.h3}>{foundGear.documents > 0 ? 'Documents' : ''}</Text>
                        <Text style={styles.li}>
                            {gear.itinerary ? `___ Itinerary` : ''}
                        </Text>
                        <Text style={styles.li}>
                            {gear.maps ? `___ Maps` : ''}
                        </Text>
                        <Text style={styles.li}>
                            {gear.passport ? `___ Passport` : ''}
                        </Text>
                        <Text style={styles.li}>
                            {gear.logbook ? `___ Physical logbook` : ''}
                        </Text>
                        <Text style={styles.li}>
                            {gear.planeTickets ? `___ Plane tickets` : ''}
                        </Text>
                        <Text style={styles.li}>
                            {gear.travelIns ? `___ Travel insurance` : ''}
                        </Text>
                        <Text style={styles.li}>
                            {gear.vaxRec ? `___ Vaccination record` : ''}
                        </Text>

                        <Text style={styles.h3}>{foundGear.safety > 0 ? 'Safety' : ''}</Text>
                        <Text style={styles.li}>
                            {gear.audSignal ? `___ Audible surface signal: ${gear.audSignal}` : ''}
                        </Text>
                        <Text style={styles.li}>
                            {gear.firstAid ? "___ First Aid" : ''}
                        </Text>
                        <Text style={styles.li}>
                            {gear.knife ? `___ Knife: ${gear.knife}` : ''}
                        </Text>
                        <Text style={styles.li}>
                            {gear.meds ? `___ Medications: ${gear.meds}` : ''}
                        </Text>
                        <Text style={styles.li}>
                            {gear.o2Kit ? "___ Oxygen rescue kit" : ''}
                        </Text>
                        <Text style={styles.li}>
                            {gear.sunscreen ? `___ Sunscreen: ${gear.sunscreen}` : ''}
                        </Text>
                        <Text style={styles.li}>
                            {gear.vizSignal ? `___ Visual surface signal: ${gear.vizSignal}` : ''}
                        </Text>
                        <Text style={styles.li}>
                            {gear.wreckReel ? `___ Wreck reel: ${gear.wreckReel}` : ''}
                        </Text>

                        <Text style={styles.h3}>{foundGear.misc > 0 ? 'Misc' : ''}</Text>
                        <Text style={styles.li}>
                            {gear.dryBag ? `___ Dry bag` : ''}
                        </Text>
                        <Text style={styles.li}>
                            {gear.defog ? `___ Defogger` : ''}
                        </Text>
                        <Text style={styles.li}>
                            {gear.sunglasses ? `___ Sunglasses` : ''}
                        </Text>
                        <Text style={styles.li}>
                            {gear.toolKit ? `___ Tool kit` : ''}
                        </Text>
                        <Text style={styles.li}>
                            {gear.waterBottle ? `___ Water bottle` : ''}
                        </Text>
                    </View >
                </Page >
            </Document >
        </>
    )
}