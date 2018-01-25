/*
* La función answer actúa de acuerdo a la respuesta que da el usuario.
*/
function answer(option) {
  do {
    /*
    *Pedimos al usuario que ingrese opcion 1 o 2 para saber que quiere hacer.
    */
    var answer = prompt('Ingrese la opción que desea realizar 1)Cifrar - 2)Descifrar');
    
    if (answer !== '') {
      /*
      *si el usuario responde 1, se ejecuta la función cipher o cifrar.
      */
      if (answer === '1') {
        cipher();
        /*
        *si el usuario responde 2, se ejecuta la función descipher o descifrar.
        */
      } else if (answer === '2') {
        descipher();
      } else {
        /*
        *En caso de que el usuario no ingrese nada o ingrese una letra en el prompt
        *aparecerá una alerta que le solicitará ingresar una opción válida.
        */
        alert('Ingrese una opción válida');
      }
    }
    /*
    *En este caso while se ejecuta hasta que el usuario ingresa una opción válida.
    */
  } while (answer === '' || (answer !== '1' && answer !== '2'));
}
/*
*La función wordCiphered nos desvuelve una palabra cifrada.
*/
function cipher(wordCiphered) {
  do {
    /*
    *Usuario ingresa una palabra
    */
    var wordToCipher = prompt('Ingrese una palabra a cifrar');
  } while (typeof(wordToCipher) === 'number' && wordToCipher === '');
  var encrypted = '';
  var word = 0;
  
  for (i = 0; i < wordToCipher.length; i++) {
    /*
    *Cifrando Minúsculas, su código ASCII está entre 97 y 122
    *Esto es lo mismo que en mayúsculas, solo que en vez de 65 se reemplaza por 97 que es donde comienza la "a"
    */
    if (wordToCipher.charCodeAt(i) >= 97 && wordToCipher.charCodeAt(i) <= 122) {
      word = (((wordToCipher.charCodeAt(i) - 97 + 33) % 26) + 97);
      encrypted += String.fromCharCode(word);
    /*
    *Cifrando Mayúsculas, su código ASCII está entre 65 y 90
    */
    } else if (wordToCipher.charCodeAt(i) >= 65 && wordToCipher.charCodeAt(i) <= 90) {
      word = (((wordToCipher.charCodeAt(i) - 65 + 33) % 26) + 65);
      encrypted += String.fromCharCode(word);
    } else {
      alert('Ingrese solo letras, sin espacios');
    }
  }
  alert(encrypted);
}

/*
* Función wordToDescipher nos devuelve una palabra descifrada.
*/
function descipher(wordToDescipher) {
  do {
    /*
    *Usuario ingresa una palabra
    */
    var wordToDescipher = prompt('Ingrese una palabra a descifrar');
  } while (typeof(wordToCipher) === 'number' && wordToCipher === '');
  
  var decode = '';
  var word = 0;
  
  for (i = 0; i < wordToDescipher.length; i++) {
    /*
    *Descifrando Minúsculas, su código ASCII está entre 97 y 122
    */
    /*
    *Al ser el caso contrario, esta vez la resta toma el ultimo valor del ASCII
    */
    if (wordToDescipher.charCodeAt(i) >= 97 && wordToDescipher.charCodeAt(i) <= 122) {
      word = (((wordToDescipher.charCodeAt(i) - 122 - 33) % 26) + 122);
      decode += String.fromCharCode(word);
    /*
    *Descifrando Mayúsculas, su código ASCII está entre 65 y 90
    */
    } else if (wordToDescipher.charCodeAt(i) >= 65 && wordToDescipher.charCodeAt(i) <= 90) {
      word = (((wordToDescipher.charCodeAt(i) - 90 - 33) % 26) + 90);
      decode += String.fromCharCode(word);
    } else {
      alert('Ingrese solo letras, sin espacios');
    }
  }
  alert(decode);
}

answer();