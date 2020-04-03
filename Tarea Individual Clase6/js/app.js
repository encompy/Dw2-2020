var cantidadNumeros = 10;
var origen = []
while(origen.length < cantidadNumeros ){
  var numeroAleatorio = Math.ceil(Math.random()*cantidadNumeros);
  var existe = false;
  for(var i=0;i<origen.length;i++){
	if(origen [i] == numeroAleatorio){
        existe = true;
        break;
    }
  }
  if(!existe){
    origen[origen.length] = numeroAleatorio;
  }

}
console.log("arreglo original "+origen);

var destino = origen.slice();
console.log("copia de origen, llamado destino "+destino);
function deMenorAMayor(elem1, elem2) {
                                        return elem1-elem2;}
  console.log("arreglo ordenado de mayor a menor "+destino.sort(deMenorAMayor));
