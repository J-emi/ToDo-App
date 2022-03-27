import { TaskInterface, Category } from "./types/types.js";
import { render } from "./helpers/render-tasks.js";
import { renderCategories } from "./helpers/render-categories.js";
import { TaskClass } from "./classes/task.js";

const taskNameInputElement: HTMLInputElement = document.querySelector("#name");
const addButtonElement: HTMLButtonElement = document.querySelector("button");
const tasksContainerElement: HTMLElement = document.querySelector(".tasks");
const categoriesContainerElement: HTMLElement =
    document.querySelector(".categories");

let selectedCategory: Category;

const categories: Category[] = [
    Category.GENERAL,
    Category.WORK,
    Category.GYM,
    Category.HOBBY,];

const tasks: TaskInterface[] = [
    {
        name: "Wyrzucić śmieci",
        done: false,
        category: Category.GENERAL,
    },
    {
        name: "Pójść na siłkę",
        done: true,
        category: Category.GYM,
    },
    {
        name: "Nakarmić koty",
        done: false,
        category: Category.WORK,
    },
];

const addTask = (task: TaskInterface) => {
    tasks.push(task);
};

const updateSelectedCategory = (newCategory: Category) => {
    selectedCategory = newCategory;
}; 

addButtonElement.addEventListener("click", (event: Event) => {
    event.preventDefault();
    addTask({
        name: taskNameInputElement.value,
        done: false,
        category: selectedCategory,
    });
    render(tasks, tasksContainerElement);
});

type TaskAsTuple = [string, Category, boolean];

const task: TaskAsTuple = [
    "dzień nóg", 
    Category.GYM, 
    false
];

addTask({ name: "poczytać", category: Category.HOBBY, done: false });

renderCategories(
    categories,
    categoriesContainerElement,
    updateSelectedCategory
);

render(tasks, tasksContainerElement);

const taskClassIntance = new TaskClass("Uczyć się TS", true);