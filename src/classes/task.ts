import { Category } from "../types/types.js";

/* Wykorzystywane do reprezentowania modelu danych, komponentów itd.*/

export class TaskClass {
    public name: string;
    public done: boolean;
    public category?: Category;
    
    private createdAt: Date;

    constructor(
        name: string,
        done: boolean,
        category: Category = Category.GENERAL
        ) {
            this.name = name;
            this.done = done;
            this.category = category;
            this.createdAt = new Date();
    };

    //Metoda
    logCreationDate() {
        console.log(`Task został stworzony ${this.createdAt}`)
    };
}