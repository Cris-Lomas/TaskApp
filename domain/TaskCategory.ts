import { ICategory } from "@/interfaces/ICategory";

// Representa una categoría de tareas
export class TaskCategory implements ICategory{

    constructor(
        readonly id: number, 
        readonly name : string
    ){
        this.id = id,
        this.name = name
    }

    rename = (newName : string) : TaskCategory => new TaskCategory(this.id, newName)

}