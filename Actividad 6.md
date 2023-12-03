# Introducción a la Inteligencia Artificial: Práctica 6, El proceso de razonamiento según la lógica

## Actividad 1: Planteamiento matemático del problema de Josephus

### El circulo de la muerte de Josephus

El problema plantea que hay un circulo de n personas, donde cada persona deberá matar a la que tiene a su lado, en sentido horario. Supongamos que el circulo tiene 41 personas, como originalmente se describe el problema. En este caso comienza la persona número 1, por lo cual esta eliminará a la 2, después la 3 a la 4, la 5 a la 6 y así sucesivamente, hasta que quede una sola persona. El objetivo es encontrar una manera consistente de saber quien será la ultima persona.

#### Resolución:

Para comenzar, se ha decidido ejemplificar los primeros 20 casos, para ver si es posible encontrar un patrón.

Los ultima persona restante para círculos de 1 a 20 queda de la siguiente manera:


|1 |2 |3 |4 |5 |6 |7 |8 |9 |10 |11 |12 |13 |14 |15 |16 |17 |18 |19 |20 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
|1|	1|	3|	1|	3|	5|	7|	1|	3|	5|	7|	9|	11|	13|	15|	1	|3	|5|	7|9|


De esta primera suceción podemos resltar lo siguiente: Para cada circulo cuyo numero de personas n sea una potencia de 2, la ultima persona en sobrevivir siempre será la primera (y que como consecuencia no altera el orden en que se van a eliminar, es decir, siempre empezará en cada ronda), esto debido a que cumplen con una condición, cada vez que se termina una ronda de eliminaciones, el circulo se reduce a la mitad, y a su vez, este circulo sigue siendo una potencia de dos, por lo que sigue siendo un numero n par, que a su vez cuando se reduzca a la mitad, también dejará otro circulo con un numero n que es potencia de dos y que sigue cumpliendo con esas carateristicas.

También se puede deducir lo siguiente, cada posible numero n para el circulo puede ser representado de la siguiente forma: 2^a + m (recordando que cualquier circulo con m = 0, es decir solamente 2^a tendrá como ultimo sobreviviente a la persona que inicia la ronda)

De esta manera podemos hacer el siguiente planteamiento: 

Si para un circulo 2^a + m, permitimos que sucedan m turnos,  terminaremos con un circulo 2^a, es decir un circulo con un numero n potencia de dos.

Por ejemplo, para un circulo de 10 personas, el cual puede ser expresado como 2^3 + 2. Si se ejecutan dos turnos (debido a m = 2), es decir, el 1 mata el 2 y el 3 al 4, en ese momento el circulo se convierte en un circulo de n potencia de dos, por lo que la persona que comience esa ronda será la superviviente (la ronda inicia cuando el circulo apenas queda con el nuevo numero n).

Para el caso de el circulo de originalmente 10 personas, una vez que se convierte en uno de 8, el turno es de la persona numero 5 según la tabla, y este numero lo podemos representar como 2m +1 (debido a que por cada turno donde se elimina a una persona, el turno le toca a la persona 2 numeros adelante, por eso la multiplicación por 2, y +1 por que la nueva ronda comienza con la persona imediatamente después de la ultima eliminada).

Aplicando esta formula, donde para un circulo 2^a +m su ultimo sobreviviente será la persona 2m+1, vemos que nos da los resultados de la tabla. Por ejemplo:

11: 2^3+3 --> 2\*3 + 1 = 

17: 2^4+1 --> 2\*1 + 1 = 3

20: 2^4+4 --> 2\*4 + 1 = 9

## Actividad 2: Programación de la solución:


```python
def sacarPotencia(numero):
    potencia = 0
    while 2 ** (potencia + 1) <= numero:
        potencia += 1

    potencia_de_dos = 2 ** potencia
    resto = numero - potencia_de_dos
    m = 2*resto +1

    return potencia_de_dos, resto,m

# Ejemplo con el número 17
numero = 17
potencia, resto,m = sacarPotencia (numero)

print(f"La última persona sobreviviente en un círculo de {numero} personas es la numero {m}")
```

    La última persona sobreviviente en un círculo de 17 personas es la numero 3
    

#### *Este código lo que hace es lo siguiente:*

Se define la función sacar Potencia, la cual devolverá el numero al cual se debe elevar 2 y el resto para expresarlo, así como el numero de persona sobreviviente. 

#### *Para obtener estos valores se hace:*

Primero, se inicia el valor de la potencia en 0, posteriormente se hace un ciclo while, el cual comprobará si 2 elevado a cierta potencia es menor o igual al numero de personas con las que cuenta el circulo, por lo tanto, el ciclo se detiene entregando la potencia mayor con la cual se puede expresar el numero. Posteriormente se le resta ese numero al numero de peronas en el circulo, después se calcula la ultima persona mediante la formula 2m + 1.

Finalmente solo se muestra un mensaje con todos los valores necesarios.
