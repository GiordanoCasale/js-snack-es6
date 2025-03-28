//esercizio 1
//andiamo a creare un array di oggetti
const Bike = [
    {
        nome: "Orbea Orca M30i",
        peso: 7.0
    },
    {
        nome: "Merida Reacto 4000",
        peso: 5.6
    },
    {
        nome: "AERO C:68X SLX",
        peso: 4.9
    },
    {
        nome: "Allez E5 Sport",
        peso: 6.4
    },
    {
        nome: "Scott Addict RC 20",
        peso: 4.5
    },
    {
        nome: "Cube Litening AERO C:68X",
        peso: 3.9
    },
]




//andiamo ad inizializzare delle variabili
let minPeso = Bike[0].peso;
let piùLeggera = Bike[0];
//ora andiamo a ciclare l'array per andare a vedere quale bici pesa di meno
for(let i=1; i<Bike.length; i++){
//con l'if andiamo ad impostare la condizione con cui scegliamo la bici meno pesante
    if(Bike[i].peso<minPeso){
        minPeso = Bike[i].peso;
        piùLeggera = Bike[i];
    }
}

console.log(piùLeggera)
//fine esercizio 1

//esercizio 2
//creiamo l'array delle squadre di calcio
const squad = [
    {
        nome: "Roma",
        punti:0,
        falli:0,
    },
    {
        nome:"Lazio",
        punti:0,
        falli:0,
    },
    {
        nome:"Milan",
        punti:0,
        falli:0,
    },
    {
        nome:"Inter",
        punti:0,
        falli:0,
    },
    {
        nome:"Juventus",
        punti:0,
        falli:0,
    },
]

console.log(squad) //lo stampiamo sulla console per constatare se è visualizato

//vado a generare numeri random per i punti e i falli con una funziona
function randomStats(min, max){

return Math.floor(Math.random() * (max-min +1)) +min;
}

//andiamo ad usare un for of per inserire i valori randomici

for(let i in squad ){

    squad[i].punti= randomStats(1,70);
    squad[i].falli= randomStats(1,50);
}
//andiamo a creare un nuovo array in cui inserire solo i nomi e i falli delle squadre
const newarray= [];

for(let i in squad){
    newarray.push({nome:squad[i].nome, falli:squad[i].falli});
}

console.log(newarray)





