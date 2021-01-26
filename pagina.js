"use strict"

//variables de movimiento
let auto_on=false;
let auto_run=false;

let freno_mano=false;
let clutch=false;
let freno=false;
let acelerador=false;
let cambios=null;

let paradas=0;
let Fparar=0;



//Acciones
class Action{


    
encender(){
    if(cambios===0 && freno_mano===true){
        document.getElementById("titulo").innerHTML="Encendido!!!";
        return(auto_on=true)
} else if (cambios != 0){
    document.getElementById("titulo").innerHTML="Por favor, ponga los cambios en neutro.";
} else if (freno_mano != true){
    document.getElementById("titulo").innerHTML="Por favor, ponga el freno de mano.";
}
//document.getElementById("encender").onclick=function(){
    //encendido();
}

//marchas
marchas(num) {
    document.getElementById("titulo").innerHTML=`Marcha: ${num}`;
    return(cambios=num)
}
marchasN(){
    document.getElementById("titulo").innerHTML=`Marcha: Neutro`;
    return(cambios=0)
}

marchasR(){
    document.getElementById("titulo").innerHTML=`Marcha: Reversa`;
    return(cambios=6)
}


frenarManual(){
    if (freno_mano===true){
        document.getElementById("titulo").innerHTML="Freno de mano desactivado.";
        return(freno_mano=false)
    } else {
        document.getElementById("titulo").innerHTML="Freno de mano activado.";
        return(freno_mano=true)
    }
}



arrancar(){
    if(auto_on===true){
        if(
        clutch === true &&
        freno === true &&
        freno_mano === false &&
        cambios != 0
        ){
            document.getElementById("titulo").innerHTML="Suelte el freno de pie y acelere y suelte el clutch progresivamente a la vez que acelera."; 
        return (auto_run=true);
        } else if (clutch !=true){document.getElementById("titulo").innerHTML="Por favor, precione el clutch.";}
        else if (freno!=true){document.getElementById("titulo").innerHTML="Por favor, precione el freno del pie.";}
        else if (freno_mano!=false){document.getElementById("titulo").innerHTML="Por favor, ponga el freno de mano.";}
        else if (cambios!=1){document.getElementById("titulo").innerHTML="Los cambios deben estar en primera.";}
    } else{document.getElementById("titulo").innerHTML="Por favor, encienda el vehiculo.";}
}



frenar(){
    if(auto_on===true){
        if(freno===true){
            document.getElementById("titulo").innerHTML="El freno de pie se encuentra desactivado";
            return(freno=false)
            
        }else if(freno===false){
            document.getElementById("titulo").innerHTML="Usted ha pisado el freno";
            return (freno = true)
            
        }
    }else {document.getElementById("titulo").innerHTML="Por favor, encienda el vehiculo";}
}

clutchear(){
    if(auto_on===true){
        if(clutch===true){
            document.getElementById("titulo").innerHTML="Usted ha dejado de presionar el clutch";
            return(clutch=false)
        } else if(clutch===false){
            document.getElementById("titulo").innerHTML="Usted ha presionado el clutch";
            return(clutch=true)
        }
    }else{document.getElementById("titulo").innerHTML="Por favor, encienda el vehiculo"}
}



acelerar(){
    if(auto_on===true){
        if(acelerador===true){
            document.getElementById("titulo").innerHTML =
            "El acelerador se encuentra desactivado.";
            return (acelerador = false), console.log(acelerador);
        } 
        else if(cambios===0){document.getElementById("titulo").innerHTML =
        "Por favor, cambie de neutro a primera.";} 
        else if(acelerador===false && clutch===true && freno===true
        ) {document.getElementById("titulo").innerHTML =
        "Por favor, quite el freno de pie y el clutch.";
    } else if (acelerador === false)
    document.getElementById("titulo").innerHTML =
      "El acelerador se encuentra activado.";
    console.log("Acelerador activado.");
    return (acelerador = true)
    
} else {
    document.getElementById("titulo").innerHTML =
      "El carro no se encuentra encendido.";
    }}
    
//Empezar viaje
    destino(){
        function alea(){
            return (paradas = Math.floor(Math.random() * (4 - 1) + 1));
        }
        console.log(alea())

        if(auto_on===true){
let velocidadviaje = prompt("Ingrese la velocidad constante a la que desea hacer el recorrido", "0");
if (velocidadviaje == null || velocidadviaje == "") {
    prompt("Por favor, ingrese la velocidad constante a la que desea hacer el recorrido", "0");
} else if (velocidadviaje < 30 || velocidadviaje > 200) {
    prompt("Por favor, ingrese una velocidad de entre 30KM/h y 200KM/h", "0");
} else if (velocidadviaje >= 30 && velocidadviaje <= 200){
    (document.getElementById("titulo").innerHTML =
    "La velocidad a la que se hará el viaje es de " + velocidadviaje + "KM/h, paradas ahora encienda su vehiculo y comience el viaje")
    (document.getElementById("para").innerHTML =
    "Numero de paradas: " + paradas + "")
    (document.getElementById("para1").innerHTML =
    "Numero de paradas: " + paradas + "")
    (document.getElementById("para2").innerHTML =
    "Numero de paradas: " + paradas + "")
    (document.getElementById("para3").innerHTML =
    "Numero de paradas: " + paradas + "")

} 


} else{document.getElementById("titulo").innerHTML =
    "Primero encienda el vehiculo";}

}


}






let actions = new Action();