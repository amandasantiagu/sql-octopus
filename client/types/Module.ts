export type ModuleContent = {
  id: string
  moduleId: string
  label: string
  completed?: Date | null
  duration?: string
  hits?: number
  exp?: number
}

export type ModuleType = {
  id: string
  label: string
  content: ModuleContent[]
  completed?: Date | null
}
