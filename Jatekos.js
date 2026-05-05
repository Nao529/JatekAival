export default class Jatekos {
    constructor(nev) {
        this.nev = nev;
        this.elet = 100;
        this.pont = 0;
        this.helyzet = {x: 0, y: 0};
        this.hatizsak = [];
        // Pokémon kép (később Services tölti)
        this.kep = "";
    }

    megjelenit() {
        console.log(`Játékos: ${this.nev}`);
        console.log(`Pozíció: (${this.helyzet.x}, ${this.helyzet.y})`);
        console.log(`Pont: ${this.pont}`);
    }
    setHelyzet(dx, dy) {
        this.helyzet.x += dx;
        this.helyzet.y += dy;
    }
    getNev() {
        return this.nev;
    }
    getPont() {
        return this.pont;
    }
    targyFelvesz(targy) {
        this.hatizsak.push(targy);
        this.pont += 10;
    }
}