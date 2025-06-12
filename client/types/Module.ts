export type ModuleContent = {
  id: string
  moduleId: string
  label: string
  userProgressId?: string
  duration?: number
  hits?: number
  userId?: string
  exp?: number
}

export type ModuleType = {
  id: string
  label: string
  content: ModuleContent[]
}
