export interface Option {
  key: string,
  name: string,
}
export interface Rover extends Option {}
export interface Camera extends Option {}
export interface Sol {
  value: number
}
