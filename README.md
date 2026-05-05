# Jatek_Aival
Prompt:
Küldök egy tervet és szeretném ha lépésről lépésre haladnánk a folyamattal és magyaráznál is. Először ez alapján a terv alapján szeretnék kérni alap kódokat. Minden amit itt leirtam ragaszkodom hozzá. Nyilván kelleni fog egy index.html is majd, de egyenlőre az osztályok fontosabbak.
Itt a terv:
program belepesi pontja: index.js
peldanyositjuk a JatekTer, meg a Services osztalyt

JatekTer peldanyositja:
- Jatekos
- Info
- Targy
/~~~~~~~~
Jatekos
adattagok:
elet:int, pont:int, helyzet:{x:int, y:int}, hatizsak:[], kep(Pokemon):string

tagfuggvenyek:
megjelenit()
//targyFelvesz() - itt kerul a targy a hatizsakba, pontszamitas
setHelyzet(dx, dy) - ez kiszamolja  ajatekos helyzetet
getNev()
getPont()
/~~~~~~~~
Jatekter
adattagok:
meret:{szelesseg:int, magassag:int}, targyak:[]

tagfuggvenyek:
mozgatas() - itt mozgatjuk a jatekost
init() - beallitjuk a jatekost
/~~~~~~~~
Info
/~~~~~~~~
Targy
pozicio{}
/~~~~~~~~
Services
