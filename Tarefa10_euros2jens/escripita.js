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

var productonovo = "Tienes alg�n otro producto?  ";
var resposta;
resposta = true;
while (resposta == true) {
	var producti�o;
	producti�o = prompt("Cual es el producto?   ");
	var precio;
	precio = prompt("Cuanto cuesta el producto?   ");
	var monedi�a;
	monedi�a = prompt("Que moneda es?");
	var numeri�o;
	numeri�o = parseFloat(precio);


	if (monedi�a == "euros") {
		var ee = e2y(numeri�o);
		var eesin = Math.round(ee * 100) / 100;
		document.write(producti�o + "-----" + numeri�o + "�" + "-----" + eesin + "�" + "<br>");
	}else{
		var yy = y2e(numeri�o);
		var yysin = Math.round(yy * 100) / 100;
		document.write(producti�o + "-----" + yysin + "�" + "-----" + numeri�o + "�" + "<br>");
	}
	resposta  = confirm(productonovo);
}