/* 
	Tarefa 10
	Nome do ficheiro: script.js
	Usado:
*/


function medalla(posicion){
	if(posicion == 1) 
	{medalla = "Medalla de ouro";} 
	else if (posicion == 2)
	{medalla = "Medalla de prata";} 
	else if (posicion == 3)
	{medalla = "Medalla de bronce";} 
	else{medalla = "Mala sorte";}}

var posicion = prompt("¿En qué posición quedaches?");
posicion = parseFloat(posicion);

var funcion = tipoDeMedalla(posicion);
document.write(posicion + "º</br>");
document.write(medalla);