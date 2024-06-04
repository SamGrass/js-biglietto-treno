//chiedere all’utente il numero di chilometri che vuole percorrere
let userKm = parseFloat(prompt("inserisci il numero di chilometri da percorrere, segna i decimali con il 'punto'"));
//l’età del passeggero.
let userAge = parseInt(prompt("inserisci la tua età"));

console.log(userKm, userAge);
//calcolare il prezzo totale del viaggio

//calcolare prezzo biglietto in base ai km (0.21 € al km)
let pricePerKm = userKm * 0.21;

console.log(pricePerKm);

let totalPrice;

// calcolare lo sconto minorenni
let minorsDiscount = 80 / 100;

// calcolare lo sconto anziani
let eldersDiscount = 60 / 100;


// L’output del prezzo finale va messo (con massimo due decimali, per indicare centesimi sul prezzo).
