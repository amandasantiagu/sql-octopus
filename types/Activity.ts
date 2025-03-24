import { User } from './User'

type TypesActivities =
  | 'fill-blanks'
  | 'only-choice'
  | 'drag-drop'
  | 'combining-pairs'
  | 'true-false'

type Blanks = {
  placeholder: string
  correctAnswer: string
}

export type Table = {
  id: number
  label: string
  values: string[]
}

export type ActivityType = {
  id: number
  type?: TypesActivities
  description?: string
  template?: string
  table?: Table[]
  blanks?: Blanks[]
  answer?: string
}
