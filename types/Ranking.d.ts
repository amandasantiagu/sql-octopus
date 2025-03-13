import { User } from './User'

export type RankingType = {
  id: string
  user: User
  time: string
  exp: number
  createdAt?: Date
  updatedAt?: Date
}
