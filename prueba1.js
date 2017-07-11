function buscadorNumeros(n) {
  var contador = 1;

  for(i = 1; i < n; i++) {
	  	if(n%i == 0){
	  		contador ++;
	  	}
  	}
  	if (contador > 2 && n%2 != 0){
		console.log(n + " compuesto")
	} else if (contador == 2){
		console.log(n + " primo")
	} else if( n%2 == 0){
		console.log(n + " par")
	}
  }

buscadorNumeros(10);

















