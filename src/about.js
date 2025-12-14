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

export default function about() {
  const content = document.getElementById("content");
  const main = document.createElement("div");
  main.classList.add("main");
  content.appendChild(main);
  const aboutTitle = document.createElement("h1");
  aboutTitle.textContent = "About Us";
  main.appendChild(aboutTitle); 
  const display = document.createElement("div");
  display.classList.add("display");
  profiles.forEach((profile) => {
    const profileCard = document.createElement("div");
    profileCard.classList.add("profile");
    const img = document.createElement("img");
    img.src = profile.imgSrc;
    profileCard.appendChild(img);
    const title = document.createElement("h2");
    title.textContent = profile.name;
    profileCard.appendChild(title);
    const description = document.createElement("p");
    description.textContent = profile.role;
    profileCard.appendChild(description);
    display.appendChild(profileCard);
  });

    main.appendChild(display);
}
