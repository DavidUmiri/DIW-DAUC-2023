
/* Código que maneja los eventos de los choques de los divs */


// Prueba si quieres con un contador de fallos (no esta pulido)
//var count = 0;
//let countdiv = document.getElementById("count");


// identificamos las variables
const bb8 = document.getElementById("bb8");
const misil = document.getElementsByClassName("misil");


// Evento del raton
addEventListener("mousemove", () => {

  /* Funcion  --> getBoundingClientRect() 
     Funcion que sirve 
     para identificacion de 
     los lados de un div y poder actuar con ellos
  */
  const bb8Rect = bb8.getBoundingClientRect();

  // metodo for para poder identificar los 10 misiles
  for (const misilDiv of misil) {
    const misilDivRect = misilDiv.getBoundingClientRect();

    // Condicional para determinar los lados que se chocan
    if (
      bb8Rect.left < misilDivRect.right &&
      bb8Rect.right > misilDivRect.left &&
      bb8Rect.top < misilDivRect.bottom &&
      bb8Rect.bottom > misilDivRect.top
    ) {

      // opcion contador 

      // count++;
      // countdiv.innerHTML = `? Fallos ¿ ${count}`;
      // if (count === 500) {
      //   alert("¡Has perdido!");
      //   location.reload();
      // }


      // opcion Normal
      alert("¡Has perdido!");
      location.reload();
    }
  }
});
