// Ciao ragazzi, esercizio di oggi:
// (insicurissimo) password generator
// nome repo: js-pwdgen-wannabe
// Chiedi all’utente il suo nome, poi chiedi il suo cognome, poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito23.
// Buon coding … :baby-yoda:
// io spero di riuscire a stare zitto per il resto della giornata


// Primo tentativo :)
// document.writeln('Helloworld!');

document.getElementById('prova').innerHTML='Hello World!'

const nome = prompt ();
const cognome = prompt();
const colorepreferito = prompt();

const passwordpersonalizzata = nome + cognome + colorepreferito + "23"; 

document.getElementById('passwordpersonalizzata').innerHTML= "passwordpersonalizzata" ;


console.log(passwordpersonalizzata);