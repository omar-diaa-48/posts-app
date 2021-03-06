import { CustomError } from "./custom-error";

export class BadRequestError extends CustomError{
    statusCode=400;
    constructor(message:string){
        super(message);

        Object.setPrototypeOf(this, BadRequestError.prototype);
    }

    generateErrors(){
        return [{message:this.message}]
    }
}