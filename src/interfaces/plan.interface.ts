export interface ICreatePlan {
  name: string
  price: number
  month_duration: number
  games: number
  additional_info: string[]
}

export interface IUpdatePlan extends ICreatePlan {}

export interface IPlan {
  id: string
  name: string
  price: number
  month_duration: number
  games: number
  additional_info: string[]
}