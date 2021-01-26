"use strict"

//variables de movimiento
let auto_on=false;
let auto_run=false;

let freno_mano=false;
let clutch=false;
let freno=false;
let acelerador=false;
let cambios=null;

//variables de espacio en el mapa
let numParadas = 0;
let distanciaRecorrido = 0;
let timeParada = 0;
let kmXParada = 0;
// Fin variables de ubicacion
let stop_timeout = 0;
let var_recorrer = 0;
// let var_tiempo_faltante = 0;
// Variables para las paradas
let cantidad_Paradas_listas = 0;
let km_parada_lista = 0;
let time_en_parada = 0;
// Comprobante para las paradas
let comprobante_tiempo_en_parada = 0;
let comprobante_parada = false;
let comprobante_frenado = false;
let comprobante_retroceso = false;
let comprobante_retroceso_time = false;
// Fin
// Variables para calcular la velocidad, y la distacia recorrida
let velocidadAcelerando = 0;
let distanciaRecorrida_velocidad = 0;
let time_Viaje = 0;
// Fin de las variables para calcular




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
}

function calvel(){
    cal_distancia();
    cal_tiempo();

    if (
        velocidadAcelerando < 30 &&
        cambios === 1 &&
        comprobante_parada === false &&
        comprobante_frenado === false 
    ){document.getElementById("velocidad_actual").innerHTML=`velocidad: ${(velocidadAcelerando+=1)} KM/H`;
        stop_timeout=setTimeout(calvel, 1000);}
        else if(velocidadAcelerando >=30 && cambios===1){
            document.getElementById("titulo").innerHTML="Cambie a la marcha 2.";
            alert('El freno y el clutch se encuentran activados, el acelerador se desactivo.');
        clutch = true;
        freno = true;
        acelerador = false;
        }

        if (
            velocidadAcelerando >= 30 &&
            velocidadAcelerando < 60 &&
            cambios === 2 &&
            comprobante_parada === false &&
            comprobante_frenado === false 
        ){document.getElementById("velocidad_actual").innerHTML=`velocidad: ${(velocidadAcelerando+=1)} KM/H`;
            stop_timeout=setTimeout(calvel, 1000);}
            else if(velocidadAcelerando > 30 && velocidadAcelerando === 60 && cambios===2){
                document.getElementById("titulo").innerHTML="Cambie a la marcha 3.";
            } else if(cambios===2&&velocidadAcelerando<30){
                document.getElementById("titulo").innerHTML="Cambie a la marcha 1.";

            }

        if (
            velocidadAcelerando >= 60 &&
            velocidadAcelerando < 86 &&
            cambios === 3 &&
            comprobante_parada === false &&
            comprobante_frenado === false 
         ){document.getElementById("velocidad_actual").innerHTML=`velocidad: ${(velocidadAcelerando+=1)} KM/H`;
            stop_timeout=setTimeout(calvel, 1000);}
            else if(velocidadAcelerando >=60 && velocidadAcelerando===86 && cambios===3){
                document.getElementById("titulo").innerHTML="Cambie a la marcha 4.";}
                else if(cambios===3 && velocidadAcelerando < 60){
                    document.getElementById('titulo').innerHTML='Regrese a la marcha 2.'
                }
        if (
            velocidadAcelerando >= 86 &&
            velocidadAcelerando < 110 &&
            cambios === 4 &&
            comprobante_parada === false &&
            comprobante_frenado === false 
        ){  document.getElementById("velocidad_actual").innerHTML=`velocidad: ${(velocidadAcelerando+=1)} KM/H`;
            stop_timeout=setTimeout(calvel, 1000);}
            else if(velocidadAcelerando >=86 && velocidadAcelerando===110 && cambios===4){
            document.getElementById("titulo").innerHTML="Este es el limite";}
            else if(cambios===4 && velocidadAcelerando < 86){
                document.getElementById('titulo').innerHTML='Regrese a la marcha 3.'
            

        }


        if (
            velocidadAcelerando === 0 &&
            cambios ===5 &&
            comprobante_parada=== false &&
            comprobante_frenado=== false
        ){
            document.getElementById(
                "tiempo-transcurrido"
            ).innerHTML=`Tiempo:${(time_Viaje=0)} Min`;
            timeRetroceso();
        } else if(velocidadAcelerando != 0 && cambios===5){
            document.getElementById("titulo".innerHTML="No puede retroceder.")
        }
                }


function calvel_frenado(){
    if(freno===true && comprobante_frenado===false && cambios !=0){
    document.getElementById("velocidad-actual").innerHTML=`Velocidad:${(velocidadAcelerando=0)} KM/H`;
    document.getElementById("titulo").innerHTML=`Frenado.`;
    actions.clutchear();
    console.log("clutch", clutch);
    actions.acelerar();
    console.log("acelerado", acelerador);
    console.log("com_fren", comprobante_frenado);
    return comprobante_frenado=true;
} else if(
    freno === false &&
    comprobante_frenado === true &&
    cambios != 0
) {
    return(
        comprobante_frenado === false,
        console.log(comprobante_frenado)
    )
    
}

    
}

function caltime_viaje(){
    time_Viaje = Math.floor(Math.sqrt(var_recorrer));

    if (time_Viaje > 0) {
        document.getElementById(
            "tiempo-transcurrido"
        ).innerHTML=`Riempo:${time_Viaje} Min`;
        console.log(time_Viaje)
    }
}



let actions = new Action();