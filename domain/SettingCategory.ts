import { ICategory } from "@/interfaces/ICategory"

// Representa una categoría de opciones del menú de configuración
export class SettingCategory implements ICategory{

    constructor(
        public id: number, 
        public name : string
    ){
        this.id = id,
        this.name = name
    }

}