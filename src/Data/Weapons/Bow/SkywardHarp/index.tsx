import type { WeaponData } from 'pipeline'
import { input } from '../../../../Formula'
import { constant, percent, subscript, prod, infoMut } from "../../../../Formula/utils"
import { WeaponKey } from '../../../../Types/consts'
import { customDmgNode } from '../../../Characters/dataUtil'
import { dataObjForWeaponSheet } from '../../util'
import WeaponSheet, { IWeaponSheet } from '../../WeaponSheet'
import iconAwaken from './AwakenIcon.png'
import data_gen_json from './data_gen.json'
import icon from './Icon.png'

const key: WeaponKey = "SkywardHarp"
const data_gen = data_gen_json as WeaponData
const critd_s = [.20, .25, .30, .35, .40]
const dmgPerc = percent(1.25)

const critDMG_ = subscript(input.weapon.refineIndex, critd_s)
const dmg = customDmgNode(prod(dmgPerc, input.total.atk), "elemental", { hit: { ele: constant("physical") }})

const data = dataObjForWeaponSheet(key, data_gen, {
  premod: {
    critDMG_
  }
})

const sheet: IWeaponSheet = {
  icon,
  iconAwaken,
  document: [{
    fields: [{
      node: infoMut(dmg, { key: "sheet:dmg" })
    }]
  }]
}

export default new WeaponSheet(key, sheet, data_gen, data)
