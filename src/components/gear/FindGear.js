export const findGear = (gear) => {
    const gloves = gear.gloves ? 1 : 0
    const hood = gear.hood ? 1 : 0
    const batteries = gear.batteries ? 1 : 0
    const camera = gear.camera ? 1 : 0
    const cameraAcc = gear.cameraAcc ? 1 : 0
    const chargers = gear.chargers ? 1 : 0
    const o2Analyzer = gear.o2Analyzer ? 1 : 0
    const power = gear.power ? 1 : 0
    const strobe = gear.strobe ? 1 : 0
    const torch = gear.torch ? 1 : 0
    const torchBackup = gear.torchBackup ? 1 : 0
    const finStrap = gear.finStrap ? 1 : 0
    const maskBackup = gear.maskBackup ? 1 : 0
    const maskStrap = gear.maskStrap ? 1 : 0
    const mouthpiece = gear.mouthpiece ? 1 : 0
    const oRings = gear.oRings ? 1 : 0
    const zipTies = gear.zipTies ? 1 : 0
    const itinerary = gear.itinerary ? 1 : 0
    const maps = gear.maps ? 1 : 0
    const passport = gear.passport ? 1 : 0
    const logbook = gear.logbook ? 1 : 0
    const planeTicket = gear.planeTicket ? 1 : 0
    const travelIns = gear.travelIns ? 1 : 0
    const vaxRec = gear.vaxRec ? 1 : 0
    const audSignal = gear.audSignal ? 1 : 0
    const firstAid = gear.firstAid ? 1 : 0
    const knife = gear.knife ? 1 : 0
    const meds = gear.meds ? 1 : 0
    const o2Kit = gear.o2Kit ? 1 : 0
    const sunscreen = gear.sunscreen ? 1 : 0
    const vizSignal = gear.vizSignal ? 1 : 0
    const wreckReel = gear.wreckReel ? 1 : 0
    const dryBag = gear.dryBag ? 1 : 0
    const defog = gear.defog ? 1 : 0
    const sunglasses = gear.sunglasses ? 1 : 0
    const toolKit = gear.toolKit ? 1 : 0
    const towel = gear.towel ? 1 : 0
    const waterBottle = gear.waterBottle

    const exposure = gloves + hood
    const tech = batteries + camera + cameraAcc + chargers + o2Analyzer + power + strobe + torch + torchBackup
    const backups = finStrap + maskBackup + maskStrap + mouthpiece + oRings + zipTies
    const docs = itinerary + maps + passport + logbook + planeTicket + travelIns + vaxRec
    const safety = audSignal + firstAid + knife + meds + o2Kit + sunscreen + vizSignal + wreckReel
    const misc = dryBag + defog + sunglasses + toolKit + towel + waterBottle
    const gearObj = {
        exposure: exposure,
        tech: tech,
        backups: backups,
        docs: docs,
        safety: safety,
        misc: misc
    }
    return gearObj
}