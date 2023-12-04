# Introducción a la Inteligencia Artificial: Práctica 3, Introspección

## Actividad: Solución al problema de los alfiles

### Planteamiento del Problema

Coloca ocho alfiles (cuatro negros y cuatro blancos) en un tablero de ajedrez reducido, tal como se ve en la figura. El problema consiste en hacer que los alfiles negros intercambien sus posiciones con los blancos, ningún alfil debe atacar en ningún momento otro del color opuesto. Se deben alternarlos movimientos, primero uno blanco, luego uno negro, luego uno blanco y así sucesivamente. ¿Cuál es el mínimo número de movimientos en que se puede conseguir?

![Alfiles](/images/1.png)

### Resolución del Problema

##### Primer paso: Análisis

Para poder resolver el problema el primer paso es analizar lo que se pide y entender con qué elementos se cuenta para iniciar la resolución. En este caso queda claro que se deben cambiar las posiciones de los alfiles, es decir los negros deberán estar en las casillas inferiores y los blancos en las casillas superiores, además se cuenta con un tablero de 4x5 en donde se realizarán todos los movimientos. Además en ningún alfil podrá atacar a otro en ningún momento.

Aunque no se menciona se debe tomar como dato extra el movimiento del alfil, el cual solo puede ser en diagonal, es decir, cualquier numero de casillas en diagonal hacia cualquier dirección, por lo que solo se podrá desplazar en casillas del color donde residía inicialmente.

Con esta información inicial podemos definir nuestro objetivo y las medidas de rendimiento para este problema.

**Objetivo:** Intercambiar la posición de los alfiles negros con los alfiles blancos en el menor numero de movimientos posibles.

**Medidas de rendimiento:**

* Inicia el color blanco
* No puede haber dos movimientos seguidos del mismo color
* Un alfil no puede atacar a otro en ningún momento
* El movimiento de un alfil puede ser en cualquier dirección diagonal, la cantidad de casillas que quiera (siempre delimitado por las dimensiones del tablero) y siempre en su mismo color de casilla.

##### Segundo paso: Razonamiento

Debido a que el tablero no es cuadrado y que los alfiles no pueden atacarse entre si (es decir ocupar una casilla si habia un alfil en ese mismo momento), es imposible que un alfil llegue al otro lado del tablero en un solo movimiento. Esto quiere decir que el numero mínimo de movimientos para que un alfil llegue al otro extremo del tablero será de 2 movimientos. Tomando en cuenta que hay 8 alfiles en el tablero, la cantidad mínima de movimentos para intercambiarlos de posición debería ser de 16 (2 por cada alfil, 2\*8). Esta es una primera aproximación, ya que no se esta tomando en cuenta el movimiento del alfil de color contrario, sin embargo tal vez sea posible hacer un algoritmo que permita optimizar los movientos para colocar los mismos alfiles en las posiciones que dejan sus contrarios.

##### Tercer Paso: Diseño del algoritmo (Y secuencia de percepcion)

Ya se sabe que el numero mínimo de movimientos es de 2 para que un alfil llegue al otro lado, además, es necesario que su movimiento no interrumpa el movimiento del alfil contrario, además de que el turno comienza con el alfil blanco y se deben ir turnando en base al color del alfil. Se opta por realizar la siguiente jugada:

![Alfiles](/images/2.png)

De esta manera, el alfil blanco estorba lo menos posible para su alfil negro del lado contrario. 

![Alfiles](/images/3.png)

Con el siguiente movimiento el alfil negro contrario se coloca de manera que en su siguiente turno pueda ocupar el espacio que acaba de dejar el alfil blanco, cumpliendo la regla de que cambie su posición en tan solo 2 movimientos.

![Alfiles](/images/4.png)

Con el movimiento del siguiente alfil blanco, se prepara para que ocupe la posición que acaba de liberar el negro en el turno anterior.

![Alfiles](/images/5.png) ![Alfiles](/images/6.png)

Con los siguientes dos movimientos se ha logrado intercambiar dos alfiles de posición. Aún queda el primer alfil que se movió, para lo cual:

![Alfiles](/images/7.png)

Se mueve el alfil negro de manera que desocupe la posición que ocupará ese blanco y a su vez, pueda usar la posición que liberó su alfil negro contrario.

![Alfiles](/images/8.png) ![Alfiles](/images/9.png)

Con otra secuencia de dos movimientos se logra intercambiar las posiciones restantes. De esta manera se logra un algoritmo de 8 pasos para intercambiar 4 alfiles de posición. Este algoritmo respeta la regla de que cada uno pueda usar como máximo 2 movimientos para intercambiar su lugar. Ahora solo restaría repetir el algoritmo en espejo para los alfiles restantes.

![Alfiles](/images/10.png) ![Alfiles](/images/11.png) ![Alfiles](/images/12.png) ![Alfiles](/images/13.png)
![Alfiles](/images/14.png) ![Alfiles](/images/15.png) ![Alfiles](/images/16.png) ![Alfiles](/images/17.png)

Y de esta manera han quedado intercambiadas las posiciones de los alfiles, con un mínimo de 16 movimientos.




```python

```
