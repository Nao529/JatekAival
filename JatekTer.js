import Jatekos from "./Jatekos.js";
import Targy from "./Targy.js";
import Info from "./Info.js";

export default class JatekTer {
    constructor(elem, services, vegpont) {
        this.elem = elem;
        this.services = services;
        this.vegpont = vegpont;
        this.meret = {
            szelesseg: 10,
            magassag: 10
        };
        this.targyak = [];
        this.jatekos = null;
        this.info = null;
    }
    init() {
        this.jatekos = new Jatekos("Pikachu");
        this.info = new Info();
        this.services.getData(this.vegpont, (data) => {
            this.jatekos.kep = data.sprites.front_default;
            this.megjelenit();
        });
        this.targyak.push(new Targy({ x: 2, y: 3 }));
        this.targyak.push(new Targy({ x: 5, y: 6 }));
    }
    megjelenit() {
        this.elem.innerHTML = "";
        const jatekosDiv = document.createElement("div");
        
        jatekosDiv.classList.add("pokemon");
        jatekosDiv.style.left = this.jatekos.helyzet.x * 50 + "px";
        jatekosDiv.style.top = this.jatekos.helyzet.y * 50 + "px";
        jatekosDiv.innerHTML = `
            <h2>${this.jatekos.getNev()}</h2>
            <img src="${this.jatekos.kep}" />
            <p>Pont: ${this.jatekos.getPont()}</p>
            <p>Pozíció: (${this.jatekos.helyzet.x}, ${this.jatekos.helyzet.y})</p>
            `;
        this.elem.appendChild(jatekosDiv);
    }
    mozgatas(dx, dy) {
        this.jatekos.setHelyzet(dx, dy);
        this.megjelenit();
    }
}