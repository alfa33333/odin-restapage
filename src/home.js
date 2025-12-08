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
    const header = document.createElement("h1");
    header.textContent = "Welcome to Our Restaurant";
    main.appendChild(header);
    const paragraph = document.createElement("p");
    paragraph.textContent = "Experience the best dining with us!";
    main.appendChild(paragraph);
    const info = document.createElement("div");
    main.appendChild(info);
    const hero = document.createElement("img");
    hero.src = "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg";
    hero.classList.add("heroimg");
    info.appendChild(hero);
    const infoList = document.createElement("ul");
    infoList.classList.add("items");
    const itemslist = [];
    for (let i = 0; i < 3; i++) {
        itemslist[i] = document.createElement("li");
        const h3 = document.createElement("h3");
        const p = document.createElement("p");
        h3.textContent = textList[i].title;
        p.textContent = textList[i].text;
        itemslist[i].appendChild(h3);
        itemslist[i].appendChild(p);
        infoList.appendChild(itemslist[i]);
    }

    info.appendChild(infoList);
}