import JatekTer from "./JatekTer.js";
import Services from "./Services.js";

const VEGPONT = "https://pokeapi.co/api/v2/pokemon/pikachu";
const SERVICES = new Services();
const JATEKTER_ELEM = document.getElementById("jatekTer");

const JATEKTER = new JatekTer(JATEKTER_ELEM, SERVICES, VEGPONT);

JATEKTER.init();

document.addEventListener("keydown", (e) => {
    switch(e.key) {
        case "ArrowUp":
            JATEKTER.mozgatas(0, -1);
            break;
        case "ArrowDown":
            JATEKTER.mozgatas(0, 1);
            break;
        case "ArrowLeft":
            JATEKTER.mozgatas(-1, 0);
            break;
        case "ArrowRight":
            JATEKTER.mozgatas(1, 0);
            break;
    }
});