document.title = "Desafío Latam"
//console.log(document)

//	<h1 id="header" class="main-header">HTML5!</h1>

var encabezado = document.getElementById("encabezado");
console.log("encabezado");


function saludar(){
	//var nombreEl = document.getElementById("nombre");
	//var saludoEl = document.getElementById("saludo");
	//saludoEl.innerHTML = "<span>Hola " + nombreEl.value + "</span>";

	var nombre = $("#nombre").val();
	var saludo = $("#saludo").html("<span>Hola " + nombre + "</span>");

 }

$("#btnSaludo").click(saludar);
