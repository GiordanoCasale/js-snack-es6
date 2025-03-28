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
