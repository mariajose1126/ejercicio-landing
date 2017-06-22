function buscadorNumeros(){
  var number = 0;
  var n;
  var primo = 0;
  for(i = 0; i <= 99; i++){
    number += 1;
    if (number%i == 0){
      console.log(number + " es par");
    } else if (number%2 != 0){
      console.log(number + " es impar");
    }
  }
}

buscadorNumeros();

















