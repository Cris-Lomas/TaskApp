export class MaxLengthExceededException extends Error {
    constructor(public maxLength: number, public actualLength: number) {
        super()
        this.name = 'MaxLengthExceededException'
    }
  }