import { ICategory } from "@/interfaces/ICategory";

// Representa una categoría de tareas
export class TaskCategory implements ICategory{
    id: number;
    name: string;

    constructor(id: number, name : string){
        this.id = id,
        this.name = name
    }

}