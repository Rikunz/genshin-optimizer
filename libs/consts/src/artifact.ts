import { Rarity } from "./common"

export const allArtifactSets = [
  "Adventurer",
  "ArchaicPetra",
  "Berserker",
  "BlizzardStrayer",
  "BloodstainedChivalry",
  "BraveHeart",
  "CrimsonWitchOfFlames",
  "DeepwoodMemories",
  "DefendersWill",
  "DesertPavilionChronicle",
  "EchoesOfAnOffering",
  "EmblemOfSeveredFate",
  "FlowerOfParadiseLost",
  "Gambler",
  "GildedDreams",
  "GladiatorsFinale",
  "HeartOfDepth",
  "HuskOfOpulentDreams",
  "Instructor",
  "Lavawalker",
  "LuckyDog",
  "MaidenBeloved",
  "MartialArtist",
  "NoblesseOblige",
  "OceanHuedClam",
  "PaleFlame",
  "PrayersForDestiny",
  "PrayersForIllumination",
  "PrayersForWisdom",
  "PrayersToSpringtime",
  "ResolutionOfSojourner",
  "RetracingBolide",
  "Scholar",
  "ShimenawasReminiscence",
  "TenacityOfTheMillelith",
  "TheExile",
  "ThunderingFury",
  "Thundersoother",
  "TinyMiracle",
  "TravelingDoctor",
  "VermillionHereafter",
  "ViridescentVenerer",
  "WanderersTroupe",
] as const
export type ArtifactSetKey = typeof allArtifactSets[number]

export const allSlotKeys = ["flower", "plume", "sands", "goblet", "circlet"] as const
export type SlotKey = typeof allSlotKeys[number]

export const artMaxLevel: Record<Rarity, number> = {
  1: 4,
  2: 4,
  3: 12,
  4: 16,
  5: 20,
} as const
