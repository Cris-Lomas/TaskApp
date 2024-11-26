import { LAST_ID_KEY, START_TASK_CATEGORY_KEY, START_TASK_KEY } from "@/constants/Names";
import { Task } from "@/domain/Task";
import { TaskCategory } from "@/domain/TaskCategory";
import AsyncStorage from "@react-native-async-storage/async-storage";


class TaskService {

    //Si hay tareas sin categoría asignada y existe al menos una categoría, se asignan a una categoría "No category | Sin categoría"
    hasTasksWithoutCategories = false

    //Si no hay categorías, muestro el listado de tareas completo
    hasCategories = false

    getTasks = async () : Promise<Task[]> =>{
        const keys = await AsyncStorage.getAllKeys()
        const tasksKVP = await AsyncStorage.multiGet(keys.filter(key=>key.startsWith(START_TASK_KEY)))
        const tasks : Task[] = []
        if(tasksKVP != null)
            tasksKVP.forEach(task=> tasks.push(JSON.parse(task.at(1)!!)))
        this.hasTasksWithoutCategories = tasks.some(task => task.id == 0)
        return tasks
    }

    getLastId = async() : Promise<number> => {
        const lastId = await AsyncStorage.getItem(LAST_ID_KEY)
        return lastId ? +lastId : 1
    }

    createTask = async(task : Task) : Promise<void> => {
        await AsyncStorage.setItem(START_TASK_KEY + task.id, JSON.stringify(task))
    }

    getTask = async(id: number) : Promise<Task> => {
        const task = await AsyncStorage.getItem(START_TASK_KEY + id)
        return task != null ? JSON.parse(task) : null
    }

    getCategories = async () : Promise<TaskCategory[]> =>{
        const keys = await AsyncStorage.getAllKeys()
        const categoriesKVP = await AsyncStorage.multiGet(keys.filter(key=>key.startsWith(START_TASK_CATEGORY_KEY)))
        const categories : TaskCategory[] = []
        this.hasCategories = categoriesKVP != null
        if(this.hasCategories)
            categoriesKVP.forEach(category=> categories.push(JSON.parse(category.at(1)!!)))
        return categories
    }

    createCategory = async(taskCategory : TaskCategory) : Promise<void> => {
        await AsyncStorage.setItem(START_TASK_CATEGORY_KEY + taskCategory.id, JSON.stringify(taskCategory))
    }

    getCategory = async(id: number) : Promise<TaskCategory> => {
        const category = await AsyncStorage.getItem(START_TASK_CATEGORY_KEY + id)
        return category != null ? JSON.parse(category) : null
    }

}

export const taskService = new TaskService()