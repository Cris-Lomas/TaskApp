import { NO_CATEGORY_NAME } from "@/constants/Names"
import { TaskCategory } from "@/domain/TaskCategory"
import { taskService } from "@/services/TaskService"

export class TaskCategoryFactory {
    
    static async create(name: string): Promise<TaskCategory> {
      if (!name.trim())
        throw new Error('Debe ingresar un nombre para la categoría')

      const id = await taskService.getLastCategoryId()
      const category = new TaskCategory(id, name)
      await taskService.createCategory(category)
      return category
    }

    static EmptyTaskCategory() : TaskCategory{
        return new TaskCategory(0, NO_CATEGORY_NAME)
    }
  }