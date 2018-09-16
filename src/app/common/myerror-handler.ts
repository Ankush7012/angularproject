import { ErrorHandler } from "@angular/core";

export class MyErrorHandler implements ErrorHandler{
    handleError(error:any){
        console.log(error);
        alert('An unexpected error occured');
    }
}