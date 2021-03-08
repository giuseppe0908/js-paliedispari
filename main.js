// cheiedere all'utente un nome
var nome = prompt("inserisci un nome");
//Verificare se la parola scritta daall'utente è palindroma
palindroma(nome);
function palindroma(nom){
  var nome_reverse = nom.split("").reverse().join("");
  for (var i = 0; i < nome.length; i++) {
     if (nome == nome_reverse) {
       console.log(nome +" "+" è polindrome");
     }else {
       console.log(nome +" "+ " non è polindrome");
     }
  }
  return nome_reverse;
}


//Utente deve scegliere pari o dispari
var verdetto = prompt("inserisci pari o dispari");
verdetto = verdetto.toLowerCase();
 if ((verdetto != "pari") && (verdetto != "dispari")) {
    verdetto = prompt("Ti prego Reiserisci  pari o dispari");
    verdetto = verdetto.toLowerCase();
  }
  console.log(verdetto);
//Utente deve scegliere un numero da 1 a 5
var flag = false;
while (!flag) {
  numero = parseInt(prompt("inserisci un numero da 1 a 5"));

  if (isNaN(numero) || numero > 5 || numero <= 0) {
    numero = parseInt(prompt("reinserisci un numero da 1 a 5"));
  }else {
    flag = true;
  }
}
console.log("Il numero che hai scelto è:"+" "+ numero);

var somma = 0;
//generiamo un numero random attraverso la funzione random per il computer
random(1,5);
function random(min , max){
  if (isNaN(min) && (max)) {
    console.log("Non sono numeri");
  }else {
    numero_random = Math.floor(Math.random()*(max-min +1)+1);
    return numero_random;
  }
}
console.log("Il numero random del computer è:" +" "+ numero_random);
// somma = numero + numero_random;
// console.log(somma);
//Creiamo una funzione che verifica se la somma dei due numeri è pari o dispari
paliedispari(numero, numero_random);

function paliedispari(n1, n2){
  somma = n1 + n2;
  console.log("La somma è:"+" "+somma);
  if (!(somma%2) && (verdetto == "pari")) {
       console.log("il numero è pari hai vinto");
  }else if(!(somma%2) && (verdetto == "dispari")) {
      console.log("il numero è pari tu hai scelto dispari hai perso");
  }else if ((somma%2) && (verdetto == "dispari")) {
       console.log("il numero è dispari hai vinto");
  }else {
      console.log("il numero è dispari hai perso");
  }

}
