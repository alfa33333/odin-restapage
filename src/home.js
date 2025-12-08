const textList = [
    {
        title: "Food",
        text: "Delicious and freshly prepared meals."
    },
    {
        title: "Atmosphere",
        text: "Cozy and welcoming environment."
    },
    {
        title: "Excellent Service",
        text: "riendly and attentive staff."
    }
];

export default function home() {
    const content = document.getElementById("content");
    const main = document.createElement("div");
    main.classList.add("main");
    content.appendChild(main);
    main.innerHTML = "<h1>Welcome to Our Restaurant</h1><p>Experience the best dining with us!</p>";
    const info = document.createElement("div");
    main.appendChild(info);
    info.innerHTML = "<img class=\"heroimg\" src=\"https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg\" />";
    const infoList = document.createElement("ul");
    infoList.classList.add("items");
    const itemslist = [];
    for (let i = 0; i < 3; i++) {
        itemslist[i] = document.createElement("li");
        infoList.appendChild(itemslist[i]);
        itemslist[i].innerHTML = "<h3>" + textList[i].title + "</h3><p>" + textList[i].text + "</p>";
    }

    info.appendChild(infoList);
}