/* 
onBlur: quando sai do campo
onChange: quando muda o conteúdo do campo
onFocus: quando entra no campo
onSelect: quando um texto é selecionado
onSubmit: quando o formulário é submetido
onReset: quando o botão reset é clicado
onKeyDown: quando pressionada a tecla 
onKeyUp: quando solta a tecla pressionada
*/

function submeti(){
	document.getElementById("log").innerHTML += "Submeti<br>";
	return false;
}

function resetei(){
	document.getElementById("log").innerHTML += "Resetei<br>";
}

function saiDoCampo(){
	document.getElementById("log").innerHTML += "Sai do Campo<br>";
}

function mudei(){
	document.getElementById("log").innerHTML += "Mudei<br>";
}

function entreiNoCampo(){
	document.getElementById("log").innerHTML += "Entrei no Campo<br>";
}

function selecionei(){
	document.getElementById("log").innerHTML += "Selecionei<br>"
}

function teclaBaixo(){
	document.getElementById("log").innerHTML += "Tecla para baixo<br>";
}

function teclaCima(){
	document.getElementById("log").innerHTML += "Tecla para cima<br>";
}