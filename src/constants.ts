import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | string | number

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}
