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

export const primaryWeaponData = [
    {
        id: 1,
        name: "AR23 Liberator",
        icon: '#',
        ingameStats: {
            damage: 55,
            capacity: 45,
            recoil: 15,
            fireRate: 640,
            traits: ['light armor penetrating']
        },
        offensiveRange: [1, 1, 0],
        coverage: [1, 0.5, 0, 0, 0],
        sluggish: false,
        stun: false,
        objectives: []
    },
    {
        id: 2,
        name: "AR23P Liberator Penetrator",
        icon: '#',
        ingameStats: {
            damage: 45,
            capacity: 30,
            recoil: 19,
            fireRate: 640,
            traits: ['medium armor penetrating']
        },
        offensiveRange: [1, 1, 0],
        coverage: [1, 1, 0.5, 0, 0],
        sluggish: false,
        stun: false,
        objectives: []
    },
    {
        id: 3,
        name: "AR23C Liberator Concussive",
        icon: '#',
        ingameStats: {
            damage: 55,
            capacity: 30,
            recoil: 28,
            fireRate: 320,
            traits: ['light armor penetrating', 'explosive damage type']
        },
        offensiveRange: [1, 1, 0],
        coverage: [1, 0.5, 0, 0, 0],
        sluggish: false,
        stun: true,
        objectives: []
    },
    {
        id: 4,
        name: "BR-14 Adjudicator",
        icon: '#',
        ingameStats: {
            damage: 80,
            capacity: 25,
            recoil: 50,
            fireRate: 550,
            traits: ['medium armor penetrating']
        },
        offensiveRange: [1, 1, 0.5],
        coverage: [1, 1, 0.5, 0, 0],
        sluggish: false,
        stun: false,
        objectives: []
    },
    {
        id: 5,
        name: "R-63 Diligence",
        icon: '#',
        ingameStats: {
            damage: 112,
            capacity: 20,
            recoil: 35,
            fireRate: 350,
            traits: ['light armor penetrating']
        },
        offensiveRange: [1, 1, 1],
        coverage: [1, 0.5, 0, 0, 0],
        stun: false,
        sluggish: false,
        objectives: []
    },
    {
        id: 6,
        name: "R-63CS Diligence Counter Sniper",
        icon: '#',
        ingameStats: {
            damage: 128,
            capacity: 15,
            recoil: 53,
            fireRate: 350,
            traits: ['medium armor penetrating']
        },
        offensiveRange: [0.5, 1, 1],
        coverage: [1, 1, 0.5, 0, 0],
        stun: false,
        sluggish: true,
        objectives: []
    },
    {
        id: 7,
        name: "SMG-37 Defender",
        icon: '#',
        ingameStats: {
            damage: 70,
            capacity: 45,
            recoil: 10,
            fireRate: 520,
            traits: ['light armor penetrating', 'one handed']
        },
        offensiveRange: [1, 0.5, 0],
        coverage: [1, 0.5, 0, 0, 0],
        stun: false,
        sluggish: false,
        objectives: []
    },
    {
        id: 8,
        name: "SG-8 Punisher",
        icon: '#',
        ingameStats: {
            damage: 405,
            capacity: 16,
            recoil: 120,
            fireRate: 80,
            traits: ['light armor penetrating', 'rounds reload']
        },
        offensiveRange: [1, 0.5, 0],
        coverage: [1, 0.5, 0, 0, 0],
        stun: true,
        sluggish: false,
        objectives: []
    },
    {
        id: 9,
        name: "SG-8S Slugger",
        icon: '#',
        ingameStats: {
            damage: 250,
            capacity: 16,
            recoil: 120,
            fireRate: 80,
            traits: ['medium armor penetrating', 'rounds reload']
        },
        offensiveRange: [1, 1, 0.5],
        coverage: [1, 1, 0.5, 0, 0],
        stun: false,
        sluggish: false,
        objectives: []
    },
    {
        id: 10,
        name: "SG-8P Punisher Plasma",
        icon: '#',
        ingameStats: {
            damage: 250,
            capacity: 8,
            recoil: 110,
            fireRate: 80,
            traits: ['explosive']
        },
        offensiveRange: [1, 0.5, 0],
        coverage: [1, 1, 1, 0.2, 0],
        stun: true,
        sluggish: false,
        objectives: []
    },
    {
        id: 11,
        name: "ARC-12 Blitzer",
        icon: '#',
        ingameStats: {
            damage: 250,
            capacity: 'infinite',
            recoil: 60,
            fireRate: 30,
            traits: []
        },
        offensiveRange: [0.75, 0, 0],
        coverage: [1, 1, 0.5, 0, 0],
        stun: true,
        sluggish: false,
        objectives: []
    },
    {
        id: 12,
        name: "SG-225 Breaker",
        icon: '#',
        ingameStats: {
            damage: 330,
            capacity: 13,
            recoil: 55,
            fireRate: 300,
            traits: ['light armor penetrating']
        },
        offensiveRange: [1, 0.5, 0],
        coverage: [1, 0.5, 0, 0, 0],
        stun: false,
        sluggish: false,
        objectives: []
    },
    {
        id: 13,
        name: "SG-225SP Breaker Spray&Pray",
        icon: '#',
        ingameStats: {
            damage: 192,
            capacity: 26,
            recoil: 45,
            fireRate: 330,
            traits: ['light armor penetrating']
        },
        offensiveRange: [1.25, 0, 0],
        coverage: [1, 0.5, 0, 0, 0],
        stun: false,
        sluggish: false,
        objectives: []
    },
    {
        id: 14,
        name: "SG-225IE Breaker Incendiary",
        icon: '#',
        ingameStats: {
            damage: 240,
            capacity: 25,
            recoil: 28,
            fireRate: 330,
            traits: ['light armor penetrating, incendiary']
        },
        offensiveRange: [1, 0.5, 0],
        coverage: [1, 0.5, 0.5, 0, 0],
        stun: false,
        sluggish: false,
        objectives: []
    },
    {
        id: 15,
        name: "CB-9 Exploding Crossbow",
        icon: '#',
        ingameStats: {
            damage: 420,
            capacity: 5,
            recoil: 35,
            fireRate: 50,
            traits: ['explosive']
        },
        offensiveRange: [1, 1, 0],
        coverage: [1, 1, 0.5, 0.2, 0],
        stun: true,
        sluggish: false,
        objectives: []
    },
    {
        id: 16,
        name: "JAR-5 Dominator",
        icon: '#',
        ingameStats: {
            damage: 300,
            capacity: 15,
            recoil: 75,
            fireRate: 250,
            traits: ['medium armor penetrating', 'explosive damage type']
        },
        offensiveRange: [1, 1, 0],
        coverage: [0.5, 1, 1, 0, 0],
        stun: true,
        sluggish: true,
        objectives: []
    },
    {
        id: 17,
        name: "R-36 Eruptor",
        icon: '#',
        ingameStats: {
            damage: 380,
            capacity: 5,
            recoil: 75,
            fireRate: 25,
            traits: ['medium armor penetrating', 'explosive']
        },
        offensiveRange: [0.5, 1, 0.5],
        coverage: [1, 1, 0.5, 0.2, 0],
        stun: true,
        sluggish: true,
        objectives: []
    },
    {
        id: 18,
        name: "LAS-5 Scythe",
        icon: '#',
        ingameStats: {
            dps: 300,
            fireLimit: 8,
            recoil: 1,
            traits: ['light armor penetrating', 'beam', 'heat']
        },
        offensiveRange: [1, 1, 0.5],
        coverage: [1, 0.5, 0, 0, 0],
        stun: false,
        sluggish: false,
        objectives: []
    },
    {
        id: 19,
        name: "LAS-16 Sickle",
        icon: '#',
        ingameStats: {
            damage: 55,
            fireLimit: 9,
            recoil: 2,
            fireRate: 750,
            traits: ['light armor penetrating', 'heat']
        },
        offensiveRange: [1, 1, 0.5],
        coverage: [1, 0.5, 0, 0, 0],
        stun: false,
        sluggish: false,
        objectives: []
    },
    {
        id: 20,
        name: "PLAS-1 Scorcher",
        icon: '#',
        ingameStats: {
            damage: 200,
            fireLimit: 15,
            recoil: 20,
            fireRate: 250,
            traits: ['light armor penetrating', 'explosive']
        },
        offensiveRange: [0.8, 1, 0.5],
        coverage: [1, 1, 1, 0.2, 0],
        stun: false,
        sluggish: false,
        objectives: []
    },
    {
        id: 21,
        name: "MP-98 Knight",
        icon: '#',
        ingameStats: {
            damage: 50,
            fireLimit: 50,
            recoil: 20,
            fireRate: 1380,
            traits: ['light armor penetrating', 'one handed']
        },
        offensiveRange: [1, 0, 0],
        coverage: [1, 0.5, 0, 0, 0],
        stun: false,
        sluggish: false,
        objectives: []
    },
]
export const secondaryWeaponData = [
    {
        id: 1,
        name: "P-2 Peacemaker",
        icon: '#',
        ingameStats: {
            damage: 60,
            capacity: 15,
            recoil: 23,
            fireRate: 900,
            traits: ['light armor penetrating', 'one handed']
        },
        offensiveRange: [0.5, 0.5, 0],
        coverage: [1, 0.5, 0, 0, 0],
        sluggish: false,
        stun: false,
        objectives: []
    },
    {
        id: 2,
        name: "P-19 Redeemer",
        icon: '#',
        ingameStats: {
            damage: 60,
            capacity: 31,
            recoil: 11,
            fireRate: 1100,
            traits: ['light armor penetrating', 'one handed']
        },
        offensiveRange: [1, 0.5, 0],
        coverage: [1, 0.5, 0, 0, 0],
        sluggish: false,
        stun: false,
        objectives: []
    },
    {
        id: 3,
        name: "GP-31 Grenade Pistol",
        icon: '#',
        ingameStats: {
            damage: 600,
            capacity: 1,
            recoil: 43,
            fireRate: 900,
            traits: ['explosive', 'one handed']
        },
        offensiveRange: [1, 1, 0],
        coverage: [0.5, 0.5, 0.5, 0, 0],
        sluggish: false,
        stun: true,
        objectives: []
    },
    {
        id: 4,
        name: "LAS-7 Dagger",
        icon: '#',
        ingameStats: {
            dps: 150,
            fireLimit: 5,
            recoil: 1,
            traits: ['light armor penetrating', 'one handed', 'beam', 'heat']
        },
        offensiveRange: [1, 1, 0],
        coverage: [0.5, 0.25, 0, 0, 0],
        sluggish: false,
        stun: false,
        objectives: []
    },
    {
        id: 5,
        name: "P-4 Senator",
        icon: '#',
        ingameStats: {
            damage: 150,
            capacity: 6,
            recoil: 43,
            fireRate: 200,
            traits: ['medium armor penetrating', 'one handed', 'rounds reload']
        },
        offensiveRange: [1, 0.666, 0],
        coverage: [0.5, 1, 0.5, 0, 0],
        sluggish: false,
        stun: false,
        objectives: []
    },
]

export const grenadeData = [
    {
        id: 1,
        name: "G-6 Frag",
        icon: '#',
        ingameStats: {
            damage: 250,
            penetration: 3,
            radius: 8,
            fuse: 2.4,
            traits: []
        },
        offensiveRange: [0.8, 1, 0],
        coverage: [0.5, 0.5, 0, 0, 0],
        stun: true,
        objectives: []
    },
    {
        id: 2,
        name: "G-12 High Explosive",
        icon: '#',
        ingameStats: {
            damage: 400,
            penetration: 4,
            radius: 7,
            fuse: 3.5,
            traits: []
        },
        offensiveRange: [0.8, 1, 0],
        coverage: [1, 1, 1, 0.25, 0.25],
        stun: true,
        objectives: []
    },
    {
        id: 3,
        name: "G-10 Incendiary",
        icon: '#',
        ingameStats: {
            damage: 150,
            penetration: 3,
            radius: 7,
            fuse: 2.9,
            traits: ['incendiary']
        },
        offensiveRange: [0.8, 1, 0],
        coverage: [1.5, 1, 0.5, 0, 0],
        stun: false,
        objectives: []
    },
    {
        id: 4,
        name: "G-16 Impact",
        icon: '#',
        ingameStats: {
            damage: 400,
            penetration: 4,
            radius: 7,
            fuse: 0,
            traits: []
        },
        offensiveRange: [0.5, 1, 0],
        coverage: [1, 1, 1, 0.5, 0.5],
        stun: true,
        objectives: []
    },
    {
        id: 5,
        name: "G-23 Stun",
        icon: '#',
        ingameStats: {
            damage: 0,
            penetration: 6,
            radius: 10,
            fuse: 1.8,
            traits: []
        },
        offensiveRange: [1, 1, 0],
        coverage: [0, 0, 0, 0, 0],
        stun: true,
        objectives: []
    },
    {
        id: 6,
        name: "G-3 Smoke",
        icon: '#',
        ingameStats: {
            damage: 0,
            penetration: 0,
            radius: 5,
            fuse: 2.4,
            traits: []
        },
        offensiveRange: [1, 1, 0],
        coverage: [0, 0, 0, 0, 0],
        stun: false,
        objectives: []
    },
    {
        id: 7,
        name: "G-123 Thermite",
        icon: '#',
        ingameStats: {
            damage: 100,
            penetration: 7,
            radius: 2,
            fuse: 2.9,
            traits: []
        },
        offensiveRange: [1, 1, 0],
        coverage: [0, 0, 0, 1, 0.5],
        stun: false,
        objectives: []
    },
]

export const armorData = [
    {
        id: 1,
        name: 'light engineer',
        bonus: 'engineering kit',
        type: 'light',
    },
    {
        id: 2,
        name: 'light servo',
        bonus: 'servo assisted',
        type: 'light',
    },
    {
        id: 3,
        name: 'light padded',
        bonus: 'extra padding',
        type: 'light',
    },
    {
        id: 4,
        name: 'light democracy',
        bonus: 'democracy protects',
        type: 'light',
    },
    {
        id: 5,
        name: 'light fortified',
        bonus: 'fortified',
        type: 'light',
    },
    {
        id: 6,
        name: 'light med kit',
        bonus: 'med kit',
        type: 'light',
    },
    {
        id: 7,
        name: 'light scout',
        bonus: 'scout',
        type: 'light',
    },
    {
        id: 8,
        name: 'medium engineer',
        bonus: 'engineering kit',
        type: 'medium',
    },
    {
        id: 9,
        name: 'medium democracy',
        bonus: 'democracy protects',
        type: 'medium',
    },
    {
        id: 10,
        name: 'medium padding',
        bonus: 'extra padding',
        type: 'medium',
    },
    {
        id: 11,
        name: 'medium fortified',
        bonus: 'fortified',
        type: 'medium',
    },
    {
        id: 12,
        name: 'medium scout',
        bonus: 'scout',
        type: 'medium',
    },
    {
        id: 13,
        name: 'medium servo',
        bonus: 'servo assisted',
        type: 'medium',
    },
    {
        id: 14,
        name: 'medium med kit',
        bonus: 'med kit',
        type: 'medium',
    },
    {
        id: 15,
        name: 'medium arc',
        bonus: 'arc resistance',
        type: 'medium',
    },
    {
        id: 16,
        name: 'heavy engineer',
        bonus: 'engineering kit',
        type: 'heavy',
    },
    {
        id: 17,
        name: 'heavy padding',
        bonus: 'extra padding',
        type: 'heavy',
    },
    {
        id: 18,
        name: 'heavy fortified',
        bonus: 'fortified',
        type: 'heavy',
    },
    {
        id: 19,
        name: 'heavy scout',
        bonus: 'scout',
        type: 'heavy',
    },
    {
        id: 20,
        name: 'heavy servo',
        bonus: 'servo assisted',
        type: 'heavy',
    },
    {
        id: 21,
        name: 'heavy med kit',
        bonus: 'med kit',
        type: 'heavy',
    }
]

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
