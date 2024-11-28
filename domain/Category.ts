// Representa una categoría de tareas
export class Category {

    constructor(
        readonly id: number, 
        readonly name : string
    ){
        this.id = id,
        this.name = name
    }

    rename = (newName : string) : Category => new Category(this.id, newName)

}