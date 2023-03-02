//activacion del dialogo sweetalert
window.setTimeout(alerta, 3500);

//sweetalert para interactuar con el usuario y ofrecerle volver a inicio
function alerta() {
  Swal.fire({
    title: 'Sentimos las molestias',
    text: 'Miles de años de evolución te han traido aquí pero solo la tecnología te sacará',
    confirmButtonText: 'Vuelve a inicio',
    showDenyButton: true,
    denyButtonText: 'No hacer nada',
    imageUrl: './img/bigTech.png',
    imageWidth: 400,
    imageAlt: 'alt'
  }).then((result) => {
    if (result.isConfirmed) {
      window.open('./index.html', '_self');
    }
  })
}


// escuchador de evento para modificar la animación
document.addEventListener('click', voltear);

let activada = false;

function voltear() {

  if (activada == false) {
    document.getElementById('idError404').className = "claseB";
    activada = true;
  } else if (activada == true) {
    document.getElementById('idError404').className = "claseA";
    activada = false;
  }
}
