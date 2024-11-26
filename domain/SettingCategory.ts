import { ICategory } from "@/interfaces/ICategory"

// Representa una categoría de opciones del menú de configuración
export class SettingCategory implements ICategory{
    id: number;
    name: string;

    constructor(id: number, name : string){
        this.id = id,
        this.name = name
    }

}