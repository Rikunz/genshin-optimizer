import { AnyOP, CalcResult, calculation, Calculator as Base } from '@genshin-optimizer/waverider'
import type { Tag } from './data/util'

const { arithmetic } = calculation

type Output = {
  tag: Tag | undefined
  op: 'const' | 'sum' | 'prod' | 'min' | 'max' | 'sumfrac'
  ops: CalcResult<number, Output>[]
}

export class Calculator extends Base<Output> {
  override computeMeta(op: Exclude<AnyOP, 'read'>, tag: Tag | undefined, val: any, x: (CalcResult<any, Output> | undefined)[], _br: CalcResult<any, Output>[], ex: any): Output {
    function constOverride(): Output {
      return { tag, op: 'const', ops: [] }
    }

    switch (op) {
      case 'sum': case 'prod': case 'min': case 'max': case 'sumfrac': {
        const empty = arithmetic[op]([], ex)
        const ops = x.filter(x => x!.val !== empty) as CalcResult<number, Output>[]
        if (ops.length <= 1) return ops[0]?.meta ?? constOverride()
        if (op === 'prod' && val === 0) return constOverride()

        return { tag, op, ops }
      }

      case 'const': case 'subscript': return constOverride()
      case 'match': case 'thres': case 'lookup': return x.find(x => x)!.meta
      case 'tag': return { ...x[0]!.meta, tag }
      default: throw new Error('Should not reach this point')
    }
  }
}

type FormulaText = {
  name: string | undefined, formula: string
  src: string | undefined, prec: number

  deps: FormulaText[]
}
export function translate(data: CalcResult<number, Output>, cache: Map<CalcResult<number, Output>, FormulaText> = new Map()): FormulaText {
  const old = cache.get(data)
  if (old) return old
  const { val, meta: { tag, op, ops } } = data

  function getString(ops: CalcResult<number, Output>[], prec: number, deps: FormulaText[]): string[] {
    return ops.map(op => {
      const text = translate(op, cache)
      if (text.name) return deps.push(text), text.name
      if (text.prec >= prec) return deps.push(...text.deps), text.formula
      return `(${text.formula})`
    })
  }

  let formula: string, prec: number, deps: FormulaText[] = []
  switch (op) {
    case 'const':
      formula = tag?.q?.endsWith('_')
        ? `${(val * 100).toFixed(2)}%` : `${val}`
      prec = Infinity
      break
    case 'sum': case 'prod': case 'max': case 'min': {
      const { head, joiner, end } = details[op]
      prec = details[op].prec
      formula = head + getString(ops, prec, deps).join(joiner) + end
    }
      break
    case 'sumfrac': {
      const [dem] = getString(ops, 2, deps)
      const [num1, num2] = getString(ops, 1, deps)

      formula = `${dem} / (${num1} + ${num2})`
      prec = details.prod.prec
    }
  }
  let name: string | undefined, src: string | undefined
  if (tag) {
    name = '(' + Object.values(tag).join(' ') + `) ${data.val}`
    // TODO: Compute name, unit, source, etc.
  }

  const result: FormulaText = { name, formula, prec, src, deps: [...new Set(deps)] }
  cache.set(data, result)
  return result
}

const details = {
  sum: { head: '', joiner: ' + ', end: '', prec: 1 },
  prod: { head: '', joiner: ' * ', end: '', prec: 2 },
  max: { head: 'Max(', joiner: ', ', end: ')', prec: Infinity },
  min: { head: 'Min(', joiner: ', ', end: ')', prec: Infinity },
} as const
