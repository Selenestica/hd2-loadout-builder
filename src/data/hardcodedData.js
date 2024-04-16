import strat1 from '../assets/strat-1.bmp'
import strat2 from '../assets/strat-2.bmp'
import strat3 from '../assets/strat-3.bmp'
import strat4 from '../assets/strat-4.bmp'
import strat5 from '../assets/strat-5.bmp'
import strat6 from '../assets/strat-6.bmp'
import strat7 from '../assets/strat-7.bmp'
import strat8 from '../assets/strat-8.bmp'
import strat9 from '../assets/strat-9.bmp'
import strat10 from '../assets/strat-10.bmp'
import strat120mm from '../assets/strat-120mm.bmp'
import strat380mm from '../assets/strat-380mm.bmp'
import strat500kg from '../assets/strat-500kg.bmp'
import stratairburst from '../assets/strat-airburst.bmp'
import stratairstrike from '../assets/strat-airstrike.bmp'
import stratarcthrower from '../assets/strat-arcthrower.bmp'
import stratautocannonturret from '../assets/strat-autocannonturret.bmp'
import stratballisticshield from '../assets/strat-ballisticshield.bmp'
import stratcluster from '../assets/strat-cluster.bmp'
import stratems from '../assets/strat-ems.bmp'
import stratexo45patriot from '../assets/strat-exo45patriot.bmp'
import stratgasstrike from '../assets/strat-gasstrike.bmp'
import stratgatlingbarrage from '../assets/strat-gatlingbarrage.bmp'
import stratgatlingturret from '../assets/strat-gatlingturret.bmp'
import stratgrenadelauncher from '../assets/strat-grenadelauncher.bmp'
import stratguarddogAR from '../assets/strat-guarddogAR.bmp'
import stratguarddogrover from '../assets/strat-guarddogrover.bmp'
import strathmgemplacement from '../assets/strat-hmgemplacement.bmp'
import stratincendiarymines from '../assets/strat-incendiarymines.bmp'
import stratjumppack from '../assets/strat-jumppack.bmp'
import stratlasercannon from '../assets/strat-lasercannon.bmp'
import stratmg43sentry from '../assets/strat-mg43sentry.bmp'
import stratminefieldpersonn from '../assets/strat-minefieldpersonn.bmp'
import stratmortar from '../assets/strat-mortar.bmp'
import stratmortarEMSsentry from '../assets/strat-mortarEMSsentry.bmp'
import stratnapalm from '../assets/strat-napalm.bmp'
import stratorbitalLaser from '../assets/strat-orbitalLaser.bmp'
import stratorbitalRail from '../assets/strat-orbitalRail.bmp'
import stratorbitalsmoke from '../assets/strat-orbitalsmoke.bmp'
import stratprecisionstrike from '../assets/strat-precisionstrike.bmp'
import stratquasar from '../assets/strat-quasar.bmp'
import stratrocketpods from '../assets/strat-rocketpods.bmp'
import stratrocketsentry from '../assets/strat-rocketsentry.bmp'
import stratshieldpack from '../assets/strat-shieldpack.bmp'
import stratshieldrelay from '../assets/strat-shieldrelay.bmp'
import stratsmokestrike from '../assets/strat-smokestrike.bmp'
import stratstrafingrun from '../assets/strat-strafingrun.bmp'
import stratsupply from '../assets/strat-supply.bmp'
import stratteslatower from '../assets/strat-teslatower.bmp'
import stratwalkingbarrage from '../assets/strat-walkingbarrage.bmp'

export const primaryWeaponData = []

export const secondaryWeaponData = []

export const grenadeData = []

export const armorData = []

const strategemTypes = ['back']
const coverageCategories = [0, 1, 2, 3, 4]
const objectives = ['bughole', 'fabricatorVent', 'radioTower', 'shriekerNest']
const uptimes = ['very low', 'low', 'medium', 'high', 'very high']
export const strategemData = [
    {
        id: 1,
        name: "MG-43 Machine Gun",
        icon: strat1,
        offensiveRange: [1, 1, 0],
        type: 'support-weapon',
        color: 'blue',
        coverage: [1, 1, 0.5, 0, 0],
        uptime: 'high',
        objectives: []
    },
    {
        id: 2,
        name: "APW-1 Anti-Materiel Rifle",
        icon: strat2,
        offensiveRange: [1, 1, 0],
        type: 'support-weapon',
        color: 'blue',
        coverage: [0.5, 1, 1.5, 1, 0],
        uptime: 'very high',
        objectives: []
    },
    {
        id: 3,
        name: "M-105 Stalwart",
        icon: strat3,
        offensiveRange: [1, 1, 0],
        type: 'support-weapon',
        color: 'blue',
        coverage: [2, 0.5, 0, 0, 0],
        uptime: 'very high',
        objectives: []
    },
    {
        id: 4,
        name: "EAT-17 Expendable Anti-Tank",
        icon: strat4,
        offensiveRange: [1, 1, 0],
        type: 'support-weapon',
        color: 'blue',
        coverage: [0, 0, 0, 1, 1],
        uptime: 'very high',
        objectives: []
    },
    {
        id: 5,
        name: "GR-8 Recoilless Rifle",
        icon: strat5,
        offensiveRange: [1, 1, 0],
        type: 'support-weapon',
        color: 'blue',
        coverage: [0, 0, 0, 1, 1],
        uptime: 'very high',
        objectives: []
    },
    {
        id: 6,
        name: "FLAM-40 Flamethrower",
        icon: strat6,
        offensiveRange: [1, 0, 0],
        type: 'support-weapon',
        color: 'blue',
        coverage: [1, 1, 1, 1, 0],
        uptime: 'very high',
        objectives: []
    },
    {
        id: 7,
        name: "AC-8 Autocannon",
        icon: strat7,
        offensiveRange: [1, 1, 0.5],
        type: 'support-weapon',
        color: 'blue',
        coverage: [1, 1, 1, 1, 0],
        uptime: 'very high',
        objectives: []
    },
    {
        id: 8,
        name: "MG-206 Heavy Machine Gun",
        icon: strat8,
        offensiveRange: [0.5, 1, 0],
        type: 'support-weapon',
        color: 'blue',
        coverage: [0.5, 1, 1, 1, 0],
        uptime: 'medium',
        objectives: []
    },
    {
        id: 9,
        name: "RS-422 Railgun",
        icon: strat9,
        offensiveRange: [1, 1, 0.5],
        type: 'support-weapon',
        color: 'blue',
        coverage: [0, 1, 2, 1, 0],
        uptime: 'very high',
        objectives: []
    },
    {
        id: 10,
        name: "FAF-14 Spear",
        icon: strat10,
        offensiveRange: [0, 0.5, 1],
        type: 'support-weapon',
        color: 'blue',
        coverage: [0, 0, 0, 0.5, 1],
        uptime: 'very high',
        objectives: []
    },
    {
        id: 11,
        name: "Orbital Gatling Barrage",
        icon: stratgatlingbarrage,
        offensiveRange: [1, 1, 0],
        type: 'orbital',
        color: 'red',
        coverage: [1, 1, 0.5, 0, 0],
        uptime: 'high',
        objectives: []
    },
    {
        id: 12,
        name: "Orbital Airburst Strike",
        icon: stratairburst,
        offensiveRange: [0.5, 1, 0],
        type: 'orbital',
        color: 'red',
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
        color: 'red',
        coverage: [0.5, 0.5, 0.5, 0.5, 0.5],
        uptime: 'low',
        objectives: []
    },
    {
        id: 14,
        name: "Orbital 380mm HE Barrage",
        icon: strat380mm,
        offensiveRange: [0, 1, 0],
        type: 'orbital',
        color: 'red',
        coverage: [0.5, 0.5, 0.5, 0.5, 0.5],
        uptime: 'low',
        objectives: []
    },
    {
        id: 15,
        name: "Orbital Walking Barrage",
        icon: stratwalkingbarrage,
        offensiveRange: [0.5, 1, 0.5],
        type: 'orbital',
        color: 'red',
        coverage: [0.5, 0.5, 0.5, 0.5, 0.5],
        uptime: 'low',
        objectives: []
    },
    {
        id: 16,
        name: "Orbital Laser",
        icon: stratorbitalLaser,
        offensiveRange: [1, 1, 0],
        type: 'orbital',
        color: 'red',
        coverage: [1, 1, 1, 1, 0.5],
        uptime: 'very low',
        objectives: []
    },
    {
        id: 17,
        name: "Orbital Railcannon Strike",
        icon: stratorbitalRail,
        offensiveRange: [1, 1, 0],
        type: 'orbital',
        color: 'red',
        coverage: [0, 0, 0, 1, 1],
        uptime: 'low',
        objectives: []
    },
    {
        id: 18,
        name: "Eagle Strafing Run",
        icon: stratstrafingrun,
        offensiveRange: [1, 1, 0],
        type: 'eagle',
        color: 'red',
        coverage: [1, 1, 0.5, 0, 0],
        uptime: 'high',
        objectives: []
    },
    {
        id: 19,
        name: "Eagle Airstrike",
        icon: stratairstrike,
        offensiveRange: [1, 1, 0],
        type: 'eagle',
        color: 'red',
        coverage: [1, 1, 1, 0.5, 0],
        uptime: 'medium',
        objectives: []
    },
    {
        id: 20,
        name: "Eagle Cluster Bomb",
        icon: stratcluster,
        offensiveRange: [1, 1, 0],
        type: 'eagle',
        color: 'red',
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
        color: 'red',
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
        color: 'blue',
        coverage: [0, 0, 0, 0, 0],
        uptime: 'very high',
        objectives: []
    },
    {
        id: 23,
        name: "Eagle Smoke Strike",
        icon: stratsmokestrike,
        offensiveRange: [0, 0, 0],
        type: 'eagle',
        color: 'red',
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
        color: 'red',
        coverage: [0, 0, 0, 0.5, 0.5],
        uptime: 'high',
        objectives: []
    },
    {
        id: 25,
        name: "Eagle 500kg Bomb",
        icon: strat500kg,
        offensiveRange: [1, 1, 0],
        type: 'eagle',
        color: 'red',
        coverage: [0, 0, 0, 0.5, 1],
        uptime: 'medium',
        objectives: []
    },
    {
        id: 26,
        name: "Orbital Precision Strike",
        icon: stratprecisionstrike,
        offensiveRange: [1, 1, 0],
        type: 'orbital',
        color: 'red',
        coverage: [0, 0, 0.5, 0.5, 0.5],
        uptime: 'high',
        objectives: []
    },
    {
        id: 27,
        name: "Orbital Gas Strike",
        icon: stratgasstrike,
        offensiveRange: [1, 1, 0],
        type: 'orbital',
        color: 'red',
        coverage: [1.5, 1.5, 0.5, 0, 0],
        uptime: 'high',
        objectives: []
    },
    {
        id: 28,
        name: "Orbital EMS Strike",
        icon: stratems,
        offensiveRange: [0, 0, 0],
        type: 'orbital',
        color: 'red',
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
        color: 'red',
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
        color: 'green',
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
        color: 'green',
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
        color: 'green',
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
        color: 'green',
        coverage: [1, 1, 1, 0, 0],
        uptime: 'medium',
        objectives: []
    },
    {
        id: 34,
        name: "B-1 Supply Pack",
        icon: stratsupply,
        offensiveRange: [0, 0, 0],
        type: 'backpack',
        color: 'blue',
        coverage: [0, 0, 0, 0, 0],
        uptime: 'very high',
        objectives: []
    },
    {
        id: 35,
        name: "GL-21 Grenade Launcher",
        icon: stratgrenadelauncher,
        offensiveRange: [1, 1, 0],
        type: 'support-weapon',
        color: 'blue',
        coverage: [1, 1, 1, 0.5, 0],
        uptime: 'very high',
        objectives: []
    },
    {
        id: 36,
        name: "LAS-98 Laser Cannon",
        icon: stratlasercannon,
        offensiveRange: [0.5, 1, 1],
        type: 'support-weapon',
        color: 'blue',
        coverage: [1, 1, 1, 1, 0],
        uptime: 'very high',
        objectives: []
    },
    {
        id: 37,
        name: "MD-I4 Incendiary Mines",
        icon: stratincendiarymines,
        offensiveRange: [0, 1, 0],
        type: 'emplacement',
        color: 'green',
        coverage: [1, 1, 1, 0, 0],
        uptime: 'medium',
        objectives: []
    },
    {
        id: 38,
        name: "AX/LAS-5 Guard Dog Rover",
        icon: stratguarddogrover,
        offensiveRange: [1, 0.5, 0],
        type: 'backpack',
        color: 'blue',
        coverage: [1, 1, 0.5, 0, 0],
        uptime: 'very high',
        objectives: []
    },
    {
        id: 39,
        name: "SH-20 Ballistic Shield Backpack",
        icon: stratballisticshield,
        offensiveRange: [0, 0, 0],
        type: 'backpack',
        color: 'blue',
        coverage: [0, 0, 0, 0, 0],
        uptime: 'very high',
        objectives: []
    },
    {
        id: 40,
        name: "ARC-3 Arc Thrower",
        icon: stratarcthrower,
        offensiveRange: [0, 1, 0],
        type: 'support-weapon',
        color: 'blue',
        coverage: [1, 1, 1, 0.5, 0],
        uptime: 'very high',
        objectives: []
    },
    {
        id: 41,
        name: "LAS-99 Quasar Cannon",
        icon: stratquasar,
        offensiveRange: [0, 1, 1],
        type: 'support-weapon',
        color: 'blue',
        coverage: [0, 0, 0, 1, 1],
        uptime: 'very high',
        objectives: []
    },
    {
        id: 42,
        name: "SH-32 Shield Generator Pack",
        icon: stratshieldpack,
        offensiveRange: [0, 0, 0],
        type: 'backpack',
        color: 'blue',
        coverage: [0, 0, 0, 0, 0],
        uptime: 'very high',
        objectives: []
    },
    {
        id: 43,
        name: "A/MG-43 Machine Gun Sentry",
        icon: stratmg43sentry,
        offensiveRange: [1, 1, 0],
        type: 'turret',
        color: 'green',
        coverage: [1, 1, 0, 0, 0],
        uptime: 'medium',
        objectives: []
    },
    {
        id: 44,
        name: "A/G-16 Gatling Sentry",
        icon: stratgatlingturret,
        offensiveRange: [1, 1, 0],
        type: 'turret',
        color: 'green',
        coverage: [1, 1, 0, 0, 0],
        uptime: 'medium',
        objectives: []
    },
    {
        id: 45,
        name: "A/M-12 Mortar Sentry",
        icon: stratmortar,
        offensiveRange: [1, 1, 0.5],
        type: 'turret',
        color: 'green',
        coverage: [1, 1, 1, 0, 0],
        uptime: 'medium',
        objectives: []
    },
    {
        id: 46,
        name: "AX/AR-23 Guard Dog",
        icon: stratguarddogAR,
        offensiveRange: [1, 0.5, 0],
        type: 'backpack',
        color: 'blue',
        coverage: [1, 1, 0, 0, 0],
        uptime: 'very high',
        objectives: []
    },
    {
        id: 47,
        name: "A/AC-8 Autocannon Sentry",
        icon: stratautocannonturret,
        offensiveRange: [0, 1, 1],
        type: 'turret',
        color: 'green',
        coverage: [0.5, 1, 1, 1, 1],
        uptime: 'medium',
        objectives: []
    },
    {
        id: 48,
        name: "A/MLS-4X Rocket Sentry",
        icon: stratrocketsentry,
        offensiveRange: [0.5, 1, 0],
        type: 'turret',
        color: 'green',
        coverage: [0.5, 1, 1, 0.5, 0],
        uptime: 'medium',
        objectives: []
    },
    {
        id: 49,
        name: "A/M-23 EMS Mortar Sentry",
        icon: stratmortarEMSsentry,
        offensiveRange: [1, 1, 0.5],
        type: 'turret',
        color: 'green',
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
        color: 'blue',
        coverage: [1, 1, 1, 1, 1],
        uptime: 'low',
        objectives: []
    },

]

// to do: balance coverage and offensiveRange once you get the visualisations going

export const boosterData = []
