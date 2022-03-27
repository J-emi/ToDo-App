export interface TaskInterface {
    name: string;
    done: boolean;
    category?: Category;
}

export type TaskType = {
    name:string;
    done: boolean;
    category?: Category;
}

/* Interface i type mozna uzywac zamiennie, ale trzeba sie trzymac konsewentnie jednej wersji.
Interface jest w postaci obiektu i mozna stworzyc kilka o tej samej nazwie, ktore zostana polaczone 
(mozna nadpisywac importowane). 
 */

export enum Category {
    GENERAL = "general",
    WORK = "work",
    GYM = "gym",
    HOBBY = "hobby",
};
