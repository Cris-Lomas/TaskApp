import { ITask } from "@/interfaces/ITask";
import { taskService } from "@/services/TaskService";

export class Task implements ITask{
    id!: number;
    name: string;
    categoryId: number;
    isCompleted: boolean;
    isDeleted: boolean;

    constructor(
        name : string,
        categoryId: number = 0
    ) {
        this.name = name
        this.categoryId = categoryId
        this.isCompleted = false
        this.isDeleted = false
        this.create()
    }

    private create = async () : Promise<void> =>{
        try{
            this.id = await taskService.getLastId()
            await taskService.createTask(this)
        } catch(error){
            console.log(error)
        }
    }

    toggleComplete = () : void => {
        this.isCompleted = !this.isCompleted
    }

    delete = () : void => {
        this.isDeleted = true
    } 

    restore = () : void => {
        this.isDeleted = false
    } 
    
}