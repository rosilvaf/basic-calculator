const interface = require ('readline-sync');
// suma,resta,division,multiplicacion,salir
 let response ="";
do{
    console.log ("1.-sumas");
    console.log ("2.-resta");
    console.log ("3.-multiplicacion");
    console.log ("4.-division");
    console.log ("5.-salir");
    response = interface.question("que operacion queres realizar?,escribe un numero:")
   if(response!="5"){
    const FisrtNumber=interface.question("dame un primer numero");
    const SecondNumber=interface.question("dame un segundo  numero");
    
    switch(response){
   case "1":
   var result = parseInt(FisrtNumber)+ parseInt(SecondNumber);
   console.log("el resultado :" + result);
   break;
   case "2":
    var result = parseFloat(FisrtNumber)- parseFloat(SecondNumber);
    console.log("el resultado :" + result);
    break;
    case "3":
        var result = parseFloat(FisrtNumber) * parseFloat(SecondNumber);
        console.log("el resultado :" + result);
         break;
    case "4":
     var result = parseFloat(FisrtNumber) / parseFloat(SecondNumber);
     console.log("el resultado :" + result);
    break;
   
    default:
    break;
   } 
   interface.question("presione una tecla para continuar");
}
}while(response !="5");