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
export const strategemData = [
    {
        id: 1,
        name: "MG-43 Machine Gun",
        icon: strat1,
        offensiveRange: [1, 1, 0],
        type: 'support-weapon',
        coverage: [1, 1, 0.5, 0, 0],
        objectives: []
    },
    {
        id: 2,
        name: "APW-1 Anti-Materiel Rifle",
        icon: strat2,
        offensiveRange: [1, 1, 0],
        type: 'support-weapon',
        coverage: [0.5, 1, 1.5, 1, 0],
        objectives: []
    },
    {
        id: 3,
        name: "M-105 Stalwart",
        icon: strat3,
        offensiveRange: [1, 1, 0],
        type: 'support-weapon',
        coverage: [2, 0.5, 0, 0, 0],
        objectives: []
    },
    {
        id: 4,
        name: "EAT-17 Expendable Anti-Tank",
        icon: strat4,
        offensiveRange: [1, 1, 0],
        type: 'support-weapon',
        coverage: [0, 0, 0, 1, 1],
        objectives: []
    },
    {
        id: 5,
        name: "GR-8 Recoilless Rifle",
        icon: strat5,
        offensiveRange: [1, 1, 0],
        type: 'support-weapon',
        coverage: [0, 0, 0, 1, 1],
        objectives: []
    },
    {
        id: 6,
        name: "FLAM-40 Flamethrower",
        icon: strat6,
        offensiveRange: [1, 0, 0],
        type: 'support-weapon',
        coverage: [1, 1, 1, 1, 0],
        objectives: []
    },
    {
        id: 7,
        name: "AC-8 Autocannon",
        icon: strat7,
        offensiveRange: [1, 1, 0.5],
        type: 'support-weapon',
        coverage: [1, 1, 1, 1, 0],
        objectives: []
    },
    {
        id: 8,
        name: "MG-206 Heavy Machine Gun",
        icon: strat8,
        offensiveRange: [0.5, 1, 0],
        type: 'support-weapon',
        coverage: [0.5, 1, 1, 1, 0],
        objectives: []
    },
    {
        id: 9,
        name: "RS-422 Railgun",
        icon: strat9,
        offensiveRange: [1, 1, 0.5],
        type: 'support-weapon',
        coverage: [0, 1, 2, 1, 0],
        objectives: []
    },
    {
        id: 10,
        name: "FAF-14 Spear",
        icon: strat10,
        offensiveRange: [0, 0.5, 1],
        type: 'support-weapon',
        coverage: [0, 0, 0, 0.5, 1],
        objectives: []
    },
    {
        id: 11,
        name: "Orbital Gatling Barrage",
        icon: stratgatlingbarrage,
        offensiveRange: [1, 1, 0],
        type: 'orbital',
        coverage: [1, 1, 0.5, 0, 0],
        objectives: []
    },
    {
        id: 12,
        name: "Orbital Airburst Strike",
        icon: stratairburst,
        offensiveRange: [0.5, 1, 0],
        type: 'orbital',
        coverage: [1, 1, 0.5, 0, 0],
        objectives: []
    },
    {
        id: 13,
        name: "Orbital 120mm HE Barrage",
        icon: strat120mm,
        offensiveRange: [0, 1, 0],
        type: 'orbital',
        coverage: [0.5, 0.5, 0.5, 0.5, 0.5],
        objectives: []
    },
    {
        id: 14,
        name: "Orbital 380mm HE Barrage",
        icon: strat380mm,
        offensiveRange: [0, 1, 0],
        type: 'orbital',
        coverage: [0.5, 0.5, 0.5, 0.5, 0.5],
        objectives: []
    },
    {
        id: 15,
        name: "Orbital Walking Barrage",
        icon: stratwalkingbarrage,
        offensiveRange: [0.5, 1, 0],
        type: 'orbital',
        coverage: [0.5, 0.5, 0.5, 0.5, 0.5],
        objectives: []
    },
    {
        id: 16,
        name: "Orbital Laser",
        icon: stratorbitalLaser,
        offensiveRange: [1, 1, 0],
        type: 'orbital',
        coverage: [1, 1, 1, 0.5, 0.5],
        objectives: []
    },
    {
        id: 17,
        name: "Orbital Railcannon Strike",
        icon: stratorbitalRail,
        offensiveRange: [1, 1, 0],
        type: 'orbital',
        coverage: [0, 0, 0, 1, 1],
        objectives: []
    },
    {
        id: 18,
        name: "Eagle Strafing Run",
        icon: stratstrafingrun,
        offensiveRange: [1, 1, 0],
        type: 'eagle',
        coverage: [1, 1, 0.5, 0, 0],
        objectives: []
    },
    {
        id: 19,
        name: "Eagle Airstrike",
        icon: stratairstrike,
        offensiveRange: [1, 1, 0],
        type: 'eagle',
        coverage: [1, 1, 1, 0.5, 0],
        objectives: []
    },
    {
        id: 20,
        name: "Eagle Cluster Bomb",
        icon: stratcluster,
        offensiveRange: [1, 1, 0],
        type: 'eagle',
        coverage: [1, 1, 1, 0, 0],
        objectives: []
    },
    {
        id: 21,
        name: "Eagle Napalm Airstrike",
        icon: stratnapalm,
        offensiveRange: [1, 1, 0],
        type: 'eagle',
        coverage: [1, 1, 0.5, 0, 0],
        objectives: []
    },
    {
        id: 22,
        name: "Lift-850 Jump Pack",
        icon: stratjumppack,
        type: 'backpack',
        coverage: [0, 0, 0, 0, 0],
        objectives: []
    },
    {
        id: 23,
        name: "Eagle Smoke Strike",
        icon: stratsmokestrike,
        type: 'eagle',
        coverage: [0, 0, 0, 0, 0],
        objectives: []
    },
    {
        id: 23,
        name: "Eagle Smoke Strike",
        icon: stratsmokestrike,
        offensiveRange: [0, 0, 0],
        type: 'eagle',
        coverage: [0, 0, 0, 0, 0],
        objectives: []
    },

]

// to do: balance coverage and offensiveRange once you get the visualisations going

export const boosterData = []
