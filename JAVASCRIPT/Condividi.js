// JavaScript Document

//Definiamo una variabile chiamata "url" che ha come valore il link del file HTML della Home

	var url = "file:///C:/Users/Utente/Desktop/poli/secondo%20semestre/informatica/sito/spotyourvibe/home.html";

//Definiamo la funzione "condividi" la cui azione consiste nel copiare il valore di url, cioè il nostro link, negli appunti clipboard
	function condividi() {
		navigator.clipboard.writeText(url);					  

//al clic del mouse, all'elemento con id #condividi viene applicata la stringa css display block: lo rende un block rendendolo visibile
	    $("#condividi").css("display","block");
		
//sparizione lineare di 1500 millisecondi
	    $("#condividi").fadeTo(1000, 1);      //arriva alla condizione 1 in 450 millisecondi
        $("#condividi").fadeOut(1000, "");   //scompari in 1000 millisecondi 
		
}
//le funzioni non sono definite direttamente all'interno di questo file Js ma sono richiamate con "$" dalla libreria di funzioni JQuery linkata nell'HTML