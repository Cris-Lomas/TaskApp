import { Task } from "@/domain/Task"
import { taskService } from "@/services/TaskService"

export class TaskFactory {
    
    static async create(name: string, categoryId: number = 0): Promise<Task> {
      if (!name.trim())
        throw new Error('Debe ingresar un nombre para la tarea')

      const id = await taskService.getLastId()
      const task = new Task(id, name, categoryId)
      await taskService.createTask(task)
      return task
    }
  }