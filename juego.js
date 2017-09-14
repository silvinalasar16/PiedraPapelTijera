/*

// ==================================================
//      PIEDRA, PAPEL O TIJERA
// ==================================================

⚠️ Lee cada uno de los pasos, analizalos detenidamente y planteate la manera de resolverlos ANTES
de empezar a escribir código.



¿Qué vamos a hacer? (Explicación no técnica)
===================

Vamos a escribir un programa que va a permitir al usuario jugar al "Piedra, Papel o Tijera"
contra "la máquina".

Al usuario se le va a pedir que ingrese una opción ("piedra", "papel" o "tijera") por medio de un
campo de texto y se la va a comparar contra la elegida por "la máquina" aleatoriamente. Luego,
vamos a reflejar en el HTML ese resultado mostrando el contenido adecuado en base a si ganaste,
empataste o perdiste.



¿Cómo lo vamos a hacer? (Explicación técnica)
=======================

Separamos la construcción del juego en 4 pasos para que te puedas enfocar en resolver 1 problema
a la vez sin estar pensando demasiado en el resto. Si todo sale bien, al final de todo vas a poder
tener el juego funcionando.

⚠️ Es MUY importante que puedas ir probando lo que vas haciendo para garantizarte que vas en el
camino correcto.



// ==================================================
//      PASO 1
//      Pedir la opción al usuario
// ==================================================

En este paso vamos a crear una función que nos devuelva lo que el usuario elige para guardarlo en
una variable y usarla después. Los pasos son:

    - Crear una función llamada `obtenerOpcionUsuario` que no recibe parámetros.
        - Usar un prompt para pedirle al usuario que escriba "piedra", "papel" o "tijera".
        - Devolver lo que el usuario escribió (Usando la palabra clave `return`).
    - Asignar en una variable llamada `opcionUsuario` el resultado de llamar a la función
    `obtenerOpcionUsuario`.

*/
function obtenerOpcionUsuario(){
  var objeto=prompt("¿piedra, papel, tijera?");
  return objeto;
}
 var opcionUsuario=obtenerOpcionUsuario();
/*

// ==================================================
//      PASO 2
//      Generar aleatoriamente la opción de la máquina
// ==================================================

En este paso vamos a crear una función que nos devuelva lo que "la máquina" elige y guardarlo en
una variable para usarla después. La opción de "la máquina" la vamos a generar aleatoriamente:

    - Crear una función llamada `obtenerOpcionMaquina` que no recibe parámetros.
        - Usar el siguiente código para obtener una opción aleatoria.
            var random = Math.random();
            var opcionMaquinaRandom = random < 0.33 ? 'piedra' : random < 0.66 ? 'papel' : 'tijera';
        - Devolver lo que la máquina eligió (Usando la palabra clave `return`).
    - Asignar en una variable llamada `opcionMaquina` el resultado de llamar a la función
    `obtenerOpcionMaquina`.

*/
function obtenerOpcionMaquina(){
var random=Math.random();
var opcionMaquinaRandom= random <0.33? 'piedra': random <0.66? 'papel': 'tijera';
return opcionMaquinaRandom;
}
 var opcionMaquina=obtenerOpcionMaquina();

/*

// ==================================================
//      REVISAR QUE ESTÁ TODO BIEN
// ==================================================

Si todo está bien hasta el momento, deberías tener 2 variables llamadas `opcionUsuario` y
`opcionMaquina`.

Usá un `console.log` para imprimir en la terminal los valores de las 2 variables así podés
revisar que todo esté bien.

*/
console.log(opcionUsuario);
console.log(opcionMaquina);
/*opcionUsuario

// ==================================================
//      PASO 3
//      Conocer si el usuario ganó, perdió o empató
// ==================================================

En este paso vamos a crear una función que reciba lo que el usuario y la máquina hayan elegido para
que nos devuelva una cadena de caracteres con uno de 3 posibles valores: 'victoria', 'empate' o
'derrota':

    - Crear una función llamada `obtenerResultadoJuego` que reciba 2 parámetros:
        - La opción del usuario.
        - La opción de la máquina.
    - Implementar la lógica correspondiente para deducir si el usuario ganó, empató o perdió:
        - Para eso vas a tener que implementar varios condicionales combinados. Un ejemplo que
        te puede ayudar a pensarlo sería algo como:

            if (el usuario elegió piedra) {
                if (la máquina eligió piedra) {
                    empate
                }

                if (la máquina eligió papel) {
                    perdio
                }

                if (la máquina eligió tijera) {
                    victoria
                }
            }

    - Asignar en una variable llamada `resultadoJuego` el resultado de llamar a la función
    `obtenerResultadoJuego` (No te olvides los parámetros).

*/

function obtenerResultadoJuego(opcionDelUsuario, opcionDeLaMaquina){
  var resultado;
  if (opcionDelUsuario='piedra'){
    if(opcionDeLaMaquina='piedra'){
      resultado='Empate';
        }
      }
}


console.log(resultado);



/*

// ==================================================
//      REVISAR QUE ESTÁ TODO BIEN
// ==================================================

Si todo está bien hasta el momento, deberías tener una nueva variable llamada `resultadoJuego` con
uno de los posibles 3 resultados: 'victoria', 'empate', 'derrota'.

Usá un `console.log` para imprimir en la terminal su valor así podés revisar que todo esté bien.

*/





/*
// ==================================================
//      PASO 4
//      Mostrar el resultado al usuario
// ==================================================

En este paso vamos a usar la variable `resultadoJuego` para mostrar el mensaje correspondiente al
usuario en el sitio. Para ello, vamos a crear una función que reciba el resultado del juego y pueda
mostrar el mensaje correspondiente al usuario:

    - Crear una función llamada `mostrarResultado` que reciba como parámetro el resultado del juego.
    - En base al resultado indicado por el parámetro:
        - Buscar y guardar en una variable el nodo de HTML que represente el resultado del juego
        (`#victoria`, `#empate` o `#derrota`) usando `getElementById`.
        - Clonar y guardar en una variable el nodo de HTML del punto anterior.
        - Buscar y guardar en una variable el nodo de HTML con id `resultado-juego`.
        - Buscar y guardar en una variable el padre del elemento con id `resultado-juego`.
        - Reemplazar en el padre (por medio de la función `replaceChild`) el nodo de HTML con id
        `resultado-juego` por el que tiene la información del resultado del juego.
    - Llamar a la función `mostrarResultado` pasandole como parámetro el resultado del juego.

*/
