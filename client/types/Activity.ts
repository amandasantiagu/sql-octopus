type TypesActivities = 'fill_blanks' | 'only_choice' | 'combining_pairs' | 'true_false'

export type Data = {
  id: number
  label: string
  value: any
}

export type ExerciseType = {
  id: number
  type: TypesActivities
  answer: string
  description: string
  explanation: string
  template?: string
  data?: Data[]
  blanks?: string[]
}
