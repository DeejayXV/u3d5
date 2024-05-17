/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics
console.log("------------------------- JS BASICS -------------------------");
/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
const sum = 10 + 20;
console.log(sum);

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
const random = Math.floor(Math.random() * 21);
console.log(random);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
const me = {
  name: "John",
  surname: "Guevarra",
  age: 27,
};
console.log(me);

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
delete me.age;
console.log(me);

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
me.skills = ["JavaScript"];
console.log(me);

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
me.skills.push("html", "css"); // anche se non sono dei linguaggi di programmazione
console.log(me);

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
me.skills.pop();
console.log(me);

// Funzioni
console.log("------------------------- FUNZIONI -------------------------");
/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
function dice() {
  return Math.floor(Math.random() * 6) + 1;
}
const x = dice();
console.log(x);

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
function whoIsBigger(x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}
const resultEs2 = whoIsBigger(3, 2);
console.log(resultEs2);

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
function splitMe(stringa) {
  return stringa.split(" ");
}
const resultEs3 = splitMe("i love epicode");
console.log(resultEs3);

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
function deleteOne(x, y) {
  if (y) {
    return x.slice(1);
  } else {
    return x.slice(0, -1);
  }
}
const resultEs4a = deleteOne("Epicode", true);
console.log(resultEs4a);
const resultEs4b = deleteOne("Epicode", false);
console.log(resultEs4b);

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
function onlyLetters(stringa) {
  let result = "";
  for (let index = 0; index < stringa.length; index++) {
    if (stringa[index]) {
      result += stringa[index];
    }
  }
  return result;
}
const resultEs5 = onlyLetters("i have 4 dogs");
console.log(resultEs5);

//non funziona

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
function whatDayIsIt() {
  const week = ["Lunedi", "Martedi", "Mercoledi", "Giovedi", "Venerdi", "Sabato", "Domenica"];
  const today = new Date();
  const weekIndex = today.getDay() - 1;
  return week[weekIndex];
}
console.log(whatDayIsIt());

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
function rollTheDices(x) {
  let values = [];
  let sum = 0;

  for (let index = 0; index < x; index++) {
    const element = dice();
    values.push(element);
    sum += element;
  }
  return {
    sum: sum,
    values: values,
  };
}
let resultEs8 = rollTheDices(3);
console.log(resultEs8);

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
// function howManyDays(data) {
//   let giorniPassati = new Date(data);
// }

// da finire
function howManyDays(data) {
  const today = new Date();
  console.log(today);
  const insertedDate = new Date(data);
  console.log(insertedDate);
  const millisecond = today - insertedDate;
  console.log(millisecond);
  const dayPassed = Math.floor(millisecond / 1000 / 60 / 60 / 24);
  console.log(dayPassed + " " + "giorni passati");
}
howManyDays("2024-05-1");

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
function isTodayMyBirthday(compleanno) {
  let oggi = new Date();
  let today = oggi.getDate();
  let thisMonth = oggi.getMonth() + 1; //prendiamo la data e il mese di oggi
  let birthday = new Date(compleanno); //prendiamo anche il giorno del compleanno
  let birthMonth = birthday.getMonth() + 1;

  if (today === birthday && thisMonth === birthMonth) {
    //vediamo se la data e mese corrisponde al giorno del compleannno
    return true;
  } else {
    return false;
  }
}
let resultEs10 = isTodayMyBirthday("2024-05-17"); //inseriamo la data del compleanno
console.log(resultEs10); //ritorna "true" se è il tuo compleanno, altrimenti ritorna "false"

// Arrays & Oggetti
console.log("---------------------- ARRAY & OGGETTI ----------------------");

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
function deleteProp(obj, stringa) {
  delete obj[stringa]; //eliminiamo la proprietà nell'oggetto
  return obj;
}

const esercizioC = {
  name: "John",
  surname: "Guevarra",
  age: 27,
};

let resultEs11 = deleteProp(esercizioC, "age");
console.log(resultEs11); //stampiamo l'oggetto senza la proprietà "age"

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
function newestMovie(movies) {
  let filmPiuRecente = movies[0];
  for (let index = 0; index < movies.length; index++) {
    //prendiamo tutti i film nell'array
    if (movies[index].Year > filmPiuRecente.Year) {
      //andiamo a verificare qual'è il film piu recente
      filmPiuRecente = movies[index];
    }
  }
  return filmPiuRecente.Title;
}
let resultEs12 = newestMovie(movies);
console.log(resultEs12); //stampiamo il titolo del film piu recente

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
function countMovies(movies) {
  return movies.length;
}
const numeriFilm = countMovies(movies);
console.log(numeriFilm);

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
function onlyTheYears(films) {
  const yearsOfMovies = films.map((movies) => movies.Year);
  return yearsOfMovies;
}
const yearsOfMovies = onlyTheYears(movies);
console.log(yearsOfMovies);

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
function onlyInLastMillennium() {
  let lastMillennium = [];
  movies.forEach(function (movie) {
    if (movie.Year >= 1000 && movie.Year < 2000) {
      lastMillennium.push(movie);
    }
  });
  return lastMillennium;
}
let resultEs15 = onlyInLastMillennium(movies);
console.log(resultEs15);

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
function sumAllTheYears() {
  let sum = 0;
  movies.forEach(function (movie) {
    sum += parseInt(movie.Year);
  });
  return sum;
}
let resultEs16 = sumAllTheYears(movies);
console.log(resultEs16);

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
function searchByTitle(searchString, movies) {
  let matchingMovies = [];
  for (let index = 0; index < movies.length; index++) {
    //usiamo un ciclo for per iterare gli indici dell'array "movies"
    let movie = movies[index];
    if (movie.Title.toLowerCase().includes(searchString.toLowerCase())) {
      //usiamo il metodo "includes()" per vedere se il titolo del film contiente la parola che cerchiamo
      matchingMovies.push(movie); // se la parola che mettiamo corrisponde, aggiungiamo il film corrente all'array "matchingMovies"
    }
  }
  return matchingMovies;
}

let searchResult1 = searchByTitle("venge", movies);
console.log(searchResult1); //stampa tutti i film con il termini che inseriamo

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
function searchAndDivide(searchString, movies) {
  let match = [];
  let unmatch = [];

  movies.forEach(function (movie) {
    if (movie.Title.includes(searchString)) {
      match.push(movie);
    } else {
      unmatch.push(movie);
    }
  });

  return { match: match, unmatch: unmatch };
}
let resultEs18 = searchAndDivide("for", movies);
console.log(resultEs18);

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
function removeIndex(index, movies) {
  if (index < 0 || index >= movies.length) {
    return movies;
  }
  return movies.slice(0, index).concat(movies.slice(index + 1));
}
let resultEs19 = removeIndex(1, movies);
console.log(resultEs19);

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)
console.log("------------------------- DOM -------------------------");

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
function selector() {
  return document.getElementById("container");
}
selector(); // risulta "null" perche non abbiaom un id "container" nell'html

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
function selector2() {
  return document.querySelectorAll("td");
}
let esercizio21 = selector2();
console.log(esercizio21);

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
function text() {
  let td = document.querySelectorAll("td");
  for (let index = 0; index < td.length; index++) {
    console.log(td[index].innerText);
  }
}
text();

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
function redLink() {
  let links = document.querySelectorAll("a");
  for (let index = 0; index < links.length; index++) {
    links[index].style.backgroundColor = "red";
  }
}
redLink();

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
function addList(testo) {
  let li = document.createElement("li"); //creiamo un nuovo elemento <li>
  li.innerText = testo;
  let myList = document.getElementById("myList"); //selezioniamo la lista con id "myList"
  myList.appendChild(li); // aggiungiamo il nuovo elemento alla lista
}
// addList("testo") //messo in commento per la mancanza di elemento in html

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
function emptyList() {
  let myList = document.getElementById("myList"); //selezioniamo la lista con id "myList"
  while (myList.firstChild) {
    myList.removeChild(myList.firstChild); // svuotiamo il figlio del parent "myList"
  }
}
// emptyList(); //messo in commento per la mancanza di elemento in html

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
function addClass() {
  let tr = document.querySelectorAll("tr"); //selezioniamo gli elementi <tr>
  for (let index = 0; index < tr.length; index++) {
    tr[index].classList.add("testo");
  }
}
addClass();

// [EXTRA] JS Avanzato
console.log("------------------------ JS ADVANCED ------------------------");

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***
*/
function halfTree(h) {
  for (let index = 1; index <= h; index++) {
    let riga = ""; //stringa per ogni riga corrente
    for (let i = 1; i <= index; i++) {
      //aggiungiamo degli asterischi uguale all'indice che mettiamo
      riga += "*";
    }
    console.log(riga); //stampiamo le righe
  }
}
halfTree(10);

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/
function tree(h) {
  for (let index = 1; index <= h; index++) {
    let riga = ""; //stringa per ogni riga corrente
    for (let dex = 1; dex <= 2 * index - 1; dex++) {
      riga += "*"; //aggiungiamo gli asterischi uguale a (2 * index - 1)
    }
    console.log(riga);
  }
}
tree(10);

// non finita

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

/* Questo array viene usato per gli esercizi. Non modificarlo. */
