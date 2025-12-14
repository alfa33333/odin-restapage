import "./styles.css";
import home from "./home";  
import menu from "./menu";
import about from "./about";



const buttonList = [
    "homeButton",
    "menuButton",
];

const buttonfunct = [
    home,
    menu
];

buttonList.forEach((button, index) => {
    const btn = document.getElementById(button);
    btn.addEventListener("click", () => {
        const content = document.getElementById("content");
        clearContent(content);
        buttonfunct[index]();
    }); 
})

function clearContent(element) {
    while(element.hasChildNodes()) {
        element.removeChild(element.firstChild);
    }
}


// home();
// menu();
about();