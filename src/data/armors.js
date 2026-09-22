import lightSVG from "../assets/light.svg";
import mediumSVG from "../assets/medium.svg";
import heavySVG from "../assets/heavy.svg";
import adrenodefibrillator from "../assets/passives/adrenodefibrillator.webp";
import advancedfiltration from "../assets/passives/advancedfiltration.webp";
import ballisticpadding from "../assets/passives/ballisticpadding.webp";
import concussivepadding from "../assets/passives/concussivepadding.webp";
import democracyprotects from "../assets/passives/democracyprotects.webp";
import desertstormer from "../assets/passives/desertstormer.webp";
import electricalconduit from "../assets/passives/electricalconduit.webp";
import engineeringkit from "../assets/passives/engineeringkit.webp";
import extrapadding from "../assets/passives/extrapadding.webp";
import feetfirst from "../assets/passives/feetfirst.webp";
import fortified from "../assets/passives/fortified.webp";
import gunslinger from "../assets/passives/gunslinger.webp";
import inflammable from "../assets/passives/inflammable.webp";
import integratedexplosives from "../assets/passives/integratedexplosives.webp";
import kineticdisplacementmitigation from "../assets/passives/kineticdisplacementmitigation.webp";
import medkit from "../assets/passives/medkit.webp";
import oxygenator from "../assets/passives/oxygenator.webp";
import peakphysique from "../assets/passives/peakphysique.webp";
import reducedsignature from "../assets/passives/reducedsignature.webp";
import reinforcedepaulettes from "../assets/passives/reinforcedepaulettes.webp";
import rocksolid from "../assets/passives/rocksolid.webp";
import scout from "../assets/passives/scout.webp";
import servoassisted from "../assets/passives/servoassisted.webp";
import siegeready from "../assets/passives/siegeready.webp";
import supplementaryadrenaline from "../assets/passives/supplementaryadrenaline.webp";
import truegrit from "../assets/passives/truegrit.webp";
import unflinching from "../assets/passives/unflinching.webp";
import bluntforcemitigation from "../assets/passives/bluntforcemitigation.webp";

export const armorData = [
  {
    id: 1,
    name: "light engineer",
    bonus: "engineering kit",
    abbr: "ENG",
    longText:
      "Further reduces recoil when crouching or prone by 30% Increases initial inventory and holding capacity of grenades by +2.",
    icon: engineeringkit,
    type: "light",
  },
  {
    id: 2,
    name: "light servo",
    bonus: "servo assisted",
    abbr: "SER",
    longText: "Increases throwing range by 30%. Provides +50% limb health.",
    icon: servoassisted,
    type: "light",
  },
  {
    id: 3,
    name: "light padded",
    bonus: "extra padding",
    abbr: "PAD",
    longText: "Provides a higher Armor Rating.",
    icon: extrapadding,
    type: "light",
  },
  {
    id: 4,
    name: "light democracy",
    bonus: "democracy protects",
    abbr: "PRO",
    longText:
      "50% chance to not die when taking lethal damage. Precents all damage from bleeding if chest hemorrhages.",
    icon: democracyprotects,
    type: "light",
  },
  {
    id: 5,
    name: "light fortified",
    bonus: "fortified",
    abbr: "FOR",
    longText:
      "Further reduces recoil when crouching or prone by 30%. Provides 50% resistance to explosive damage.",
    icon: fortified,
    type: "light",
  },
  {
    id: 6,
    name: "light med kit",
    bonus: "med kit",
    abbr: "MED",
    longText:
      "Increases initial inventory and holding capacity of stims by +2. Increases stim effect duration by 2.0s.",
    icon: medkit,
    type: "light",
  },
  {
    id: 7,
    name: "light scout",
    bonus: "scout",
    abbr: "SCT",
    longText:
      "Markers placed on the map will generate radar scans every 2.0s. Reduces range at which enemies can detect the wearer by 30%.",
    icon: scout,
    type: "light",
  },
  {
    id: 8,
    name: "medium engineer",
    bonus: "engineering kit",
    abbr: "ENG",
    longText:
      "Further reduces recoil when crouching or prone by 30% Increases initial inventory and holding capacity of grenades by +2.",
    icon: engineeringkit,
    type: "medium",
  },
  {
    id: 9,
    name: "medium democracy",
    bonus: "democracy protects",
    abbr: "PRO",
    longText:
      "50% chance to not die when taking lethal damage. Precents all damage from bleeding if chest hemorrhages.",
    icon: democracyprotects,
    type: "medium",
  },
  {
    id: 10,
    name: "medium padding",
    bonus: "extra padding",
    abbr: "PAD",
    longText: "Provides a higher Armor Rating.",
    icon: extrapadding,
    type: "medium",
  },
  {
    id: 11,
    name: "medium fortified",
    bonus: "fortified",
    abbr: "FOR",
    longText:
      "Further reduces recoil when crouching or prone by 30%. Provides 50% resistance to explosive damage.",
    icon: fortified,
    type: "medium",
  },
  {
    id: 12,
    name: "medium scout",
    bonus: "scout",
    abbr: "SCT",
    longText:
      "Markers placed on the map will generate radar scans every 2.0s. Reduces range at which enemies can detect the wearer by 30%.",
    icon: scout,
    type: "medium",
  },
  {
    id: 13,
    name: "medium servo",
    bonus: "servo assisted",
    abbr: "SER",
    longText: "Increases throwing range by 30%. Provides +50% limb health.",
    icon: servoassisted,
    type: "medium",
  },
  {
    id: 14,
    name: "medium med kit",
    bonus: "med kit",
    abbr: "MED",
    longText:
      "Increases initial inventory and holding capacity of stims by +2. Increases stim effect duration by 2.0s.",
    icon: medkit,
    type: "medium",
  },
  {
    id: 15,
    name: "medium arc",
    bonus: "electrical conduit",
    abbr: "ARC",
    longText: "Provides 95% resistance to arc damage.",
    icon: electricalconduit,
    type: "medium",
  },
  {
    id: 16,
    name: "heavy engineer",
    bonus: "engineering kit",
    abbr: "ENG",
    longText:
      "Further reduces recoil when crouching or prone by 30% Increases initial inventory and holding capacity of grenades by +2.",
    icon: engineeringkit,
    type: "heavy",
  },
  {
    id: 17,
    name: "heavy padding",
    bonus: "extra padding",
    abbr: "PAD",
    longText: "Provides a higher Armor Rating.",
    icon: extrapadding,
    type: "heavy",
  },
  {
    id: 18,
    name: "heavy fortified",
    bonus: "fortified",
    abbr: "FOR",
    longText:
      "Further reduces recoil when crouching or prone by 30%. Provides 50% resistance to explosive damage.",
    icon: fortified,
    type: "heavy",
  },
  {
    id: 19,
    name: "heavy scout",
    bonus: "scout",
    abbr: "SCT",
    longText:
      "Markers placed on the map will generate radar scans every 2.0s. Reduces range at which enemies can detect the wearer by 30%.",
    icon: scout,
    type: "heavy",
  },
  {
    id: 20,
    name: "heavy servo",
    bonus: "servo assisted",
    abbr: "SER",
    longText: "Increases throwing range by 30%. Provides +50% limb health.",
    icon: servoassisted,
    type: "heavy",
  },
  {
    id: 21,
    name: "heavy med kit",
    bonus: "med kit",
    abbr: "MED",
    longText:
      "Increases initial inventory and holding capacity of stims by +2. Increases stim effect duration by 2.0s.",
    icon: medkit,
    type: "heavy",
  },
  {
    id: 22,
    name: "light arc",
    bonus: "electrical conduit",
    abbr: "ARC",
    longText: "Provides 95% resistance to arc damage.",
    icon: electricalconduit,
    type: "light",
  },
  {
    id: 23,
    name: "light physique",
    bonus: "peak physique",
    abbr: "PHY",
    longText:
      "Increases melee damage by 50%.  Improves weapons handling with less drag on weapon movement.",
    icon: peakphysique,
    type: "light",
  },
  {
    id: 24,
    name: "medium physique",
    bonus: "peak physique",
    abbr: "PHY",
    longText:
      "Increases melee damage by 50%.  Improves weapons handling with less drag on weapon movement.",
    icon: peakphysique,
    type: "medium",
  },
  {
    id: 25,
    name: "heavy physique",
    bonus: "peak physique",
    abbr: "PHY",
    longText:
      "Increases melee damage by 50%.  Improves weapons handling with less drag on weapon movement.",
    icon: peakphysique,
    type: "heavy",
  },
  {
    id: 26,
    name: "light inflammable",
    bonus: "inflammable",
    abbr: "FLA",
    longText:
      "Provides 75% damage resistance to fire, allowing bearer to rest assured in their inflammability.",
    icon: inflammable,
    type: "light",
  },
  {
    id: 27,
    name: "medium inflammable",
    bonus: "inflammable",
    abbr: "FLA",
    longText:
      "Provides 75% damage resistance to fire, allowing bearer to rest assured in their inflammability.",
    icon: inflammable,
    type: "medium",
  },
  {
    id: 28,
    name: "heavy inflammable",
    bonus: "inflammable",
    abbr: "FLA",
    longText:
      "Provides 75% damage resistance to fire, allowing bearer to rest assured in their inflammability.",
    icon: inflammable,
    type: "heavy",
  },
  {
    id: 29,
    name: "light filtration",
    bonus: "advanced filtration",
    abbr: "FIL",
    longText: "Provides 80% resistance to gas damage and effects.",
    icon: advancedfiltration,
    type: "light",
  },
  {
    id: 30,
    name: "medium filtration",
    bonus: "advanced filtration",
    abbr: "FIL",
    longText: "Provides 80% resistance to gas damage and effects.",
    icon: advancedfiltration,
    type: "medium",
  },
  {
    id: 31,
    name: "heavy filtration",
    bonus: "advanced filtration",
    abbr: "FIL",
    longText: "Provides 80% resistance to gas damage and effects.",
    icon: advancedfiltration,
    type: "heavy",
  },
  {
    id: 32,
    name: "light unflinching",
    bonus: "unflinching",
    abbr: "UNF",
    longText:
      "Helps prevent Helldivers from flinching when hit. Higher armor rating. Markers on map will generate scans every 2s",
    icon: unflinching,
    type: "light",
  },
  {
    id: 33,
    name: "medium unflinching",
    bonus: "unflinching",
    abbr: "UNF",
    longText:
      "Helps prevent Helldivers from flinching when hit. Higher armor rating. Markers on map will generate scans every 2s",
    icon: unflinching,
    type: "medium",
  },
  {
    id: 34,
    name: "heavy unflinching",
    bonus: "unflinching",
    abbr: "UNF",
    longText:
      "Helps prevent Helldivers from flinching when hit. Higher armor rating. Markers on map will generate scans every 2s",
    icon: unflinching,
    type: "heavy",
  },
  {
    id: 35,
    name: "light siege-ready",
    bonus: "siege-ready",
    abbr: "SGR",
    longText:
      "Increases reload speed of primary weapons by 30%. Increases ammo capacity of primary weapons by 20%.",
    icon: siegeready,
    type: "light",
  },
  {
    id: 36,
    name: "medium siege-ready",
    bonus: "siege-ready",
    abbr: "SGR",
    longText:
      "Increases reload speed of primary weapons by 30%. Increases ammo capacity of primary weapons by 20%.",
    icon: siegeready,
    type: "medium",
  },
  {
    id: 37,
    name: "heavy siege-ready",
    bonus: "siege-ready",
    abbr: "SGR",
    longText:
      "Increases reload speed of primary weapons by 30%. Increases ammo capacity of primary weapons by 20%.",
    icon: siegeready,
    type: "heavy",
  },
  {
    id: 38,
    name: "light acclimated",
    bonus: "acclimated",
    abbr: "ACC",
    longText:
      "Provides 50% resistance to fire, gas, acid, and electrical damage.",
    icon: inflammable,
    type: "light",
  },
  {
    id: 39,
    name: "medium acclimated",
    bonus: "acclimated",
    abbr: "ACC",
    longText:
      "Provides 50% resistance to fire, gas, acid, and electrical damage.",
    icon: inflammable,
    type: "medium",
  },
  {
    id: 40,
    name: "heavy acclimated",
    bonus: "acclimated",
    abbr: "ACC",
    longText:
      "Provides 50% resistance to fire, gas, acid, and electrical damage.",
    icon: inflammable,
    type: "heavy",
  },
  {
    id: 41,
    name: "light integrated explosives",
    bonus: "integrated explosives",
    abbr: "IEX",
    longText: "Armor explodes 1.5s after the wearer dies. +2 grenades",
    icon: integratedexplosives,
    type: "light",
  },
  {
    id: 42,
    name: "medium integrated explosives",
    bonus: "integrated explosives",
    abbr: "IEX",
    longText: "Armor explodes 1.5s after the wearer dies. +2 grenades",
    icon: integratedexplosives,
    type: "medium",
  },
  {
    id: 43,
    name: "heavy integrated explosives",
    bonus: "integrated explosives",
    abbr: "IEX",
    longText: "Armor explodes 1.5s after the wearer dies. +2 grenades",
    icon: integratedexplosives,
    type: "heavy",
  },
  {
    id: 44,
    name: "light gunslinger",
    bonus: "gunslinger",
    abbr: "GSL",
    longText: "Sidearm reload speed +40%, swap speed +50%, recoil -70%.",
    icon: gunslinger,
    type: "light",
  },
  {
    id: 45,
    name: "medium gunslinger",
    bonus: "gunslinger",
    abbr: "GSL",
    longText: "Sidearm reload speed +40%, swap speed +50%, recoil -70%.",
    icon: gunslinger,
    type: "medium",
  },
  {
    id: 46,
    name: "heavy gunslinger",
    bonus: "gunslinger",
    abbr: "GSL",
    longText: "Sidearm reload speed +40%, swap speed +50%, recoil -70%.",
    icon: gunslinger,
    type: "heavy",
  },
  {
    id: 47,
    name: "light epaulettes",
    bonus: "epaulettes",
    abbr: "EPL",
    longText: "Gives wearer a 50% chance to avoid grievous limb injury",
    icon: reinforcedepaulettes,
    type: "light",
  },
  {
    id: 48,
    name: "medium epaulettes",
    bonus: "epaulettes",
    abbr: "EPL",
    longText: "Gives wearer a 50% chance to avoid grievous limb injury",
    icon: reinforcedepaulettes,
    type: "medium",
  },
  {
    id: 49,
    name: "heavy epaulettes",
    bonus: "epaulettes",
    abbr: "EPL",
    longText: "Gives wearer a 50% chance to avoid grievous limb injury",
    icon: reinforcedepaulettes,
    type: "heavy",
  },
  {
    id: 50,
    name: "light ballistic",
    bonus: "ballistic",
    abbr: "BAL",
    longText:
      "25% resistance to chest and explosive damage. Prevents bleeding from chest hemmorhages.",
    icon: ballisticpadding,
    type: "light",
  },
  {
    id: 51,
    name: "medium ballistic",
    bonus: "ballistic",
    abbr: "BAL",
    longText:
      "25% resistance to chest and explosive damage. Prevents bleeding from chest hemmorhages.",
    icon: ballisticpadding,
    type: "medium",
  },
  {
    id: 52,
    name: "heavy ballistic",
    bonus: "ballistic",
    abbr: "BAL",
    longText:
      "25% resistance to chest and explosive damage. Prevents bleeding from chest hemmorhages.",
    icon: ballisticpadding,
    type: "heavy",
  },
  {
    id: 53,
    name: "light adreno defibrillator",
    bonus: "adreno defibrillator",
    abbr: "ADR",
    longText:
      "Provides one-time, short-lived resuscitation upon death, given that the body is still intact.  Increases stim effect duration by 2s. Provides 50% resistance to arc damage.",
    icon: adrenodefibrillator,
    type: "light",
  },
  {
    id: 54,
    name: "medium adreno defibrillator",
    bonus: "adreno defibrillator",
    abbr: "ADR",
    longText:
      "Provides one-time, short-lived resuscitation upon death, given that the body is still intact.  Increases stim effect duration by 2s. Provides 50% resistance to arc damage.",
    icon: adrenodefibrillator,
    type: "medium",
  },
  {
    id: 55,
    name: "heavy adreno defibrillator",
    bonus: "adreno defibrillator",
    abbr: "ADR",
    longText:
      "Provides one-time, short-lived resuscitation upon death, given that the body is still intact.  Increases stim effect duration by 2s. Provides 50% resistance to arc damage.",
    icon: adrenodefibrillator,
    type: "heavy",
  },
  {
    id: 56,
    name: "light feet first",
    bonus: "feet first",
    abbr: "FEF",
    longText:
      "Wearer makes 50% less noise when moving. Increases point-of-interest identification range by 30%. Provides immunity to leg injuries",
    icon: feetfirst,
    type: "light",
  },
  {
    id: 57,
    name: "medium feet first",
    bonus: "feet first",
    abbr: "FEF",
    longText:
      "Wearer makes 50% less noise when moving. Increases point-of-interest identification range by 30%. Provides immunity to leg injuries",
    icon: feetfirst,
    type: "medium",
  },
  {
    id: 58,
    name: "heavy feet first",
    bonus: "feet first",
    abbr: "FEF",
    longText:
      "Wearer makes 50% less noise when moving. Increases point-of-interest identification range by 30%. Provides immunity to leg injuries",
    icon: feetfirst,
    type: "heavy",
  },
  {
    id: 59,
    name: "light desert stormer",
    bonus: "desert stormer",
    abbr: "DES",
    longText:
      "Provides 40% resistance to fire, gas, acid, and electrical damage. Increases throwing range by 20%.",
    icon: desertstormer,
    type: "light",
  },
  {
    id: 60,
    name: "medium desert stormer",
    bonus: "desert stormer",
    abbr: "DES",
    longText:
      "Provides 40% resistance to fire, gas, acid, and electrical damage. Increases throwing range by 20%.",
    icon: desertstormer,
    type: "medium",
  },
  {
    id: 61,
    name: "heavy desert stormer",
    bonus: "desert stormer",
    abbr: "DES",
    longText:
      "Provides 40% resistance to fire, gas, acid, and electrical damage. Increases throwing range by 20%.",
    icon: desertstormer,
    type: "heavy",
  },
  {
    id: 62,
    name: "light rock solid",
    bonus: "rock solid",
    abbr: "RCK",
    longText:
      "Increase melee damage by 100%.  Bearer is more resistant to being knocked prone.",
    icon: rocksolid,
    type: "light",
  },
  {
    id: 63,
    name: "medium rock solid",
    bonus: "rock solid",
    abbr: "RCK",
    longText:
      "Increase melee damage by 100%.  Bearer is more resistant to being knocked prone.",
    icon: rocksolid,
    type: "medium",
  },
  {
    id: 64,
    name: "heavy rock solid",
    bonus: "rock solid",
    abbr: "RCK",
    longText:
      "Increase melee damage by 100%.  Bearer is more resistant to being knocked prone.",
    icon: rocksolid,
    type: "heavy",
  },
  {
    id: 65,
    name: "light reduced signature",
    bonus: "reduced signature",
    abbr: "RSG",
    longText:
      "Wearer makes 50% less noise when moving. Reduces range at which enemies can detect the wearer by 40%.",
    icon: reducedsignature,
    type: "light",
  },
  {
    id: 66,
    name: "medium reduced signature",
    bonus: "reduced signature",
    abbr: "RSG",
    longText:
      "Wearer makes 50% less noise when moving. Reduces range at which enemies can detect the wearer by 40%.",
    icon: reducedsignature,
    type: "medium",
  },
  {
    id: 67,
    name: "medium supp. adrenaline",
    bonus: "supplementary adrenaline",
    abbr: "SPA",
    longText:
      "When the wearer takes damage, they regain some stamina. Provides a higher armor rating.",
    icon: supplementaryadrenaline,
    type: "medium",
  },
  {
    id: 68,
    name: "heavy supp. adrenaline",
    bonus: "supplementary adrenaline",
    abbr: "SPA",
    longText:
      "When the wearer takes damage, they regain some stamina. Provides a higher armor rating.",
    icon: supplementaryadrenaline,
    type: "heavy",
  },
  {
    id: 69,
    name: "light concussive padding",
    bonus: "concussive padding",
    abbr: "CPA",
    longText:
      "Provides 50% resistance to explosive damage. Provides 25% resistance to gas damage and effects. Sidearm recoil reduced by 30%.",
    icon: concussivepadding,
    type: "light",
  },
  {
    id: 70,
    name: "medium concussive padding",
    bonus: "concussive padding",
    abbr: "CPB",
    longText:
      "Provides 50% resistance to explosive damage. Increases initial inventory and holding capacity of throwables by +2.",
    icon: concussivepadding,
    type: "medium",
  },
  {
    id: 71,
    name: "heavy concussive padding",
    bonus: "concussive padding",
    abbr: "CPC",
    longText:
      "Provides 50% resistance to explosive damage. Provides a higher armor rating.",
    icon: concussivepadding,
    type: "heavy",
  },
  {
    id: 72,
    name: "light oxygenator",
    bonus: "oxygenator",
    abbr: "OXY",
    longText:
      "Increases the wearer's walking speed and running speed. Increases the speed and duration of slides.",
    icon: oxygenator,
    type: "light",
  },
  {
    id: 73,
    name: "medium oxygenator",
    bonus: "oxygenator",
    abbr: "OXY",
    longText:
      "Increases the wearer's walking speed and running speed. Increases the speed and duration of slides.",
    icon: oxygenator,
    type: "medium",
  },
  {
    id: 74,
    name: "heavy oxygenator",
    bonus: "oxygenator",
    abbr: "OXY",
    longText:
      "Increases the wearer's walking speed and running speed. Increases the speed and duration of slides.",
    icon: oxygenator,
    type: "heavy",
  },
  {
    id: 75,
    name: "heavy kinetic displacement mitigation",
    bonus: "kinetic displacement mitigation",
    abbr: "KDM",
    longText:
      "Provides 50% damage resistance to fire, allowing bearer to rest assured in their inflammability. Gives the wearer a 50% chance to avoid grievous limb injury. Reduces damage taken from impact and collisions by 30%.",
    icon: kineticdisplacementmitigation,
    type: "heavy",
  },
  {
    id: 76,
    name: "medium true grit",
    bonus: "true grit",
    abbr: "MTG",
    longText:
      "Provides +20 Weapon Handling. Provides +30% Reload Speed for Support Weapons.",
    icon: truegrit,
    type: "medium",
  },
  {
    id: 77,
    name: "heavy true grit",
    bonus: "true grit",
    abbr: "HTG",
    longText:
      "Provides +20 Weapon Handling. Provides +30% Reload Speed for Support Weapons.",
    icon: truegrit,
    type: "heavy",
  },

  {
    id: 78,
    name: "heavy blunt force mitigation",
    bonus: "blunt force mitigation",
    abbr: "BFM",
    longText:
      "Makes Helldivers more resistant to being knocked off their feet when under attack and reduces any damage taken from impact and collisions by 30%, while also providing a higher armor rating.",
    icon: bluntforcemitigation,
    type: "heavy",
  },
  {
    id: 79,
    name: "light blunt force mitigation",
    bonus: "blunt force mitigation",
    abbr: "BFM",
    longText:
      "Makes Helldivers more resistant to being knocked off their feet when under attack and reduces any damage taken from impact and collisions by 30%, while also providing a higher armor rating.",
    icon: bluntforcemitigation,
    type: "light",
  },
];
