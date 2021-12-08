import card from './Character_Ganyu_Card.png'
import thumb from './Icon.png'
import thumbSide from './IconSide.png'
import banner from './Banner.png'

import c1 from './constellation1.png'
import c2 from './constellation2.png'
import c3 from './constellation3.png'
import c4 from './constellation4.png'
import c5 from './constellation5.png'
import c6 from './constellation6.png'
import skill from './skill.png'
import burst from './burst.png'
import passive1 from './passive1.png'
import passive2 from './passive2.png'
import passive3 from './passive3.png'
import Stat from '../../../Stat'
import formula, { data } from './data'
import data_gen from './data_gen.json'
import { getTalentStatKey, getTalentStatKeyVariant } from '../../../Build/Build'
import { ICharacterSheet } from '../../../Types/character'
import { Translate } from '../../../Components/Translate'
import { conditionalHeader, normalDocSection, normalSrc, plungeDocSection, talentTemplate } from '../SheetUtil'
import { WeaponTypeKey } from '../../../Types/consts'
const tr = (strKey: string) => <Translate ns="char_Ganyu_gen" key18={strKey} />
const char: ICharacterSheet = {
  name: tr("name"),
  cardImg: card,
  thumbImg: thumb,
  thumbImgSide: thumbSide,
  bannerImg: banner,
  rarity: data_gen.star,
  elementKey: "cryo",
  weaponTypeKey: data_gen.weaponTypeKey as WeaponTypeKey,
  gender: "F",
  constellationName: tr("constellationName"),
  title: tr("title"),
  baseStat: data_gen.base,
  baseStatCurve: data_gen.curves,
  ascensions: data_gen.ascensions,
  talent: {
    formula,
    sheets: {
      auto: {
        name: tr("auto.name"),
        img: normalSrc(data_gen.weaponTypeKey as WeaponTypeKey),
        sections: [
          normalDocSection(tr, formula, data),
          {
            text: tr("auto.fields.charged"),
            fields: [{
              text: `Aimed Shot`,
              formulaText: stats => <span>{data.charged.aimedShot[stats.tlvl.auto]}% {Stat.printStat(getTalentStatKey("charged", stats), stats)}</span>,
              formula: formula.charged.aimShot,
              variant: stats => getTalentStatKeyVariant("charged", stats),
            }, {
              text: `Aimed Shot Charge Level 1`,
              formulaText: stats => <span>{data.charged.aimShot1[stats.tlvl.auto]}% {Stat.printStat(getTalentStatKey("charged", stats, "cryo"), stats)}</span>,
              formula: formula.charged.aimShot1,
              variant: stats => getTalentStatKeyVariant("charged", stats, "cryo"),
            }, {
              text: `Frostflake Arrow DMG`,
              formulaText: stats => {
                if (stats.hitMode === "avgHit") {
                  const [conditionalNum] = stats.conditionalValues?.character?.Ganyu?.a1 ?? []
                  if (conditionalNum) {
                    const statKey = `cryo${stats.reactionMode === "cryo_melt" ? "_melt" : ""}_charged_hit`
                    return <span>{data.charged.frostflake[stats.tlvl.auto]}% {Stat.printStat(statKey, stats)} * (1 + Min( 100% , 20% + {Stat.printStat("critRate_", stats)} + {Stat.printStat("charged_critRate_", stats)} ) * {Stat.printStat("critDMG_", stats)} )</span>
                  }
                }
                return <span>{data.charged.frostflake[stats.tlvl.auto]}% {Stat.printStat(getTalentStatKey("charged", stats, "cryo"), stats)}</span>
              },
              formula: formula.charged.frostflake,
              variant: stats => getTalentStatKeyVariant("charged", stats, "cryo"),
            }, {
              text: `Frostflake Arrow Bloom DMG`,
              formulaText: stats => {
                if (stats.hitMode === "avgHit") {
                  const [conditionalNum] = stats.conditionalValues?.character?.Ganyu?.a1 ?? []
                  if (conditionalNum) {
                    const statKey = `cryo${stats.reactionMode === "cryo_melt" ? "_melt" : ""}_charged_hit`
                    return <span>{data.charged.frostflakeBloom[stats.tlvl.auto]}% {Stat.printStat(statKey, stats)} * (1 + Min( 100% , 20% + {Stat.printStat("critRate_", stats)} + {Stat.printStat("charged_critRate_", stats)} ) * {Stat.printStat("critDMG_", stats)} )</span>
                  }
                }
                return <span>{data.charged.frostflakeBloom[stats.tlvl.auto]}% {Stat.printStat(getTalentStatKey("charged", stats, "cryo"), stats)}</span>
              },
              formula: formula.charged.frostflakeBloom,
              variant: stats => getTalentStatKeyVariant("charged", stats, "cryo"),
            },],
            conditional: { // UndividedHeart
              key: "a1",
              canShow: stats => stats.ascension >= 1,
              name: <span>After firing a <b>Frostflake</b> Arrow</span>,
              fields: [{
                text: "Frostflake CRIT Rate",
                value: "+20%",
              }, {
                text: "Duration",
                value: "5s",
              }]
            },
          }, {
            conditional: { // DewDrinker
              key: "c1",
              canShow: stats => stats.constellation >= 1,
              name: <span>Opponent taking DMG from a Charge Level 2 <b>Frostflake Arrow</b> or <b>Frostflake Arrow Bloom</b> decreases opponents</span>,
              stats: { cryo_enemyRes_: -15 },
            },
          },
          plungeDocSection(tr, formula, data)
        ],
      },
      skill: {
        name: tr("skill.name"),
        img: skill,
        sections: [{
          text: tr("skill.description"),
          fields: [{
            text: "Inherited HP",
            formulaText: stats => <span>{data.skill.hp[stats.tlvl.skill]}% {Stat.printStat("finalHP", stats)}</span>,
            formula: formula.skill.hp,
            variant: "success",
          }, {
            text: "Skill DMG",
            formulaText: stats => <span>{data.skill.dmg[stats.tlvl.skill]}% {Stat.printStat(getTalentStatKey("skill", stats), stats)}</span>,
            formula: formula.skill.dmg,
            variant: stats => getTalentStatKeyVariant("skill", stats),
          }, {
            text: "Duration",
            value: "6s",
          }, {
            text: "CD",
            value: "10s",
          }, {
            canShow: stats => stats.constellation >= 2,
            text: "Charges",
            value: 2
          }]
        }],
      },
      burst: {
        name: tr("burst.name"),
        img: burst,
        sections: [{
          text: tr("burst.description"),
          fields: [{
            text: "Ice Shard DMG",
            formulaText: stats => <span>{data.burst.dmg[stats.tlvl.burst]}% {Stat.printStat(getTalentStatKey("burst", stats), stats)}</span>,
            formula: formula.burst.dmg,
            variant: stats => getTalentStatKeyVariant("burst", stats),
          }, {
            text: "Duration",
            value: "15s",
          }, {
            text: "CD",
            value: "15s",
          }, {
            text: "Energy Cost",
            value: 60,
          }],
          conditional: { // Harmony
            key: "a4",
            canShow: stats => stats.ascension >= 4,
            partyBuff: "partyActive",
            header: conditionalHeader("passive2", tr, passive2),
            description: tr("passive2.description"),
            name: <span>Active members in the AoE of <b>Celestial Shower</b></span>,
            stats: { cryo_dmg_: 20 },
          },
        }, {
          conditional: { // WestwardSojourn
            key: "c4",
            canShow: stats => stats.constellation >= 4,
            partyBuff: "partyAll",
            header: conditionalHeader("constellation4", tr, c4),
            description: tr("constellation4.description"),
            name: <span>Opponents standing within the AoE of <b>Celestial Shower</b></span>,
            maxStack: 5,
            stats: { dmg_: 5 },
            fields: [{
              text: "Effect Linger Duration",
              value: "3s"
            }]
          }
        }],
      },
      passive1: talentTemplate("passive1", tr, passive1),
      passive2: talentTemplate("passive2", tr, passive2),
      passive3: talentTemplate("passive3", tr, passive3),
      constellation1: talentTemplate("constellation1", tr, c1),
      constellation2: talentTemplate("constellation2", tr, c2),
      constellation3: talentTemplate("constellation3", tr, c3, "burstBoost"),
      constellation4: talentTemplate("constellation4", tr, c4),
      constellation5: talentTemplate("constellation5", tr, c5, "skillBoost"),
      constellation6: talentTemplate("constellation6", tr, c6),
    },
  },
};
export default char;
