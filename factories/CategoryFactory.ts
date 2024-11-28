import { NO_CATEGORY_NAME } from "@/constants/Names"
import { Category } from "@/domain/Category"
import { taskService } from "@/services/TaskService"

export class CategoryFactory {
    
    static async create(name: string): Promise<Category> {
      if (!name.trim())
        throw new Error('Debe ingresar un nombre para la categoría')

      const id = await taskService.getLastCategoryId()
      const category = new Category(id, name)
      await taskService.createCategory(category)
      return category
    }

    static CreateNoCategory() : Category{
        return new Category(0, NO_CATEGORY_NAME)
    }
  }