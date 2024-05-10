# js-fizzbuzz
Consegna:
Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero e
per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per un altro? Abbiamo visto qualcosa di particolare che possiamo usare?
Consigli del giorno:
Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
BONUS 1:
Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.
BONUS 2:
Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz. Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.


=========================================================================================================================================================================================


1- Creo la base di un ciclo "for" da 1 a 100 compresi.
2- Valuto e creo le variabili necessarie.
3- Creo delle funzioni "if" all'interno di for per selezionare i numeri multipli di 3 e 5 assegnandoli a variabili da utilizzare successivamente.
4- Stampo in console.log tutti i numeri usando la variabile if per sostituire i multipli di 3 e 5 con Fizz e Buzz, usando && per sostituire i numeri divisibili per entrambi con FizzBuzz