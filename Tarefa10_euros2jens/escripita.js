/* 
	Tarefa 10
	Nome do ficheiro: script.js
	Usado:
*/


function e2y(v1){
	return(precio*122.49);
}

function y2e(v1){
	return(precio/122.49);
}

document.write("Producto" + "-----" + "Euros" + "-----" + "Yens" + "<br>" + "<hr>");

var productonovo = "Tienes algún otro producto?  ";
var resposta;
resposta = true;
while (resposta == true) {
	var productiño;
	productiño = prompt("Cual es el producto?   ");
	var precio;
	precio = prompt("Cuanto cuesta el producto?   ");
	var monediña;
	monediña = prompt("Que moneda es?");
	var numeriño;
	numeriño = parseFloat(precio);


	if (monediña == "euros") {
		var ee = e2y(numeriño);
		var eesin = Math.round(ee * 100) / 100;
		document.write(productiño + "-----" + numeriño + "€" + "-----" + eesin + "¥" + "<br>");
	}else{
		var yy = y2e(numeriño);
		var yysin = Math.round(yy * 100) / 100;
		document.write(productiño + "-----" + yysin + "€" + "-----" + numeriño + "¥" + "<br>");
	}
	resposta  = confirm(productonovo);
}