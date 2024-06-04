//chiedere all’utente il numero di chilometri che vuole percorrere
let userKm = parseFloat(prompt("inserisci il numero di chilometri da percorrere, segna i decimali con il 'punto'"));
//l’età del passeggero.
let userAge = parseInt(prompt("inserisci la tua età"));

//calcolare prezzo biglietto in base ai km (0.21 € al km)
let pricePerKm = userKm * 0.21;

console.log(pricePerKm);

let totalPrice = pricePerKm;

// calcolare lo sconto minorenni
let minorsDiscount = 80 / 100;

// calcolare lo sconto anziani
let eldersDiscount = 60 / 100;

// cambiare il prezzo totale in base all'età
if (userAge <= 17) {
    totalPrice = pricePerKm * minorsDiscount;
}
else if (userAge >= 65) {
    totalPrice = pricePerKm * eldersDiscount;
}
console.log(totalPrice);

// rendere il risultato 2 digit decimali per 
let visiblePrice = totalPrice.toFixed(2);

// collegare all'HTML
document.getElementById("biglietto").innerHTML = "Il costo del tuo biglietto è: " + visiblePrice + "€";