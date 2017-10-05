## Cifrado y Descifrado Cesar 

##### Al iniciar el programa, por medio de un prompt se le pide al usuario que ingrese una de las dos opciones que se le piden: 
+ Opción 1: Cifrar 
+ Opción 2: Descifrar 

##### En caso de que el usuario no ingrese ninguna de las dos opciones, por medio de un do while el programa hará que se mantenga "cautivo" hasta que ingrese una opción o la otra. 

##### Si el usuario ingresa la opción número 1 se ejecuta la función cipher (cifrar), esta función hace que los caracteres que ingrese sean reemplazados por los caracteres del código ASCII y devolviendo el caracter que corresponde al correrse 33 espacios. 
Mediante el planteamiento de la fórmula: word = (((wordToCipher.charCodeAt(i) - 97 + 33) % 26) + 97); lo que realiza es cifrar las palabras que se ingresan en minúsculas. (el 97 corresponde a "a" )
Mediante el planteamiento de la fórmula: word = (((wordToCipher.charCodeAt(i) - 65 + 33) % 26) + 65); lo que realiza es cifrar las palabras que se ingresan en minúsculas. (el 65 corresponde a "A" )

##### Si el usuario ingresa la opción número 2 se ejecuta la función descipher. Lo que hace esta función es devolver los caracteres al lenguaje común, por medio de la fórmula;  word = (((wordToDescipher.charCodeAt(i) - 122 - 33) % 26) + 122); en este caso como estamos **descifrando**, los valores se invierten tomando el lugar del numero 97 anterior, en este caso es 122 que corresponde a "z" 
En el caso de las mayusculas, se toma el mismo criterio, por medio de la fórmula: word = (((wordToDescipher.charCodeAt(i) - 90 - 33) % 26) + 90);  donde el número 90 corresponde a la "Z" 

En este caso no funciona del todo el segundo do while, ya que deberia hacer que el usuario no pueda ingresar un string vacio o un numero, sin embargo el ciclo se corta. En vez de eso, por medio de un prompt se le pide al usuario que ingrese solo letras y sin espacios. 



[Diagrama de Flujo Cifrado y Descifrado Cesar](https://drive.google.com/file/d/0B0ZLNSf1dRANVVlpX25pZUpydXM/view?usp=sharing)

#### Versión `0.0.1`

#### Creado por : `Lorena Palominos`
