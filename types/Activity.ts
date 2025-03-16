import { User } from './User'

type TypesActivities =
  | 'fill-blanks'
  | 'only-choice'
  | 'drag-and-drop'
  | 'combining-pairs'
  | 'true-false'

type Blanks = {
  placeholder: string
  correctAnswer: string
}

export type ActivityType = {
  id: number
  type?: TypesActivities
  description?: string
  template?: string
  blanks?: Blanks[]
  answer?: string
}
