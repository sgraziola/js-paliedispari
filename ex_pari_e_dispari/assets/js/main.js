/* Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto. */

//prompt:L’utente sceglie pari o dispari
let userChoice = prompt("Scegli se essere pari o dispari");
const choiceEl = document.querySelector("h2.choice");
if (userChoice !== "pari" && userChoice !== "dispari"){
    alert("Attenzione il valore inserito non è corretto!");
    location.reload();
}
//prompt: l'utente inserisce un numero da 1 a 5
let userNumber = Number(prompt("Scegli un numero tra 1 e 5"));
if (userNumber > 5 || userNumber === 0 || isNaN(userNumber) ){
    alert("Attenzione il numero inserito non è corretto!");
    location.reload();
}
// stampo a schermo la scelta dell'utente
choiceEl.innerHTML = (`Hai scelto ${userChoice}`);

//funzione
    //-genera numero random per PC
function randomNumber(){
    return Math.ceil(Math.random() * 5);
}
//assegno valore random al PC
const pcNumber = randomNumber();

//stampo a schermo i valori userNumber e pcNumber
const utenteEl = document.querySelector("h3.utente");
const pcEl = document.querySelector("h3.pc");
utenteEl.innerHTML = (`Il tuo numero è ${userNumber}`);
pcEl.innerHTML = (`Il numero del PC è ${pcNumber}`);


//console.log(userNumber, "UTENTE");
//console.log(pcNumber, "PC");

//somma i due numeri
const sumNumbers = userNumber + pcNumber;

//funzione 
    //-se somma pari o dispari
function pariDispari (sum){
    if(sum % 2 === 0){
        return true;
    }
    return false;
}

//chiamare il vincitore
const winnerEl = document.querySelector("h2.winner");
if (pariDispari(sumNumbers) && userChoice === "pari"){
    winnerEl.innerHTML= ("Il vincitore sei tu!");
} else if (!pariDispari(sumNumbers) && userChoice === "dispari"){
    winnerEl.innerHTML= (`Il vincitore sei tu`);
} else {
    winnerEl.innerHTML= (`Il vincitore è il PC`);
}
