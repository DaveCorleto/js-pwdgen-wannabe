// Ciao ragazzi, esercizio di oggi:
// (insicurissimo) password generator
// nome repo: js-pwdgen-wannabe
// Chiedi all’utente il suo nome, poi chiedi il suo cognome, poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito23.
// Buon coding … :baby-yoda:
// io spero di riuscire a stare zitto per il resto della giornata


// Primo tentativo :)
// document.writeln('Helloworld!');

// document.getElementById('prova').innerHTML='Hello World!'

//-------------------------------------

const nome = prompt ("scrivi il tuo nome");
const cognome = prompt("scrivi il tuo cognome");
const colorepreferito = prompt("inserisci il tuo colore preferito");


const passwordpersonalizzata = nome + cognome + colorepreferito + '23'; 

document.getElementById('password_scritta').innerHTML= passwordpersonalizzata;


console.log(passwordpersonalizzata);