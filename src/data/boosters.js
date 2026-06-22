import expertextractionpilot from "../assets/boosters/expertextractionpilot.webp";
import deadsprint from "../assets/boosters/deadsprint.webp";
import armedresupplypods from "../assets/boosters/armedresupplypods.webp";
import experimentalinfusion from "../assets/boosters/experimentalinfusion.webp";
import motivationalshocks from "../assets/boosters/motivationalshocks.webp";
import flexiblereinforcementbudget from "../assets/boosters/flexiblereinforcementbudget.webp";
import hellpodspaceoptimization from "../assets/boosters/hellpodspaceoptimization.webp";
import increasedreinforcementbudget from "../assets/boosters/increasedreinforcementbudget.webp";
import localizationconfusion from "../assets/boosters/localizationconfusion.webp";
import muscleenhancement from "../assets/boosters/muscleenhancement.webp";
import staminaenhancement from "../assets/boosters/staminaenhancement.webp";
import uavrecon from "../assets/boosters/uavrecon.webp";
import vitalityenhancement from "../assets/boosters/vitalityenhancement.webp";
import firebombhellpods from "../assets/boosters/firebombhellpods.webp";
import sampleextricator from "../assets/boosters/sampleextricator.webp";
import samplescanner from "../assets/boosters/samplescanner.webp";
import stunpods from "../assets/boosters/stunpods.webp";
import concealedinsertion from "../assets/boosters/concealedinsertion.webp";

export const boosterData = [
  {
    id: 1,
    name: "Expert Extraction Pilot",
    icon: expertextractionpilot,
    description: "Pelican 1 arrives 15% faster during extraction.",
  },
  {
    id: 2,
    name: "Dead Sprint",
    icon: deadsprint,
    description:
      "Allows continuous sprinting even after draining stamina, at the cost of losing a percentage of health per second.",
  },
  {
    id: 3,
    name: "Armed Resupply Pods",
    icon: armedresupplypods,
    description:
      "All resupply pods now come with a turret-mounted AR-23 Liberator that fires on nearby enemies. The turret remains active until it runs out of ammo or is destroyed.",
  },
  {
    id: 4,
    name: "Experimental Infusion",
    icon: experimentalinfusion,
    description:
      "Stims now boost movement speed and reduce damage taken for a short time, but introduce tunnel vision and color blindness during their effects.",
  },
  {
    id: 5,
    name: "Motivational Shocks",
    icon: motivationalshocks,
    description:
      "Negates the slowed effect inflicted by hostiles, such as terminid bile. Does not negate the speed penalty of EMS fields or broken legs.",
  },
  {
    id: 6,
    name: "Flexible Reinforcement Budget",
    icon: flexiblereinforcementbudget,
    description:
      "Reduces reinforcement replenish time by 10%. Only applies once all reinforcements have been depleted.",
  },
  {
    id: 7,
    name: "Hellpod Space Optimization",
    icon: hellpodspaceoptimization,
    description:
      "Helldivers come out of the Hellpod fully stocked on Ammo, Grenades, and Stims. Applies to the initial drop and all subsequent reinforcements.",
  },
  {
    id: 8,
    name: "Increased Reinforcement Budget",
    icon: increasedreinforcementbudget,
    description:
      "Gives one additional reinforcement per Helldiver in the squad, up to a maximum of 4 extra.",
  },
  {
    id: 9,
    name: "Localization Confusion",
    icon: localizationconfusion,
    description:
      "Increases the cooldown between unscripted Bug Breaches and Bot Drops by 10%. Will not prevent scripted breaches or drops.",
  },
  {
    id: 10,
    name: "Muscle Enhancement",
    icon: muscleenhancement,
    description:
      "Reduces the speed penalty from difficult terrain such as shrubs, mud, slopes, blizzards, and sandstorms. Also reduces the Hunter's slow debuff.",
  },
  {
    id: 11,
    name: "Stamina Enhancement",
    icon: staminaenhancement,
    description:
      "Increases sprint duration by 30% and stamina regeneration by 23%.",
  },
  {
    id: 12,
    name: "UAV Recon Booster",
    icon: uavrecon,
    description:
      "Increases all Helldivers' effective radar range by 50%, including detection of Points of Interest. Stacks with the Nuclear Radar ship module.",
  },
  {
    id: 13,
    name: "Vitality Enhancement",
    icon: vitalityenhancement,
    description:
      "Helldivers take less damage from all sources and are more resistant to limb injuries. The torso can still hemorrhage.",
  },
  {
    id: 14,
    name: "Firebomb Hellpods",
    icon: firebombhellpods,
    description:
      "Lines all Hellpods with volatile incendiaries that detonate on impact, damaging and igniting nearby targets within a 5-meter radius. Affects friendlies.",
  },
  {
    id: 15,
    name: "Sample Extricator",
    icon: sampleextricator,
    description:
      "Elite and heavy enemies now have a chance to drop samples on death. The type of sample dropped is randomized.",
  },
  {
    id: 16,
    name: "Sample Scanner",
    icon: samplescanner,
    description:
      "Gives a 15% chance to receive twice the samples on each sample pickup.",
  },
  {
    id: 17,
    name: "Stun Pods",
    icon: stunpods,
    description:
      "Hellpods release a static field on impact similar to an Orbital EMS Strike, briefly stunning nearby vulnerable enemies. Helldivers will have their movement slowed.",
  },
  {
    id: 18,
    name: "Concealed Insertion",
    icon: concealedinsertion,
    description:
      "Hellpods make no noise on descent and produce no visible steam trail, allowing Helldivers to drop without alerting nearby enemies.",
  },
];
