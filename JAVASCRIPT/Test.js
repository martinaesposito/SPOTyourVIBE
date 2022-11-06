// JavaScript Document

var Risultati = Array("","","","","","","");
var Personaggi = Array(0,0,0,0,0);
// i=0="indie", i=1="rock", i=2="pop", i=3="hiphop", i=4="edm"
// inizializzo ogni elemento dell'array contenente i personaggi a 0

//array con i link delle pagine dei personaggi
var Link = Array("Indie.html","Rock.html","Pop.html","Hiphop.html","Edm.html");

//d=domanda, p= personaggio, s=selezione
function selezione(d,p,s) {
 Risultati[d-1]=p;
//"d" indica la lettera mentre d l'indice 
//il numero della domanda non è numero-1 ma numero perchè risultati è d-1
var Ris=document.getElementsByClassName("d"+d);
for(i = 0; i < 5; i++) {
	Ris[i].classList.remove("clickedon");
}
Ris[s-1].classList.add("clickedon");
	}

//funzione che calcola il risultato legata al  bottone di fine test
function salvaRis() {
for ( var i=0; i<7; i++) {
	if ( Risultati[i]=="indie" ){
		Personaggi[0]++
		}
else
	if ( Risultati[i]=="rock" ){
		Personaggi[1]++
		}
else
    if ( Risultati[i]=="pop" ){
		Personaggi[2]++
		}
else
	if ( Risultati[i]=="hiphop" ){
		Personaggi[3]++
		}
else
	if ( Risultati[i]=="edm" ){
		Personaggi[4]++
		}
}

var max= 0; 
var valmax = Personaggi[0];
for( i=0; i<5; i++) {
//personaggi[i] è il contatore delle risposte per ogni personaggio
	//confronto i personaggi tra di loro per vedere quale è l'indice del personaggio selezionato più volte
	//il numero di selezioni corrisponde a valmax
	//max corrisponde all'indice del personaggio
	if ( Personaggi[i]> valmax ) {
		valmax= Personaggi[i]
		max= i
	}
  }
//funzione per aprire la pagina dei personaggi nella pagina del test
//window.open(Link[max]"_self")
	console.log(Link[max]);
window.location.href=Link[max]
}