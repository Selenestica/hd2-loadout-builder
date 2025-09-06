import grenadePistol from '../assets/weapons/grenade-pistol.webp'
import redeemer from '../assets/weapons/redeemer.webp'
import senator from '../assets/weapons/senator.webp'
import dagger from '../assets/weapons/dagger.webp'
import peacemaker from '../assets/weapons/peacemaker.webp'
import verdict from '../assets/weapons/verdict.webp'
import { colors } from './constants'
import bushwacker from '../assets/weapons/bushwacker.webp'
import crisper from '../assets/weapons/crispr.webp'
import stimPistol from '../assets/weapons/stimPistol.webp'
import loyalist from '../assets/weapons/loyalist.webp'
import stunLance from '../assets/weapons/stunLance.webp'
import stunBaton from '../assets/weapons/stunBaton.webp'
import ultimatum from '../assets/weapons/ultimatum.webp'
import talon from '../assets/weapons/talon.webp'
import sabre from '../assets/weapons/sabre.webp'
import warrant from '../assets/weapons/smartpistol.webp'
import haloPistol from '../assets/weapons/haloPistol.webp'
import machete from '../assets/weapons/machete.webp'
import hatchet from '../assets/weapons/hatchet.webp'

const { secondaryWeaponColor } = colors

export const secondaryWeaponData = [
    {
        id: 1,
        color: secondaryWeaponColor,
        type: 'pistol',
        name: "P-2 Peacemaker",
        icon: peacemaker,
        ingameStats: {
            damage: 85,
            capacity: 15,
            recoil: 23,
            fireRate: 900,
            traits: ['light armor penetrating', 'one handed']
        },
        offensiveRange: [1, 0.75, 0],
        coverage: [1, 0.5, 0, 0, 0],
        sluggish: false,
        stun: false,
        objectives: []
    },
    {
        id: 2,
        color: secondaryWeaponColor,
        type: 'pistol',
        name: "P-19 Redeemer",
        icon: redeemer,
        ingameStats: {
            damage: 60,
            capacity: 31,
            recoil: 15,
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
        color: secondaryWeaponColor,
        type: 'special',
        name: "GP-31 Grenade Pistol",
        icon: grenadePistol,
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
        color: secondaryWeaponColor,
        type: 'special',
        name: "LAS-7 Dagger",
        icon: dagger,
        ingameStats: {
            dps: 250,
            fireLimit: 5,
            recoil: 1,
            traits: ['light armor penetrating', 'one handed', 'beam', 'heat']
        },
        offensiveRange: [1, 1, 0],
        coverage: [1, 0.75, 0, 0, 0],
        sluggish: false,
        stun: false,
        objectives: []
    },
    {
        id: 5,
        color: secondaryWeaponColor,
        type: 'pistol',
        name: "P-4 Senator",
        icon: senator,
        ingameStats: {
            damage: 200,
            capacity: 6,
            recoil: 43,
            fireRate: 200,
            traits: ['heavy armor penetrating', 'one handed', 'rounds reload']
        },
        offensiveRange: [1, 0.75, 0],
        coverage: [0.5, 1, 1, 0.3, 0],
        sluggish: false,
        stun: false,
        objectives: []
    },
    {
        id: 6,
        color: secondaryWeaponColor,
        type: 'pistol',
        name: "P-113 Verdict",
        icon: verdict,
        ingameStats: {
            damage: 125,
            capacity: 10,
            recoil: 40,
            fireRate: 450,
            traits: ['medium armor penetrating', 'one handed']
        },
        offensiveRange: [1, 0.75, 0],
        coverage: [1, 1, 0.5, 0, 0],
        sluggish: false,
        stun: false,
        objectives: []
    },
    {
        id: 7,
        color: secondaryWeaponColor,
        type: 'special',
        name: "SG-22 Bushwhacker",
        icon: bushwacker,
        ingameStats: {
            damage: 405,
            capacity: 3,
            recoil: 170,
            fireRate: 650,
            traits: ['light armor penetrating', 'one handed']
        },
        offensiveRange: [1, 0, 0],
        coverage: [1, 0.5, 0, 0, 0],
        sluggish: false,
        stun: true,
        objectives: []
    },
    {
        id: 8,
        color: secondaryWeaponColor,
        type: 'special',
        name: "P-72 Crisper",
        icon: crisper,
        ingameStats: {
            dps: 375,
            capacity: 30,
            recoil: 3,
            traits: ['incendiary', 'one handed']
        },
        offensiveRange: [1, 0, 0],
        coverage: [1, 1, 1, 0.5, 0],
        sluggish: false,
        stun: false,
        objectives: []
    },
    {
        id: 9,
        color: secondaryWeaponColor,
        type: 'special',
        name: "P-11 Stim Pistol",
        icon: stimPistol,
        ingameStats: {
            damage: 0,
            capacity: 6,
            recoil: 23,
            fireRate: 70,
            traits: ['one handed', 'rounds reload', 'stimulative']
        },
        offensiveRange: [1, 0, 0],
        coverage: [0, 0, 0, 0, 0],
        sluggish: false,
        stun: false,
        objectives: []
    },
    {
        id: 10,
        color: secondaryWeaponColor,
        type: 'special',
        name: "PLAS-15 Loyalist",
        icon: loyalist,
        ingameStats: {
            damage: 125,
            capacity: 7,
            recoil: 8,
            fireRate: 1000,
            traits: ['medium armor penetrating', 'one handed', 'chargeup', 'explosive']
        },
        offensiveRange: [1, 1, 0],
        coverage: [1, 1, 0.5, 0, 0],
        sluggish: false,
        stun: true,
        objectives: []
    },
    {
        id: 11,
        color: secondaryWeaponColor,
        type: 'melee',
        name: "CQC-19 Stun Lance",
        icon: stunLance,
        ingameStats: {
            /* damage: 125,
            capacity: 7, */
            recoil: 8,
            /* fireRate: 1000, */
            traits: ['light armor penetrating', 'one handed', 'stun']
        },
        offensiveRange: [0.5, 0, 0],
        coverage: [1, 0.5, 0, 0, 0],
        sluggish: false,
        stun: true,
        objectives: []
    },
    {
        id: 12,
        color: secondaryWeaponColor,
        type: 'melee',
        name: "CQC-30 Stun Baton",
        icon: stunBaton,
        ingameStats: {
            /* damage: 125,
            capacity: 7, */
            recoil: 8,
            /* fireRate: 1000, */
            traits: ['light armor penetrating', 'one handed', 'stun']
        },
        offensiveRange: [0.5, 0, 0],
        coverage: [1, 0.5, 0, 0, 0],
        sluggish: false,
        stun: true,
        objectives: []
    },
    {
        id: 13,
        color: secondaryWeaponColor,
        type: 'special',
        name: "GP-31 Ultimatum",
        icon: ultimatum,
        ingameStats: {
            damage: 4500,
            capacity: 1,
            recoil: 43,
            fireRate: 900,
            traits: ['medium armor penetrating', 'one handed', 'explosive']
        },
        offensiveRange: [1, 0.5, 0],
        coverage: [0, 0, 0, 0.8, 0.8],
        sluggish: false,
        stun: false,
        objectives: []
    },
    {
        id: 14,
        color: secondaryWeaponColor,
        type: 'special',
        name: "LAS-58 Talon",
        icon: talon,
        ingameStats: {
            damage: 200,
            fireLimit: 1,
            recoil: 2,
            fireRate: 750,
            traits: ['medium armor penetrating', 'one handed', 'heat']
        },
        offensiveRange: [1, 1, 0],
        coverage: [1.5, 1.5, 0.75, 0, 0],
        sluggish: false,
        stun: false,
        objectives: []
    },
    {
        id: 15,
        color: secondaryWeaponColor,
        type: 'melee',
        name: "CQC2-Saber",
        icon: sabre,
        ingameStats: {
            recoil: 6,
            traits: ['light armor penetrating', 'one handed']
        },
        offensiveRange: [0.5, 0, 0],
        coverage: [1, 0.5, 0, 0, 0],
        sluggish: false,
        stun: false,
        objectives: []
    },
    {
        id: 16,
        color: secondaryWeaponColor,
        type: 'pistol',
        name: "P-92 Warrant",
        icon: warrant,
        ingameStats: {
            damage: 80,
            capacity: 13,
            recoil: 31,
            fireRate: 450,
            traits: ['medium armor penetrating', 'one handed', 'guided']
        },
        offensiveRange: [1, 1, 0.5],
        coverage: [1, 1, 0.5, 0, 0],
        sluggish: false,
        stun: false,
        objectives: []
    },
    {
        id: 17,
        color: secondaryWeaponColor,
        type: 'pistol',
        name: "M6C/SOCOM Pistol",
        icon: haloPistol,
        ingameStats: {
            damage: 100,
            capacity: 12,
            recoil: 20,
            fireRate: 900,
            traits: ['light armor penetrating', 'one handed', 'suppressed']
        },
        offensiveRange: [1, 0.75, 0],
        coverage: [1, 0.5, 0, 0, 0],
        sluggish: false,
        stun: false,
        objectives: []
    },
    {
        id: 18,
        color: secondaryWeaponColor,
        type: 'melee',
        name: "CQC-42 Machete",
        icon: machete,
        ingameStats: {
            /* damage: 125,
            capacity: 7, */
            recoil: 0,
            /* fireRate: 1000, */
            traits: ['medium armor penetrating', 'one handed']
        },
        offensiveRange: [0.5, 0, 0],
        coverage: [0.5, 1, 0.5, 0, 0],
        sluggish: false,
        objectives: []
    },
    {
        id: 18,
        color: secondaryWeaponColor,
        type: 'melee',
        name: "CQC-5 Combat Hatchet",
        icon: machete,
        ingameStats: {
            /* damage: 125,
            capacity: 7, */
            recoil: 8,
            /* fireRate: 1000, */
            traits: [ 'one handed']
        },
        offensiveRange: [0.5, 0, 0],
        coverage: [1, 0.5, 0, 0, 0],
        sluggish: false,
        objectives: []
    },
]