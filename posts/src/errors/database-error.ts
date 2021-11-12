import { CustomError } from "./custom-error";

export class DatabaseError extends CustomError{
    statusCode=500;
    reason='Error in database';

    constructor(){
        super('Error in database')

        Object.setPrototypeOf(this, DatabaseError.prototype)
    }

    generateErrors(){
        return [{message:this.reason}]
    }
}