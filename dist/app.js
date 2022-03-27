import { Category } from "./types/types.js";
import { render } from "./helpers/render-tasks.js";
import { renderCategories } from "./helpers/render-categories.js";
import { TaskClass } from "./classes/task.js";
const taskNameInputElement = document.querySelector("#name");
const addButtonElement = document.querySelector("button");
const tasksContainerElement = document.querySelector(".tasks");
const categoriesContainerElement = document.querySelector(".categories");
let selectedCategory;
const categories = [
    Category.GENERAL,
    Category.WORK,
    Category.GYM,
    Category.HOBBY,
];
const tasks = [
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
const addTask = (task) => {
    tasks.push(task);
};
const updateSelectedCategory = (newCategory) => {
    selectedCategory = newCategory;
};
addButtonElement.addEventListener("click", (event) => {
    event.preventDefault();
    addTask({
        name: taskNameInputElement.value,
        done: false,
        category: selectedCategory,
    });
    render(tasks, tasksContainerElement);
});
const task = [
    "dzień nóg",
    Category.GYM,
    false
];
addTask({ name: "poczytać", category: Category.HOBBY, done: false });
renderCategories(categories, categoriesContainerElement, updateSelectedCategory);
render(tasks, tasksContainerElement);
const taskClassIntance = new TaskClass("Uczyć się TS", true);
