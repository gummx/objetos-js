function imprimePersonaje (personaje) {
	console.log("Soy " + personaje.nombre + " y tengo: " +
	personaje.numVidas + " vidas, " +
	"modo: " + personaje.modo + ", " +
	"y traje: " + personaje.traje);	

}

function crearPersonaje(nombre,vidas,modo,traje){
	var personaje = {
		nombre : nombre, 
		numVidas : vidas,
		modo: modo,
		traje: traje,
	};
	imprimePersonaje(personaje)
	return personaje;
}

//Crea objeto variables de los objetsos
var mario = crearPersonaje ("Mario", 3, "normal", "clásico");
var luigi = crearPersonaje ("Luigi", 3, "estrella", "rana");

mario.modo = "estrella";
imprimePersonaje(mario);

luigi.traje = "normal";
imprimePersonaje(luigi);

//var wario = mario; crea una referencia
var wario = Object.create(mario); //crea una copia del objeto (objeto viejo)
wario.nombre ="Wario"
imprimePersonaje(wario);

imprimePersonaje(mario);
imprimePersonaje(luigi);
/*
var obj1 = {}

var silla = {
	patas : 4,
	respaldo : true,
	cojines:true
};

console.log(silla)

var mesa = {};

mesa.patas = 4;
mesa.respaldo = false;
mesa.cojines = false;
console.log(mesa);

*/