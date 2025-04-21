export type ModuleContent = {
  id: number
  moduleId: number
  label: string
  completed?: Date | null
  duration?: number
  hits?: number
  exp?: number
}

export type ModuleType = {
  id: number
  label: string
  content: ModuleContent[]
  completed?: Date | null
}
