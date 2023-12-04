/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

const area = function (l1, l2) {
	let areaRettangolo = l1 * l2;
	return areaRettangolo;
};

console.log("Esercizio 1: " + area(5, 10));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

const crazySum = function (n1, n2) {
	let sum = n1 + n2;
	if (n1 == n2) {
		sum = (n1 + n2) * 3;
	}
	return sum;
};

console.log("Esercizio 2a: " + crazySum(10, 5));
console.log("Esercizio 2b: " + crazySum(10, 10));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

const crazyDiff = function (n) {
	let diffAssoluta = Math.abs(n - 19);
	if (n > 19) {
		diffAssoluta = diffAssoluta * 3;
	}
	return diffAssoluta;
};

console.log("Esercizio 3a: " + crazyDiff(8));
console.log("Esercizio 3b: " + crazyDiff(25));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

const boundary = function (n) {
	return (n > 20 && n <= 100) || n === 400;
};

console.log("Esercizio 4a: " + boundary(30));
console.log("Esercizio 4b: " + boundary(400));
console.log("Esercizio 4c: " + boundary(1));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

const epify = function (string) {
	if (string.startsWith("Epicode")) {
		return string;
	} else {
		return "Epicode" + string;
	}
};

console.log("Esercizio 5: " + epify(" Hello"));
console.log("Esercizio 5: " + epify("Epicode is awesome"));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

const check3and7 = function (n) {
	return n % 3 === 0 || n % 7 === 0;
};

console.log("Esercizio 6: " + check3and7(21));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

const reverseString = function (string) {
	let str = string.split("");
	let strReverse = str.reverse();
	let newArr = strReverse.join("");
	return newArr;
};

console.log("Esercizio 7: " + reverseString("Epicode"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

const upperFirst = function (string) {
	let str = string.split(" ");
	let strUpper = str.map((str) => str.charAt(0).toUpperCase() + str.slice(1));
	return strUpper;
};

console.log("Esercizio 8: " + upperFirst("ciao a tutti"));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

const cutString = function (string) {
	let str = string.slice(1, -1);
	return str;
};

console.log("Esercizio 9: " + cutString("Marco"));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

const giveMeRandom = function (n) {
	let arrNum = [];

	for (let i = 0; i < n; i++) {
		let number = Math.floor(Math.random() * 11);
		arrNum.push(number);
	}
	return arrNum;
};

console.log("Esercizio 10: " + giveMeRandom(10));
