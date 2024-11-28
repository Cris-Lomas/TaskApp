import { taskService } from "@/services/TaskService";

export class Task {

    constructor(
        readonly id : number,
        readonly name : string,
        readonly categoryId: number = 0,
        readonly isCompleted : boolean = false,
        readonly isDeleted : boolean = false
    ) {
        this.id = id
        this.name = name
        this.categoryId = categoryId
        this.isCompleted = isCompleted
        this.isDeleted = isDeleted
    }

    toggleComplete = () : Task => new Task(this.id, this.name, this.categoryId, !this.isCompleted, this.isDeleted)

    delete = () : Task => new Task(this.id, this.name, this.categoryId, this.isCompleted, true)

    restore = () : Task => new Task(this.id, this.name, this.categoryId, this.isCompleted, false)

    hasCategory = () : boolean => this.categoryId !== 0

    deleteCategory = () : Task => new Task(this.id, this.name, 0, this.isCompleted, this.isDeleted)

    moveToCategory = (categoryId : number) : Task => new Task(this.id, this.name, categoryId, this.isCompleted, this.isDeleted)

    rename = (newName: string): Task => new Task(this.id, newName, this.categoryId, this.isCompleted, this.isDeleted)
    
}