import { Category} from "../types/types.js";

const handleCategoryChange = (category: Category) => {
    if (category === Category.GENERAL) {
        console.log('Zmiana na general!')
    } else if (category === Category.GYM) {
        alert ("Oj tak byczq")
    } else if (category === Category.HOBBY) {
        document.body.style.background = "red";
    } else if (category === Category.WORK) {
        document.body.style.background = "green";
        alert ("Hej ho, hej ho, do pracy by się szło")
        console.log('Work work baby!')
    } else {
        const never: never = category;
        console.log(never);
    }
}

export const renderCategories = (
    categories: Category[], 
    categoriesContainerElement: HTMLElement, 
    inputChangeCallback: (category: Category) => void
    ) => {
    categories.forEach((category) => {
        const categoryElement: HTMLElement = document.createElement("li");

        const radioInputElement: HTMLInputElement =
            document.createElement("input");
        radioInputElement.type = "radio";
        radioInputElement.name = "category";
        radioInputElement.value = category;
        radioInputElement.id = `category-${category}`;
        radioInputElement.addEventListener("change", () => {
            inputChangeCallback(category);
            handleCategoryChange(category);
        });

        const labelElement: HTMLLabelElement = document.createElement("label");
        labelElement.setAttribute("for", `category-${category}`);
        labelElement.innerText = category;

        categoryElement.appendChild(radioInputElement);
        categoryElement.appendChild(labelElement);

        categoriesContainerElement.appendChild(categoryElement);
    });
};
