/*NO HE COGIDO EL CÓDIGO DE NINGUNA PÁGINA LO HICE YO TODO*/


let pelota = document.getElementById('pelota')
let porteroDePie = document.getElementById('porteroDePie');
let porteroTirandose = document.getElementById('porteroTirandose');

pelota.addEventListener('animationend', terminaTiro)
pelota.addEventListener('animationstart', empiezaTiro)

pelota.addEventListener('an', iteraciones)

function iteraciones(e){
    console.log(pelota.style)
    console.log(e)
}

function empiezaTiro(){

    console.log('Lanzando Tiro')
    pelota.style.visibility = 'visible';
    porteroDePie.style.display = 'visible';
    porteroTirandose.style.visibility = 'hidden';
    /*pelota.style.cssText = "animation-play-state: paused;"*/
    pelota.style.animationDelay = '2s';

}

function terminaTiro(){

    console.log('Tiro terminado')
    porteroDePie.style.visibility = 'hidden';
    porteroTirandose.style.visibility = 'visible';
    pelota.style.visibility = 'hidden';

}


