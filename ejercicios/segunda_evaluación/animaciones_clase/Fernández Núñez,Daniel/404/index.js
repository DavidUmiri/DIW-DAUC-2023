// Recogemos en la variable "codigo" los elementos con etiqueta 'code'
const codigo = document.getElementsByTagName('code')

/**
 * @param {frase} f 
 * @param {tiempo} t 
 */
function escribir(f, t) {
    let string = codigo[f].innerHTML.toString()
    let i = 0;
    // Haremos que se vea empty el contenido de codigo
    codigo[f].innerHTML = ""

    setTimeout(function () {

        let intervalo = setInterval(function () {
            i++;
            codigo[f].innerHTML = string.slice(0, i) + "|"

            // Limpia el intervalo en caso de que se llege al final de la frase
            if (i === string.length) {
                clearInterval(intervalo)
                codigo[f].innerHTML = string
            }
        }, 35)
    }, t)

}

// Ejecutamos la funcion para cada linea 
//       f   t
escribir(0, 0);
escribir(1, 2200);
escribir(2, 6000);
