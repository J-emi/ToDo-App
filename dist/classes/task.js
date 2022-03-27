import { Category } from "../types/types.js";
/* Wykorzystywane do reprezentowania modelu danych, komponentów itd.*/
export class TaskClass {
    constructor(name, done, category = Category.GENERAL) {
        this.name = name;
        this.done = done;
        this.category = category;
        this.createdAt = new Date();
    }
    ;
    //Metoda
    logCreationDate() {
        console.log(`Task został stworzony ${this.createdAt}`);
    }
    ;
}
