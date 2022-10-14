/* Palidroma
Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma
 */

//Chiedere all’utente di inserire una parola con prompt
const userWord = prompt("Inserisci una parola e ti dirò se è palindroma");
//creare funzione palindroma
    //split() converto string di prompt in array
    //creo nuova const
    //-reverse() invertire ordine elementi array
    //uso join per trasformare il nuovo array in una seconda stringa
    // Se la nuova stringa è uguale alla parola inserita dall'utente allora la parola inserita è palindroma

function palindroma(word) {
const firstArray = word.split("");
const secondArray = firstArray.reverse();
const newWord = secondArray.join("");
let isPalindromic = false;
    if (newWord === word){
        isPalindromic = true;
    }
return isPalindromic;
}

palindroma(userWord);
const verifiedEl = document.querySelector("h1");
if (palindroma(userWord)){
    verifiedEl.innerHTML= (`${userWord} è una parola palindroma`);
} else {
    verifiedEl.innerHTML= (`${userWord} non è una parola palindroma`);
}