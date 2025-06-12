export interface Answer {
  id: string
  userId: string
  exerciseId: string
  answer: any | null
  createdAt: string
  updatedAt: string
  deletedAt: string | null
}
