import { MAX_LENGTH_NAMES } from "@/constants/Sizes"
import { MaxLengthExceededException } from "@/errors/MaxLengthExceeded"
import { MinLengthNeededException } from "@/errors/MinLengthNeeded"

// Representa una categoría de tareas
export class Category {

    constructor(
        readonly id: number,
        readonly name : string
    ){
        this.validateName(name)
        this.id = id
        this.name = name
    }

    rename = (newName : string) : Category => {
        this.validateName(newName)
        return new Category(this.id, newName)
    }

    private validateName(nameToValidate : string) : void {
        if(nameToValidate.length > MAX_LENGTH_NAMES)
            throw new MaxLengthExceededException(MAX_LENGTH_NAMES, nameToValidate.length)
        if(nameToValidate.trim().length == 0)
            throw new MinLengthNeededException()
    }

}