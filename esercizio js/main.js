 // esercizio1
 let n1 = 1;
 let n2 = 2;
 console.log("il valore della variabile num1 è " + n1 );
 console.log("il valore della variabile num2 è " + n2 );

 var stringa = "5";
 console.log("il valore della variabile è " + stringa);
 var stringa = "10";
 console.log("il valore della variabile è " + stringa);
 
 const PIGRECO = 3.14159265359;
 console.log(PIGRECO);


 //esercizio 2
let num1 = 6;
let num2 = 2;
let num3 = 4;
let num4 = 7;
let num5 = 9;

let somma= num1+num2+num3+num4+num5 
console.log(somma);
let media = + (num1+num2+num3+num4+num5)/5
console.log(division);


//esercizio 3
let annocorrente=2024
let Annonascita=1999

let annoindividuo= annocorrente-Annonascita;
console.Log(AnnoIndividuo)

let annimancanti=100-annoindividuo
Console.Log(anniMancanti)

//esercizio 4 
let variabile1 = Number (prompt ("Inserisci il primo numero")) ;
console.log("Il primo numero è " + (variabile1));
let variabile2 = Number (prompt ("Inserisci il secondo numero")) ;
console.log("Il secondo numero è " + (variabile2));

let somma1 = variabile1 + variabile2;
let sottrazione = variabile1 - variabile2;
let moltiplicazione = variabile1 * variabile2;
let divisione = variabile1 / variabile2;
let potenza = variabile1 ** variabile2;
alert ("Con i numeri scelti, i risultati delle varie operazioni sono: " + "somma " + (somma) + ", sottrazione" + (sottrazione) + ", moltiplicazione " + (moltiplicazione) + ", divisione " + (divisione) + ", potenza " + (potenza) +"")

// esercizio 5
let TotGatti = 27;
let gattiPerFila = 5;

let numeroFile = Math.round(TotGatti / gattiPerFila);

let gattiRimanenti = TotGatti % gattiPerFila;

let gattiMancanti = gattiPerFila - gattiRimanenti;

console.log(`Ci sono ${numeroFile} file di gatti e ne mancano ${gattiMancanti} per una nuova fila, con un resto di ${gattiRimanenti}`);
