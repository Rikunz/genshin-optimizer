import { WeaponData } from '@genshin-optimizer/pipeline'
import { input } from '../../../../Formula'
import { equal, percent, subscript } from '../../../../Formula/utils'
import { WeaponKey } from '@genshin-optimizer/consts'
import { cond, stg, st, trans } from '../../../SheetUtil'
import { dataObjForWeaponSheet } from '../../util'
import { IWeaponSheet } from '../../IWeaponSheet'
import WeaponSheet, { headerTemplate } from '../../WeaponSheet'
import data_gen_json from './data_gen.json'

const key: WeaponKey = "PrototypeCrescent"
const [, trm] = trans("weapon", key)
const data_gen = data_gen_json as WeaponData

const atk_s = [.36, .45, .54, .63, .72]
const [condPassivePath, condPassive] = cond(key, "Unreturning")
const atk_ = equal(condPassive, "on", subscript(input.weapon.refineIndex, atk_s))
const moveSPD_ = equal(condPassive, "on", percent(.1))

const data = dataObjForWeaponSheet(key, data_gen, {
  premod: {
    atk_,
    moveSPD_
  }
})

const sheet: IWeaponSheet = {
  document: [{
    value: condPassive,
    path: condPassivePath,
    header: headerTemplate(key, st("conditional")),
    name: trm("condName"),
    states: {
      on: {
        fields: [{
          node: atk_
        }, {
          node: moveSPD_
        }, {
          text: stg("duration"),
          value: 10,
          unit: 's'
        }]
      }
    }
  }],
}
export default new WeaponSheet(key, sheet, data_gen, data)
