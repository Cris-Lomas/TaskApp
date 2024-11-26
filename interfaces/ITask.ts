// Representa una tarea individual
export interface ITask {
    id: number
    name: string
    categoryId: number
    isCompleted: boolean
    isDeleted: boolean
    toggleComplete: () => void
    delete: () => void
    restore: () => void
  }