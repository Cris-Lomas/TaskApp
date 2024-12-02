import { Task } from "@/domain/Task";
import { Category } from "@/domain/Category";


class MockedTaskService{

    //Si hay tareas sin categoría asignada y existe al menos una categoría, se asignan a una categoría "No category | Sin categoría"
    hasTasksWithoutCategories = true

    //Si no hay categorías, muestro el listado de tareas completo
    hasCategories = false

    categories = [
        new Category(1, "Compras"),
        new Category(2, "Pendientes para hacer"),
        new Category(3, "Pendientes para hacer2"),
        new Category(4, "Pendientes para hacer3"),
        new Category(5, "Pendientes para hacer4"),
        new Category(6, "Pendientes para hacer5")
    ]

    getTasks = () : Task[] =>{
        const task1 : Task = new Task(1, 'Comprar alimento', 0)
        const task2 : Task = new Task(2, 'Pasear al perro', 0)
        const task3 : Task = new Task(3, 'Terminar proyecto', 0)
        const task4 : Task = new Task(4, 'Estoy en primera categoría', 1)
        return [task1, task2, task3, task4]
    }

    getTasksByCategoryId = (categoryId : number) : Task[] => {
        return this.getTasks().filter(task=> task.categoryId == categoryId)
    }

    getLastId = () : number => {
        return 10
    }

    getLastCategoryId = () : number => {
        return 0
    }

    createTask = (task : Task) : void => {

    }

    getTask = (id: number) : Task | undefined => {
        return this.getTasks().find(task => task.id == id)
    }

    getCategories = () : Category[] => this.categories

    createCategory = (taskCategory : Category) : void => {
        
    }

    getCategory = (id: number) : Category | undefined => {
        return this.getCategories().find(category => category.id == id)
    }

    deleteCategory = (id: number) : void => {
        this.categories = this.categories.filter(category => category.id != id)
    }

    updateCategory = (category: Category) : void => {
        const categoryIdx = this.categories.findIndex(_category => _category.id == category.id)
        this.categories[categoryIdx] = category
    }

}

export const mockedTaskService = new MockedTaskService()