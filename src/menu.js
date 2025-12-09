
const dishList = [
    "Dish 1",
    "Dish 2",
    "Dish 3",
    "Dish 4",
    "Dish 5",
];

const categories = [
    "Meat",
    "Vegetarian",
];


export default function menu() {
    const content = document.getElementById("content");
    const main = document.createElement("div");
    main.classList.add("main");
    main.classList.add("menu");
    content.appendChild(main);
    const categoryDivs = [];
    for (let i = 0; i < categories.length; i++) {
        categoryDivs.push(document.createElement("div"));
        main.appendChild(categoryDivs[i]);
        const categoryTitle = document.createElement("h1");
        categoryTitle.textContent = categories[i];
        categoryDivs[i].appendChild(categoryTitle);
        const dishListElement = document.createElement("ul");
        categoryDivs[i].appendChild(dishListElement);
    }

    categoryDivs.forEach((categoryDiv) => {
        dishList.forEach((dish)=> {
            const unorList = categoryDiv.querySelector("ul");
            const itemDish = document.createElement("li");
            itemDish.textContent = dish;
            unorList.appendChild(itemDish);
        });
    });



}