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
        range: [1, 1, 0],
        type: 'support-weapon',
        coverage: [1, 1, 0.5, 0, 0],
        objectives: []
    },
    {
        id: 2,
        name: "APW-1 Anti-Materiel Rifle",
        icon: strat2,
        range: [1, 1, 0],
        type: 'support-weapon',
        coverage: [0.5, 1, 1.5, 1, 0],
        objectives: []
    },
    {
        id: 3,
        name: "M-105 Stalwart",
        icon: strat3,
        range: [1, 1, 0],
        type: 'support-weapon',
        coverage: [2, 0.5, 0, 0, 0],
        objectives: []
    },
    {
        id: 4,
        name: "EAT-17 Expendable Anti-Tank",
        icon: strat4,
        range: [1, 1, 0],
        type: 'support-weapon',
        coverage: [0, 0, 0, 1, 1],
        objectives: []
    },
    {
        id: 5,
        name: "GR-8 Recoilless Rifle",
        icon: strat5,
        range: [1, 1, 0],
        type: 'support-weapon',
        coverage: [0, 0, 0, 1, 1],
        objectives: []
    },
    {
        id: 6,
        name: "FLAM-40 Flamethrower",
        icon: strat6,
        range: [1, 0, 0],
        type: 'support-weapon',
        coverage: [1, 1, 1, 1, 0],
        objectives: []
    },
    {
        id: 7,
        name: "AC-8 Autocannon",
        icon: strat6,
        range: [1, 0, 0],
        type: 'support-weapon',
        coverage: [1, 1, 1, 1, 0],
        objectives: []
    },
]

export const boosterData = []
