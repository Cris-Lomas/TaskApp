import { LAST_ID_KEY, START_TASK_CATEGORY_KEY, START_TASK_KEY } from "@/constants/Names";
import { Task } from "@/domain/Task";
import { TaskCategory } from "@/domain/TaskCategory";
import AsyncStorage from "@react-native-async-storage/async-storage";


class TaskService {

    getTasks = async () : Promise<Task[]> =>{
        const keys = await AsyncStorage.getAllKeys()
        const tasksKVP = await AsyncStorage.multiGet(keys.filter(key=>key.startsWith(START_TASK_KEY)))
        const tasks : Task[] = []
        if(tasksKVP != null)
            tasksKVP.forEach(task=> tasks.push(JSON.parse(task.at(1)!!)))
        return tasks
    }

    getTasksByCategoryId = (categoryId : number) : Task[] => {
        return []
    }

    getLastId = async() : Promise<number> => {
        const tasks = await this.getTasks()
        const maxId = tasks.reduce((max, task) => Math.max(max, task.id), 0)
        return maxId
    }

    getLastCategoryId = async() : Promise<number> => {
        const categories = await this.getCategories()
        const maxId = categories.reduce((max, category) => Math.max(max, category.id), 0)
        return maxId
    }

    createTask = async(task : Task) : Promise<void> => {
        await AsyncStorage.setItem(START_TASK_KEY + task.id, JSON.stringify(task))
    }

    updateTask = async(task : Task) : Promise<void> => {
        await AsyncStorage.mergeItem(START_TASK_KEY + task.id, JSON.stringify(task))
    }

    getTask = async(id: number) : Promise<Task> => {
        const task = await AsyncStorage.getItem(START_TASK_KEY + id)
        return task != null ? JSON.parse(task) : null
    }

    getCategories = async () : Promise<TaskCategory[]> =>{
        const keys = await AsyncStorage.getAllKeys()
        const categoriesKVP = await AsyncStorage.multiGet(keys.filter(key=>key.startsWith(START_TASK_CATEGORY_KEY)))
        const categories : TaskCategory[] = []
        const hasCategories = categoriesKVP != null
        if(hasCategories)
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