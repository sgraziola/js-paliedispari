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

/* 
const firstArray = userWord.split("");
console.log(firstArray);
const secondArray = firstArray.reverse();
console.log(secondArray);
const newWord = secondArray.join("");
let isPalindromic = false;
if (newWord === userWord){
    isPalindromic = true;
}
if (isPalindromic){
    console.log(`${userWord} è una parola palindroma`)
} else {
    console.log(`${userWord} non è una parola palindroma`)

}
 */
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
if (palindroma(userWord)){
    console.log(`${userWord} è una parola palindroma`);
} else {
    console.log(`${userWord} non è una parola palindroma`);

}