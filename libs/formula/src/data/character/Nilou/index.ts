import { cmpEq, cmpGE, max, min, prod, sum } from '@genshin-optimizer/waverider'
import { Character, Data, Element, percent, read } from '../../util'
import { dmgNode, entriesForChar } from '../util'
import data_gen from './data.gen.json'
import skillParam_gen from './skillParam.gen.json'

let a = 0, s = 0, b = 0
export const dm = {
  normal: {
    hitArr: [
      skillParam_gen.auto[a++], // 1
      skillParam_gen.auto[a++], // 2
      skillParam_gen.auto[a++], // 3
    ]
  },
  charged: {
    hit1: skillParam_gen.auto[a++],
    hit2: skillParam_gen.auto[a++],
    stamina: skillParam_gen.auto[a++][0]
  },
  plunging: {
    dmg: skillParam_gen.auto[a++],
    low: skillParam_gen.auto[a++],
    high: skillParam_gen.auto[a++],
  },
  skill: {
    skillDmg: skillParam_gen.skill[s++],
    whirl1Dmg: skillParam_gen.skill[s++],
    whirl2Dmg: skillParam_gen.skill[s++],
    moonDmg: skillParam_gen.skill[s++],
    wheelDmg: skillParam_gen.skill[s++],
    dance1Dmg: skillParam_gen.skill[s++],
    dance2Dmg: skillParam_gen.skill[s++],
    tranquilityAuraDuration: skillParam_gen.skill[s++][0],
    cd: skillParam_gen.skill[s++][0],
    lunarPrayerDuration: skillParam_gen.skill[s++][0],
    pirouetteDuration: skillParam_gen.skill[s++][0],
  },
  burst: {
    skillDmg: skillParam_gen.burst[b++],
    aeonDmg: skillParam_gen.burst[b++],
    cd: skillParam_gen.burst[b++][0],
    cost: skillParam_gen.burst[b++][0],
  },
  passive1: {
    bountyDuration: skillParam_gen.passive1[0][0],
    eleMas: skillParam_gen.passive1[1][0],
    buffDuration: skillParam_gen.passive1[2][0],
  },
  passive2: {
    dmg_: skillParam_gen.passive2[0][0],
    minHp: -skillParam_gen.passive2[1][0],
    maxDmg_: skillParam_gen.passive2[2][0],
  },
  constellation1: {
    moon_dmg_: skillParam_gen.constellation1[0],
    durationInc: skillParam_gen.constellation1[1],
  },
  constellation2: {
    hydro_enemyRes_: -skillParam_gen.constellation2[0],
    dendro_enemyRes_: -skillParam_gen.constellation2[1],
    duration: skillParam_gen.constellation2[2],
  },
  constellation4: {
    energyRegen: skillParam_gen.constellation4[0],
    burst_dmg_: skillParam_gen.constellation4[1],
    duration: skillParam_gen.constellation4[2],
  },
  constellation6: {
    critRate_: skillParam_gen.constellation6[0],
    critDmg_: skillParam_gen.constellation6[1],
    maxCritRate_: skillParam_gen.constellation6[2],
    maxCritDmg_: skillParam_gen.constellation6[3],
  }
} as const

const name: Character = 'Nilou', ele: Element = 'hydro'
const {
  input: {
    team, self: { final, char: { ascension, constellation, skill, burst } }
  },
  custom: {
    a1AfterSkill, a1AfterHit,
    c2Hydro, c2Dendro, c4AfterPirHit
  },
  output: { selfBuff, activeCharBuff, teamBuff, enemyDebuff, dmgEntry }
} = read(name)

const onlyDendroHydroTeam = cmpGE(team.dendro.team.count, 1, cmpEq(team.team.eleCount, 2, 1))
const isGoldenChaliceBountyActive = cmpGE(ascension, 1, cmpEq(onlyDendroHydroTeam, 1, cmpEq(a1AfterSkill, 'on', 1)))
const a1AfterSkillAndHit_eleMas = cmpEq(isGoldenChaliceBountyActive, 1, cmpEq(a1AfterHit, 'on', dm.passive1.eleMas))

const bountifulBloom_dmg_ = cmpGE(ascension, 4, cmpEq(isGoldenChaliceBountyActive, 1,
  min(
    prod(percent(dm.passive2.dmg_), prod(max(sum(final.hp, dm.passive2.minHp), 0), 1 / 1000)),
    percent(dm.passive2.maxDmg_)
  )
))

const c1_moon_dmg_ = cmpGE(constellation, 1, percent(dm.constellation1.moon_dmg_))
const c2_hydro_enemyRes_ = cmpGE(constellation, 2,
  cmpEq(isGoldenChaliceBountyActive, 1,
    cmpEq(c2Hydro, 'hydro', percent(dm.constellation2.hydro_enemyRes_))
  )
)
const c2_dendro_enemyRes_ = cmpGE(constellation, 2,
  cmpEq(isGoldenChaliceBountyActive, 1,
    cmpEq(c2Dendro, 'dendro', percent(dm.constellation2.dendro_enemyRes_))
  )
)
const c4_burst_dmg_ = cmpGE(constellation, 4,
  cmpEq(c4AfterPirHit, 'on', percent(dm.constellation4.burst_dmg_)))
const c6_critRate_ = cmpGE(constellation, 6,
  min(
    prod(percent(dm.constellation6.critRate_), final.hp, 1 / 1000),
    percent(dm.constellation6.maxCritRate_),
  )
)
const c6_critDMG_ = cmpGE(constellation, 6,
  min(
    prod(percent(dm.constellation6.critDmg_), final.hp, 1 / 1000),
    percent(dm.constellation6.maxCritDmg_),
  )
)

const data: Data = [
  ...entriesForChar(name, ele, 'sumeru', data_gen),
  skill.addNode(cmpGE(constellation, 3, 3)),
  burst.addNode(cmpGE(constellation, 5, 3)),

  selfBuff.burst.premod.dmg_.addNode(c4_burst_dmg_),
  selfBuff.premod.critRate_.addNode(c6_critRate_),
  selfBuff.premod.critDMG_.addNode(c6_critDMG_),

  teamBuff.premod.eleMas.addNode(a1AfterSkillAndHit_eleMas),
  teamBuff.bloom.premod.dmg_.addNode(bountifulBloom_dmg_),

  enemyDebuff.hydro.char.res.addNode(c2_hydro_enemyRes_),
  enemyDebuff.dendro.char.res.addNode(c2_dendro_enemyRes_),

  // DMG Formulas
  ...dm.normal.hitArr.map((arr, i) => dmgEntry(`normal${i}`).addNode(dmgNode('atk', arr, 'normal'))),
  ...([1, 2] as const).map(i => dmgEntry(`charged${i}`).addNode(dmgNode('atk', dm.charged[`hit${i}`], 'charged'))),
  ...Object.entries(dm.plunging).map(([k, v]) => dmgEntry(`plunging_${k}`).addNode(dmgNode('atk', v, 'plunging'))),
  ...(['skill', 'dance1', 'dance2', 'whirl1', 'whirl2', 'moon', 'wheel'] as const).map(k =>
    dmgEntry(`skill${k}`).addNode(dmgNode('hp', dm.skill[`${k}Dmg`], 'skill'))),
  ...(['skill', 'aeon'] as const).map(k =>
    dmgEntry(`burst${k}`).addNode(dmgNode('hp', dm.burst[`${k}Dmg`], 'burst'))),
  dmgEntry('skillMoon').premod.dmg_.addNode(c1_moon_dmg_),
]
export default data