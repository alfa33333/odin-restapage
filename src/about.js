const profiles = [
  {
    name: "The Chief",
    role: "It is in charge of doing the heavy stuff",
    imgSrc:
      "https://images.pexels.com/photos/35063543/pexels-photo-35063543.jpeg",
  },
  {
    name: "The cog in the machine",
    role: "He actually do all the cooking",
    imgSrc:
      "https://images.pexels.com/photos/35063543/pexels-photo-35063543.jpeg",
  },
];

function createProfileCard({ name, role, imgSrc }) {
  const card = document.createElement("div");
  card.classList.add("profile");

  const img = document.createElement("img");
  img.src = imgSrc;

  const title = document.createElement("h2");
  title.textContent = name;

  const description = document.createElement("p");
  description.textContent = role;

  card.append(img, title, description);
  return card;
}

export default function about() {
  const content = document.getElementById("content");
  const main = document.createElement("div");
  main.classList.add("main");

  const aboutTitle = document.createElement("h1");
  aboutTitle.textContent = "About Us";

  const display = document.createElement("div");
  display.classList.add("display");

  profiles.forEach(profile => display.appendChild(createProfileCard(profile)));

  main.append(aboutTitle, display);
  content.appendChild(main);
}
