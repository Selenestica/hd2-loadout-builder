import strat1 from '../assets/strat-1.webp'
import strat2 from '../assets/strat-2.webp'
import strat3 from '../assets/strat-3.webp'
import strat4 from '../assets/strat-4.webp'
import strat5 from '../assets/strat-5.webp'
import strat6 from '../assets/strat-6.webp'
import strat7 from '../assets/strat-7.webp'
import strat8 from '../assets/strat-8.webp'
import strat9 from '../assets/strat-9.webp'
import strat10 from '../assets/strat-10.webp'
import strat120mm from '../assets/strat-120mm.webp'
import strat380mm from '../assets/strat-380mm.webp'
import strat500kg from '../assets/strat-500kg.webp'
import stratairburst from '../assets/strat-airburst.webp'
import stratairstrike from '../assets/strat-airstrike.webp'
import stratarcthrower from '../assets/strat-arcthrower.webp'
import stratautocannonturret from '../assets/strat-autocannonturret.webp'
import stratballisticshield from '../assets/strat-ballisticshield.webp'
import stratcluster from '../assets/strat-cluster.webp'
import stratems from '../assets/strat-ems.webp'
import stratexo45patriot from '../assets/strat-exo45patriot.webp'
import stratexo49Emancipator from '../assets/emancipator.webp'
import stratgasstrike from '../assets/strat-gasstrike.webp'
import stratgatlingbarrage from '../assets/strat-gatlingbarrage.webp'
import stratgatlingturret from '../assets/strat-gatlingturret.webp'
import stratgrenadelauncher from '../assets/strat-grenadelauncher.webp'
import stratguarddogAR from '../assets/strat-guarddogAR.webp'
import stratguarddogrover from '../assets/strat-guarddogrover.webp'
import strathmgemplacement from '../assets/strat-hmgemplacement.webp'
import stratincendiarymines from '../assets/strat-incendiarymines.webp'
import stratjumppack from '../assets/strat-jumppack.webp'
import stratlasercannon from '../assets/strat-lasercannon.webp'
import stratmg43sentry from '../assets/strat-mg43sentry.webp'
import stratminefieldpersonn from '../assets/strat-minefieldpersonn.webp'
import stratmortar from '../assets/strat-mortar.webp'
import stratmortarEMSsentry from '../assets/strat-mortarEMSsentry.webp'
import stratnapalm from '../assets/strat-napalm.webp'
import stratorbitalLaser from '../assets/strat-orbitalLaser.webp'
import stratorbitalRail from '../assets/strat-orbitalRail.webp'
import stratorbitalsmoke from '../assets/strat-orbitalsmoke.webp'
import stratprecisionstrike from '../assets/strat-precisionstrike.webp'
import stratquasar from '../assets/strat-quasar.webp'
import stratrocketpods from '../assets/strat-rocketpods.webp'
import stratrocketsentry from '../assets/strat-rocketsentry.webp'
import stratshieldpack from '../assets/strat-shieldpack.webp'
import stratshieldrelay from '../assets/strat-shieldrelay.webp'
import stratsmokestrike from '../assets/strat-smokestrike.webp'
import stratstrafingrun from '../assets/strat-strafingrun.webp'
import stratsupply from '../assets/strat-supply.webp'
import stratteslatower from '../assets/strat-teslatower.webp'
import stratwalkingbarrage from '../assets/strat-walkingbarrage.webp'
import airburstLauncher from '../assets/airburstLauncher.webp'
import commando from '../assets/strat-commando.webp'
import stratATmines from '../assets/strat-atmines.webp'
import orbitalNapalm from '../assets/orbitalNapalm.webp'
import steriliser from '../assets/steriliser.webp'
import dogBreath from '../assets/dogBreath.webp'
import flameSentry from '../assets/flameSentry.webp'
import ATemplacement from '../assets/ATemplacement.webp'
import directionalShield from '../assets/directionalShield.webp'
import frv from '../assets/frv.webp'
import wasp from '../assets/wasp.webp'
import gasMines from '../assets/gasMines.webp'
import portableHellbomb from '../assets/portable-hellbomb.webp'
import hoverpack from '../assets/hoverpack.webp'
import grenadierBattlement from '../assets/grenadierBattlement.webp'
import oneTrueFlag from '../assets/oneTrueFlag.webp'
import deescalator from '../assets/deescalator.webp'
import k9 from '../assets/k9.webp'
import warp from '../assets/warp.webp'
import epoch from '../assets/epoch.webp'
import laserSentry from '../assets/laserSentry.webp'
import silo from '../assets/silo.webp'
import spearGun from '../assets/spearGun.webp'
import eatNapalm from '../assets/eatNapalm.webp'

import { armorData } from './armors'
import { grenadeData } from './grenades'
import { primaryWeaponData } from './primaries'
import { secondaryWeaponData } from './secondaries'

export { armorData }
export { grenadeData }
export { primaryWeaponData }
export { secondaryWeaponData }

const stratBlue = '#457b9d'
const stratRed = '#e76f51'
const stratGreen = '#266653'

/* const strategemTypes = ['back']
const coverageCategories = [0, 1, 2, 3, 4]
const objectives = ['bughole', 'fabricatorVent', 'radioTower', 'shriekerNest']
const uptimes = ['very low', 'low', 'medium', 'high', 'very high'] */
export const strategemData = [
    {
        id: 1,
        name: "MG-43 Machine Gun",
        icon: strat1,
        offensiveRange: [1, 1, 0],
        type: 'support-weapon',
        color: stratBlue,
        coverage: [1.25, 1.5, 0.75, 0, 0],
        supplyBuffedCoverage: [1.5, 1.5, 1, 0, 0],
        supportSlotNecessary: true,
        uptime: 'high',
        objectives: []
    },
    {
        id: 2,
        name: "APW-1 Anti-Materiel Rifle",
        icon: strat2,
        offensiveRange: [0.5, 1, 1],
        type: 'support-weapon',
        color: stratBlue,
        coverage: [0.25, 1, 1.5, 1, 0],
        supplyBuffedCoverage: [0.5, 1.5, 2.25, 1.5, 0],
        supportSlotNecessary: true,
        uptime: 'very high',
        objectives: []
    },
    {
        id: 3,
        name: "M-105 Stalwart",
        icon: strat3,
        offensiveRange: [1, 1, 0],
        type: 'support-weapon',
        color: stratBlue,
        coverage: [2, 0.5, 0, 0, 0],
        supplyBuffedCoverage: [2.5, 1, 0, 0, 0],
        supportSlotNecessary: true,
        uptime: 'very high',
        objectives: []
    },
    {
        id: 4,
        name: "EAT-17 Expendable Anti-Tank",
        icon: strat4,
        offensiveRange: [1, 1, 0],
        type: 'support-weapon',
        color: stratBlue,
        coverage: [0, 0, 0, 1, 1.5],
        supportSlotNecessary: false,
        uptime: 'very high',
        objectives: []
    },
    {
        id: 5,
        name: "GR-8 Recoilless Rifle",
        icon: strat5,
        offensiveRange: [1, 1, 0],
        type: 'support-weapon',
        color: stratBlue,
        coverage: [0, 0, 0.2, 1, 2],
        supportSlotNecessary: true,
        uptime: 'very high',
        hasBackpack: true,
        objectives: []
    },
    {
        id: 6,
        name: "FLAM-40 Flamethrower",
        icon: strat6,
        offensiveRange: [1, 0, 0],
        type: 'support-weapon',
        color: stratBlue,
        coverage: [1, 1, 1, 1, 0],
        supplyBuffedCoverage: [1.5, 1.5, 1.5, 1.5, 0],
        supportSlotNecessary: true,
        uptime: 'very high',
        objectives: []
    },
    {
        id: 7,
        name: "AC-8 Autocannon",
        icon: strat7,
        offensiveRange: [0.8, 1, 0.5],
        type: 'support-weapon',
        color: stratBlue,
        coverage: [1, 1, 1.5, 1, 0.2],
        supportSlotNecessary: true,
        uptime: 'very high',
        hasBackpack: true,
        objectives: []
    },
    {
        id: 8,
        name: "MG-206 Heavy Machine Gun",
        icon: strat8,
        offensiveRange: [0.5, 1, 0],
        type: 'support-weapon',
        color: stratBlue,
        coverage: [0.5, 1, 1, 1, 0],
        supplyBuffedCoverage: [0.75, 1.25, 1.25, 1.5, 0],
        supportSlotNecessary: true,
        uptime: 'high',
        objectives: []
    },
    {
        id: 9,
        name: "RS-422 Railgun",
        icon: strat9,
        offensiveRange: [1, 1, 0.5],
        type: 'support-weapon',
        color: stratBlue,
        coverage: [0, 1, 1.75, 1, 0],
        supplyBuffedCoverage: [0.5, 1.5, 2.5, 1.5, 0],
        supportSlotNecessary: true,
        uptime: 'very high',
        objectives: []
    },
    {
        id: 10,
        name: "FAF-14 Spear",
        icon: strat10,
        offensiveRange: [0, 0.5, 1],
        type: 'support-weapon',
        color: stratBlue,
        coverage: [0, 0, 0, 0.5, 2],
        supportSlotNecessary: true,
        uptime: 'very high',
        hasBackpack: true,
        objectives: []
    },
    {
        id: 11,
        name: "Orbital Gatling Barrage",
        icon: stratgatlingbarrage,
        offensiveRange: [1, 1, 0],
        type: 'orbital',
        color: stratRed,
        coverage: [1, 1, 1, 0.5, 0.2],
        uptime: 'high',
        objectives: []
    },
    {
        id: 12,
        name: "Orbital Airburst Strike",
        icon: stratairburst,
        offensiveRange: [0.5, 1, 0],
        type: 'orbital',
        color: stratRed,
        coverage: [1, 1, 0.5, 0, 0],
        uptime: 'high',
        objectives: []
    },
    {
        id: 13,
        name: "Orbital 120mm HE Barrage",
        icon: strat120mm,
        offensiveRange: [0, 1, 0],
        type: 'orbital',
        color: stratRed,
        coverage: [0.3, 0.3, 0.3, 0.3, 0.2],
        uptime: 'low',
        objectives: []
    },
    {
        id: 14,
        name: "Orbital 380mm HE Barrage",
        icon: strat380mm,
        offensiveRange: [0, 1, 0],
        type: 'orbital',
        color: stratRed,
        coverage: [0.3, 0.3, 0.3, 0.35, 0.35],
        uptime: 'low',
        objectives: []
    },
    {
        id: 15,
        name: "Orbital Walking Barrage",
        icon: stratwalkingbarrage,
        offensiveRange: [0.5, 1, 0.5],
        type: 'orbital',
        color: stratRed,
        coverage: [0.3, 0.3, 0.3, 0.3, 0.3],
        uptime: 'low',
        objectives: []
    },
    {
        id: 16,
        name: "Orbital Laser",
        icon: stratorbitalLaser,
        offensiveRange: [1, 1, 0],
        type: 'orbital',
        color: stratRed,
        coverage: [0.3, 0.3, 0.3, 0.3, 0.3],
        uptime: 'very low',
        objectives: []
    },
    {
        id: 17,
        name: "Orbital Railcannon Strike",
        icon: stratorbitalRail,
        offensiveRange: [1, 1, 0],
        type: 'orbital',
        color: stratRed,
        coverage: [0, 0, 0, 0.5, 0.5],
        uptime: 'low',
        objectives: []
    },
    {
        id: 18,
        name: "Eagle Strafing Run",
        icon: stratstrafingrun,
        offensiveRange: [1, 1, 0],
        type: 'eagle',
        color: stratRed,
        coverage: [1, 0.75, 0.75, 0.2, 0.15],
        uptime: 'high',
        objectives: []
    },
    {
        id: 19,
        name: "Eagle Airstrike",
        icon: stratairstrike,
        offensiveRange: [1, 1, 0],
        type: 'eagle',
        color: stratRed,
        coverage: [0.75, 1, 1, 0.75, 0.5],
        uptime: 'high',
        objectives: []
    },
    {
        id: 20,
        name: "Eagle Cluster Bomb",
        icon: stratcluster,
        offensiveRange: [1, 1, 0],
        type: 'eagle',
        color: stratRed,
        coverage: [1, 1, 1, 0, 0],
        uptime: 'high',
        objectives: []
    },
    {
        id: 21,
        name: "Eagle Napalm Airstrike",
        icon: stratnapalm,
        offensiveRange: [1, 1, 0],
        type: 'eagle',
        color: stratRed,
        coverage: [1, 1, 0.5, 0, 0],
        uptime: 'high',
        objectives: []
    },
    {
        id: 22,
        name: "Lift-850 Jump Pack",
        icon: stratjumppack,
        offensiveRange: [0, 0, 0],
        type: 'backpack',
        color: stratBlue,
        coverage: [0, 0, 0, 0, 0],
        uptime: 'very high',
        hasBackpack: true,
        objectives: []
    },
    {
        id: 23,
        name: "Eagle Smoke Strike",
        icon: stratsmokestrike,
        offensiveRange: [0, 0, 0],
        type: 'eagle',
        color: stratRed,
        coverage: [0, 0, 0, 0, 0],
        uptime: 'high',
        objectives: []
    },
    {
        id: 24,
        name: "Eagle 110mm Rocket Pods",
        icon: stratrocketpods,
        offensiveRange: [1, 1, 0],
        type: 'eagle',
        color: stratRed,
        coverage: [0, 0, 0, 0.75, 0.75],
        uptime: 'high',
        objectives: []
    },
    {
        id: 25,
        name: "Eagle 500kg Bomb",
        icon: strat500kg,
        offensiveRange: [1, 1, 0],
        type: 'eagle',
        color: stratRed,
        coverage: [0, 0.2, 0.2, 0.5, 1],
        uptime: 'medium',
        objectives: []
    },
    {
        id: 26,
        name: "Orbital Precision Strike",
        icon: stratprecisionstrike,
        offensiveRange: [1, 1, 0],
        type: 'orbital',
        color: stratRed,
        coverage: [0, 0, 0.2, 0.5, 0.75],
        uptime: 'high',
        objectives: []
    },
    {
        id: 27,
        name: "Orbital Gas Strike",
        icon: stratgasstrike,
        offensiveRange: [1, 1, 0],
        type: 'orbital',
        color: stratRed,
        coverage: [1.5, 1.5, 0.2, 0, 0],
        uptime: 'high',
        objectives: []
    },
    {
        id: 28,
        name: "Orbital EMS Strike",
        icon: stratems,
        offensiveRange: [0, 0, 0],
        type: 'orbital',
        color: stratRed,
        coverage: [0, 0, 0, 0, 0],
        uptime: 'high',
        objectives: []
    },
    {
        id: 29,
        name: "Orbital Smoke Strike",
        icon: stratorbitalsmoke,
        offensiveRange: [0, 0, 0],
        type: 'orbital',
        color: stratRed,
        coverage: [0, 0, 0, 0, 0],
        uptime: 'high',
        objectives: []
    },
    {
        id: 30,
        name: "E/MG-101 HMG Emplacement",
        icon: strathmgemplacement,
        offensiveRange: [0.5, 1, 1],
        type: 'turret',
        color: stratGreen,
        coverage: [1, 1, 1, 0.5, 0],
        uptime: 'medium',
        objectives: []
    },
    {
        id: 31,
        name: "FX-12 Shield Generator Relay",
        icon: stratshieldrelay,
        offensiveRange: [0, 0, 0],
        type: 'emplacement',
        color: stratGreen,
        coverage: [0, 0, 0, 0, 0],
        uptime: 'high',
        objectives: []
    },
    {
        id: 32,
        name: "A/ARC-3 Tesla Tower",
        icon: stratteslatower,
        offensiveRange: [0, 1, 0],
        type: 'turret',
        color: stratGreen,
        coverage: [1, 1, 1, 0.5, 0],
        uptime: 'medium',
        objectives: []
    },
    {
        id: 33,
        name: "MD-6 Anti-Personnel Minefield",
        icon: stratminefieldpersonn,
        offensiveRange: [0, 1, 0],
        type: 'emplacement',
        color: stratGreen,
        coverage: [0.75, 0.75, 0.75, 0, 0],
        uptime: 'medium',
        objectives: []
    },
    {
        id: 34,
        name: "B-1 Supply Pack",
        icon: stratsupply,
        offensiveRange: [0, 0, 0],
        type: 'backpack',
        color: stratBlue,
        coverage: [0, 0, 0, 0, 0],
        uptime: 'very high',
        hasBackpack: true,
        objectives: []
    },
    {
        id: 35,
        name: "GL-21 Grenade Launcher",
        icon: stratgrenadelauncher,
        offensiveRange: [1, 1, 0],
        type: 'support-weapon',
        color: stratBlue,
        coverage: [1.25, 1.25, 1.25, 0.2, 0],
        supplyBuffedCoverage: [2, 1.5, 1.5, 0.5, 0],
        supportSlotNecessary: true,
        uptime: 'very high',
        objectives: []
    },
    {
        id: 36,
        name: "LAS-98 Laser Cannon",
        icon: stratlasercannon,
        offensiveRange: [0.5, 1, 1],
        type: 'support-weapon',
        color: stratBlue,
        coverage: [0.75, 1, 1, 1, 0],
        supportSlotNecessary: true,
        uptime: 'very high',
        objectives: []
    },
    {
        id: 37,
        name: "MD-I4 Incendiary Mines",
        icon: stratincendiarymines,
        offensiveRange: [0, 1, 0],
        type: 'emplacement',
        color: stratGreen,
        coverage: [1, 1, 0.75, 0, 0],
        uptime: 'medium',
        objectives: []
    },
    {
        id: 38,
        name: "AX/LAS-5 Guard Dog Rover",
        icon: stratguarddogrover,
        offensiveRange: [1, 0.5, 0],
        type: 'backpack',
        color: stratBlue,
        coverage: [1, 0.5, 0, 0, 0],
        uptime: 'very high',
        hasBackpack: true,
        objectives: []
    },
    {
        id: 39,
        name: "SH-20 Ballistic Shield Backpack",
        icon: stratballisticshield,
        offensiveRange: [0, 0, 0],
        type: 'backpack',
        color: stratBlue,
        coverage: [0, 0, 0, 0, 0],
        uptime: 'very high',
        hasBackpack: true,
        objectives: []
    },
    {
        id: 40,
        name: "ARC-3 Arc Thrower",
        icon: stratarcthrower,
        offensiveRange: [0, 1, 0],
        type: 'support-weapon',
        color: stratBlue,
        coverage: [1, 1, 1, 0.5, 0],
        supportSlotNecessary: true,
        uptime: 'very high',
        objectives: []
    },
    {
        id: 41,
        name: "LAS-99 Quasar Cannon",
        icon: stratquasar,
        offensiveRange: [0, 1, 1],
        type: 'support-weapon',
        color: stratBlue,
        coverage: [0, 0, 0, 1, 1.5],
        supportSlotNecessary: true,
        uptime: 'very high',
        objectives: []
    },
    {
        id: 42,
        name: "SH-32 Shield Generator Pack",
        icon: stratshieldpack,
        offensiveRange: [0, 0, 0],
        type: 'backpack',
        color: stratBlue,
        coverage: [0, 0, 0, 0, 0],
        uptime: 'very high',
        hasBackpack: true,
        objectives: []
    },
    {
        id: 43,
        name: "A/MG-43 Machine Gun Sentry",
        icon: stratmg43sentry,
        offensiveRange: [1, 1, 0],
        type: 'turret',
        color: stratGreen,
        coverage: [1, 0.8, 0, 0, 0],
        uptime: 'high',
        objectives: []
    },
    {
        id: 44,
        name: "A/G-16 Gatling Sentry",
        icon: stratgatlingturret,
        offensiveRange: [1, 1, 0],
        type: 'turret',
        color: stratGreen,
        coverage: [1, 0.8, 0, 0, 0],
        uptime: 'medium',
        objectives: []
    },
    {
        id: 45,
        name: "A/M-12 Mortar Sentry",
        icon: stratmortar,
        offensiveRange: [1, 1, 0.5],
        type: 'turret',
        color: stratGreen,
        coverage: [0.8, 0.8, 0.8, 0, 0],
        uptime: 'medium',
        objectives: []
    },
    {
        id: 46,
        name: "AX/AR-23 Guard Dog",
        icon: stratguarddogAR,
        offensiveRange: [1, 0.5, 0],
        type: 'backpack',
        color: stratBlue,
        coverage: [0.8, 1, 0.5, 0, 0],
        uptime: 'very high',
        hasBackpack: true,
        objectives: []
    },
    {
        id: 47,
        name: "A/AC-8 Autocannon Sentry",
        icon: stratautocannonturret,
        offensiveRange: [0, 1, 1],
        type: 'turret',
        color: stratGreen,
        coverage: [0.4, 0.7, 0.7, 0.7, 0.7],
        uptime: 'medium',
        objectives: []
    },
    {
        id: 48,
        name: "A/MLS-4X Rocket Sentry",
        icon: stratrocketsentry,
        offensiveRange: [0.5, 1, 0.25],
        type: 'turret',
        color: stratGreen,
        coverage: [0.75, 0.75, 0.75, 0.5, 0.2],
        uptime: 'medium',
        objectives: []
    },
    {
        id: 49,
        name: "A/M-23 EMS Mortar Sentry",
        icon: stratmortarEMSsentry,
        offensiveRange: [1, 1, 0.5],
        type: 'turret',
        color: stratGreen,
        coverage: [0, 0, 0, 0, 0],
        uptime: 'medium',
        objectives: []
    },
    {
        id: 50,
        name: "EXO-45 Patriot Exosuit",
        icon: stratexo45patriot,
        offensiveRange: [1, 1, 0.5],
        type: 'support-weapon',
        color: stratBlue,
        coverage: [0.6, 0.6, 0.6, 0.6, 0.6],
        supportSlotNecessary: false,
        uptime: 'low',
        objectives: []
    },
    {
        id: 51,
        name: "RL-77 Airburst Rocket Launcher",
        icon: airburstLauncher,
        offensiveRange: [0, 0.25, 1],
        type: 'support-weapon',
        color: stratBlue,
        coverage: [1, 1, 0.75, 0.5, 0],
        supportSlotNecessary: true,
        hasBackpack: true,
        uptime: 'very high',
        objectives: []
    },
    {
        id: 52,
        name: "EXO-49 Emancipator Exosuit",
        icon: stratexo49Emancipator,
        offensiveRange: [1, 1, 0.5],
        type: 'support-weapon',
        color: stratBlue,
        coverage: [0.7, 0.7, 1.1, 1.1, 0.3],
        supportSlotNecessary: false,
        uptime: 'low',
        objectives: []
    },
    {
        id: 53,
        name: "MLS-4X Commando",
        icon: commando,
        offensiveRange: [1, 1, 0.5],
        type: 'support-weapon',
        color: stratBlue,
        coverage: [0, 0, 0, 1, 1.25],
        supportSlotNecessary: false,
        uptime: 'very high',
        objectives: []
    },
    {
        id: 54,
        name: "AT Anti-Tank Mines",
        icon: stratATmines,
        offensiveRange: [0, 1, 0],
        type: 'emplacement',
        color: stratGreen,
        coverage: [0, 0, 0, 0.8, 0.6],
        uptime: 'medium',
        objectives: []
    },
    {
        id: 55,
        name: "Orbital Napalm Barrage",
        icon: orbitalNapalm,
        offensiveRange: [0, 1, 0],
        type: 'orbital',
        color: stratRed,
        coverage: [1, 1, 1, 0.5, 0],
        uptime: 'low',
        objectives: []
    },
    {
        id: 56,
        name: "TX-41 Sterilizer",
        icon: steriliser,
        offensiveRange: [1, 0, 0],
        type: 'support-weapon',
        color: stratBlue,
        coverage: [1, 0.2, 0, 0, 0],
        supportSlotNecessary: true,
        uptime: 'very high',
        objectives: []
    },
    {
        id: 57,
        name: "AX/TX-13 Guard Dog Dog Breath",
        icon: dogBreath,
        offensiveRange: [1, 0, 0],
        type: 'backpack',
        color: stratBlue,
        coverage: [0.5, 0, 0, 0, 0],
        hasBackpack: true,
        uptime: 'very high',
        objectives: []
    },
    {
        id: 58,
        name: "A/FLAM-40 Flame Sentry",
        icon: flameSentry,
        offensiveRange: [1, 0, 0],
        type: 'turret',
        color: stratGreen,
        coverage: [1, 1, 0.75, 0, 0],
        uptime: 'medium',
        objectives: []
    },
    {
        id: 59,
        name: "E/AT-12 Anti-Tank Emplacement",
        icon: ATemplacement,
        offensiveRange: [0, 1, 1],
        type: 'turret',
        color: stratGreen,
        coverage: [0.25, 0.25, 0.25, 1, 1],
        uptime: 'medium',
        objectives: []
    },
    {
        id: 60,
        name: "SH-51 Directional Shield",
        icon: directionalShield,
        offensiveRange: [0, 0, 0],
        type: 'backpack',
        color: stratBlue,
        coverage: [0, 0, 0, 0, 0],
        uptime: 'very high',
        hasBackpack: true,
        objectives: []
    },
    {
        id: 61,
        name: "M-102 Fast Recon Vehicle",
        icon: frv,
        offensiveRange: [1, 0, 0],
        type: 'support-weapon',
        color: stratBlue,
        coverage: [1, 0.5, 0.5, 0.5, 0],
        supportSlotNecessary: false,
        uptime: 'medium',
        objectives: []
    },
    {
        id: 62,
        name: "StA-X3 W.A.S.P. Launcher",
        icon: wasp,
        offensiveRange: [0, 1, 1],
        type: 'support-weapon',
        color: stratBlue,
        coverage: [0, 0, 1, 1, 0.33],
        hasBackpack: true,
        uptime: 'very high',
        objectives: []
    },
    {
        id: 63,
        name: "MD-8 Gas Mines",
        icon: gasMines,
        offensiveRange: [0, 1, 0],
        type: 'emplacement',
        color: stratGreen,
        coverage: [1, 1, 0.5, 0.2, 0],
        uptime: 'medium',
        objectives: []
    },
    {
        id: 64,
        name: "Portable Hellbomb",
        icon: portableHellbomb,
        offensiveRange: [1, 0, 0],
        type: 'backpack',
        color: stratBlue,
        coverage: [0.15, 0.15, 0.15, 0.15, 0.15],
        hasBackpack: true,
        uptime: 'low',
        objectives: []
    },
    {
        id: 65,
        name: "LIFT-860 Hover Pack",
        icon: hoverpack,
        offensiveRange: [0, 0, 0],
        type: 'backpack',
        color: stratBlue,
        coverage: [0, 0, 0, 0, 0],
        uptime: 'very high',
        hasBackpack: true,
        objectives: []
    },
    {
        id: 66,
        name: "E/GL-21 Grenadier Battlement",
        icon: grenadierBattlement,
        offensiveRange: [1, 1, 0],
        type: 'emplacement',
        color: stratGreen,
        coverage: [1, 1, 1, 0, 0],
        uptime: 'high',
        objectives: []
    },
    {
        id: 67,
        name: "CQC-1 One True Flag",
        icon: oneTrueFlag,
        offensiveRange: [0.1, 0, 0],
        type: 'support-weapon',
        color: stratBlue,
        coverage: [0.1, 0.1, 0.1, 0, 0],
        uptime: 'high',
        objectives: []
    },
    {
        id: 68,
        name: "GL-52 De-Escalator",
        icon: deescalator,
        offensiveRange: [1, 1, 0],
        type: 'support-weapon',
        color: stratBlue,
        coverage: [0.5, 0.5, 0.5, 0.5, 0],
        supplyBuffedCoverage: [0.5, 0.5, 0.5, 0.5, 0],
        supportSlotNecessary: true,
        uptime: 'very high',
        objectives: []
    },
    /* TO DO: ARC DOG */
    {
        id: 69,
        name: "AX/ARC-3 Guard Dog K-9",
        icon: k9,
        offensiveRange: [1, 0.5, 0],
        type: 'backpack',
        color: stratBlue,
        coverage: [0.5, 0.5, 0.5, 0, 0],
        uptime: 'very high',
        hasBackpack: true,
        objectives: []
    },
    {
        id: 70,
        name: "LIFT-182 Warp Pack",
        icon: warp,
        offensiveRange: [0.5, 0, 0],
        type: 'backpack',
        color: stratBlue,
        coverage: [0.25, 0.25, 0.25, 0, 0],
        uptime: 'very high',
        hasBackpack: true,
        objectives: []
    },
    {
        id: 71,
        name: "PLAS-45 Epoch",
        icon: epoch,
        offensiveRange: [0.5, 1, 0.5],
        type: 'support-weapon',
        color: stratBlue,
        coverage: [0, 0, 0.5, 1, 0.75],
        supplyBuffedCoverage: [0, 0, 1, 1, 0.75],
        uptime: 'very high',
        objectives: []
    },
    {
        id: 72,
        name: "A/LAS-98 Laser Sentry",
        icon: laserSentry,
        offensiveRange: [1, 1, 0],
        type: 'turret',
        color: stratGreen,
        coverage: [0.75, 0.75, 0.5, 0.25, 0],
        uptime: 'medium',
        objectives: []
    },
    {
        id: 73,
        name: "MS-11 Solo Silo",
        icon: silo,
        offensiveRange: [0, 0, 1],
        type: 'support-weapon',
        color: stratBlue,
        coverage: [0, 0, 0, 0, 0.5],
        uptime: 'low',
        supportSlotNecessary: false,
        objectives: []
    },
    {
        id: 74,
        name: "S-11 Speargun",
        icon: spearGun,
        offensiveRange: [1, 1, 0.5],
        type: 'support-weapon',
        color: stratBlue,
        coverage: [0.5, 0.5, 0.5, 1, 0],
        supplyBuffedCoverage: [1, 1, 1, 1, 0],
        uptime: 'very high',
        objectives: []
    },
    {
        id: 75,
        name: "EAT-700 Expendable Napalm",
        icon: eatNapalm,
        offensiveRange: [0, 1, 1],
        type: 'support-weapon',
        color: stratBlue,
        coverage: [1, 1, 1, 0.75, 0],
        uptime: 'high',
        supportSlotNecessary: false,
        objectives: []
    },
]

export function preloadImages() {
    const preload = (src) => {
        const img = new Image()
        img.src = src
    }
    primaryWeaponData.forEach(d => preload(d.icon))
    secondaryWeaponData.forEach(d => preload(d.icon))
    grenadeData.forEach(d => preload(d.icon))
    strategemData.forEach(d => preload(d.icon))
}
