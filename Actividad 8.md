# Reglas y Búsquedas: Práctica 8, Espacio de estados

## Actividad: Generar el espacio de estados de los siguientes problemas

#### Ranas Saltarinas

El juego consiste en pasar las 3 ranas verdes a la derecha y las 3 ranasmarrones a la izquierda.  

Las ranas pueden saltar a una piedra vacía quetengan delante, o saltar por encima de otra rana si en medio de ambas hay una piedra vacía.

_Para este espacio de estados se obliga a iniciar con las ranas cafés, esto debido a que al poder iniciar con ambos colores el espacio se duplica, y no es necesario ya que es prácticamente lo mismo._

|Estado|C1|C2|C3|V1|V2|V3|
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
|(C1,C2,C3,_,V1,V2,V3)|imposible|(C1,_,C3,C2,V1,V2,V3)|(C1,C2,_,C3,V1,V2,V3)|Omitido|Omitido|Omitido|
|(C1,_,C3,C2,V1,V2,V3)|(_,C1,C3,C2,V1,V2,V3)|imposible|imposible|imposible|imposible|imposible|
|(C1,C2,_,C3,V1,V2,V3)|(_,C2,C1,C3,V1,V2,V3)|(C1,_,C2,C3,V1,V2,V3)|imposible|(C1,C2,V1,C3,_,V2,V3)|imposible|imposible|
|(_,C1,C3,C2,V1,V2,V3)|imposible|imposible|imposible|imposible|imposible|imposible|
|(_,C2,C1,C3,V1,V2,V3)|imposible|imposible|imposible|imposible|imposible|imposible|
|(C1,_,C2,C3,V1,V2,V3)|(_,C1,C3,C2,V1,V2,V3)|imposible|imposible|imposible|imposible|imposible|
|(C1,C2,V1,C3,_,V2,V3)|imposible|imposible|(C1,C2,V1,_,C3,V2,V3)|imposible|(C1,C2,V1,C3,V2,_,V3)|(C1,C2,V1,C3,V3,V2,_)|
|(C1,C2,V1,_,C3,V2,V3)|imposible|(C1,_,V1,C2,C3,V2,V3)|imposible|imposible|(C1,C2,V1,V2,C3,_,V3)|imposible|
|(C1,C2,V1,C3,V2,_,V3)|imposible|imposible|(C1,C2,V1,_,V2,C3,V3)|imposible|imposible|(C1,C2,V1,C3,V2,V3,_)|
|(C1,C2,V1,C3,V3,V2,_)|imposible|imposible|imposible|imposible|imposible|imposible|
|(C1,_,V1,C2,C3,V2,V3)|(_,C1,V1,C2,C3,V2,V3)|imposible|imposible|(C1,V1,_,C2,C3,V2,V3)|imposible|imposible|
|(C1,C2,V1,V2,C3,_,V3)|imposible|imposible|(C1,C2,V1,V2,_,C3,V3)|imposible|imposible|(C1,C2,V1,V2,C3,V3,_)|
|(C1,C2,V1,_,V2,C3,V3)|imposible|(C1,_,V1,C2,V2,C3,V3)|imposible|imposible|(C1,C2,V1,V2,_,C3,V3)|imposible|
|(C1,C2,V1,C3,V2,V3,_)|imposible|imposible|imposible|imposible|imposible|imposible|
|(_,C1,V1,C2,C3,V2,V3)|imposible|imposible|imposible|(V1,C1,_,C2,C3,V2,V3)|imposible|imposible|
|(C1,V1,_,C2,C3,V2,V3)|(_,V1,C1,C2,C3,V2,V3)|imposible|imposible|imposible|imposible|imposible|
|(_,V1,C1,C2,C3,V2,V3)|imposible|imposible|imposible|(V1,_,C1,C2,C3,V2,V3)|imposible|imposible|
|(V1,_,C1,C2,C3,V2,V3)|imposible|imposible|imposible|imposible|imposible|imposible|
|(C1,C2,V1,V2,_,C3,V3)|imposible|imposible|imposible|imposible|imposible|(C1,C2,V1,V2,V3,C3,_)|
|(C1,C2,V1,V2,V3,C3,_)|imposible|imposible|(C1,C2,V1,V2,V3,_,C3)|imposible|imposible|imposible|
|(C1,C2,V1,V2,V3,_,C3)|imposible|imposible|imposible|imposible|imposible|imposible|
|(C1,C2,V1,V2,C3,V3,_)|imposible|imposible|(C1,C2,V1,V2,_,V3,C3)|imposible|imposible|imposible|
|(C1,C2,V1,V2,_,V3,C3)|imposible|imposible|imposible|imposible|imposible|(C1,C2,V1,V2,V3,_,C3)|
|(C1,_,V1,C2,V2,C3,V3)|(_,C1,V1,C2,V2,C3,V3)|imposible|imposible|(C1,V1,_,C2,V2,C3,V3)|imposible|imposible|
|(V1,C1,_,C2,C3,V2,V3)|(V1,_,C1,C2,C3,V2,V3)|imposible|imposible|imposible|imposible|imposible|
|(_,C1,V1,C2,V2,C3,V3)|imposible|imposible|imposible|(V1,C1,_,C2,V2,C3,V3)|imposible|imposible|
|(C1,V1,_,C2,V2,C3,V3)|(_,V1,C1,C2,V2,C3,V3)|imposible|imposible|imposible|(C1,V1,V2,C2,_,C3,V3)|imposible|
|(V1,C1,_,C2,V2,C3,V3)|(V1,_,C1,C2,V2,C3,V3)|imposible|imposible|imposible|(V1,C1,V2,C2,_,C3,V3)|imposible|
|(_,V1,C1,C2,V2,C3,V3)|imposible|imposible|imposible|(V1,_,C1,C2,V2,C3,V3)|imposible|imposible|
|(V1,_,C1,C2,V2,C3,V3)|imposible|imposible|imposible|imposible|imposible|imposible|
|(C1,V1,V2,C2,_,C3,V3)|imposible|(C1,V1,V2,_,C2,C3,V3)|imposible|imposible|imposible|(C1,V1,V2,C2,V3,C3,_)|
|(C1,V1,V2,_,C2,C3,V3)|imposible|imposible|imposible|imposible|imposible|imposible|
|(C1,V1,V2,C2,V3,C3,_)|imposible|imposible|(C1,V1,V2,C2,V3,_,C3)|imposible|imposible|imposible|
|(C1,V1,V2,C2,V3,_,C3)|imposible|(C1,V1,V2,_,V3,C2,C3)|imposible|imposible|imposible|imposible|
|(C1,V1,V2,_,V3,C2,C3)|imposible|imposible|imposible|imposible|imposible|(C1,V1,V2,V3,_,C2,C3)|
|(C1,V1,V2,V3,_,C2,C3)|imposible|imposible|imposible|imposible|imposible|imposible|
|(V1,C1,V2,C2,_,C3,V3)|imposible|(V1,C1,V2,_,C2,C3,V3)|imposible|imposible|imposible|(V1,C1,V2,C2,V3,C3,_)|
|(V1,C1,V2,_,C2,C3,V3)|(V1,_,V2,C1,C2,C3,V3)|imposible|imposible|imposible|imposible|imposible|
|(V1,_,V2,C1,C2,C3,V3)|imposible|imposible|imposible|imposible|(V1,V2,_,C1,C2,C3,V3)|imposible|
|(V1,V2,_,C1,C2,C3,V3)|imposible|imposible|imposible|imposible|imposible|imposible|
|(V1,C1,V2,C2,V3,C3,_)|imposible|imposible|(V1,C1,V2,C2,V3,_,C3)|imposible|imposible|imposible|
|(V1,C1,V2,C2,V3,_,C3)|imposible|(V1,C1,V2,_,V3,C2,C3)|imposible|imposible|imposible|imposible|
|(V1,C1,V2,_,V3,C2,C3)|(V1,_,V2,C1,V3,C2,C3)|imposible|imposible|imposible|imposible|(V1,C1,V2,V3,_,C2,C3)|
|(V1,C1,V2,V3,_,C2,C3)|imposible|imposible|imposible|imposible|imposible|imposible|
|(V1,_,V2,C1,V3,C2,C3)|imposible|imposible|imposible|imposible|(V1,V2,_,C1,V3,C2,C3)|imposible|
|(V1,V2,_,C1,V3,C2,C3)|imposible|imposible|imposible|imposible|imposible|(V1,V2,V3,C1,_,C2,C3)|
|(V1,V2,V3,C1,_,C2,C3)|(V1,V2,V3,_,C1,C2,C3)|imposible|imposible|imposible|imposible|imposible|
|(V1,V2,V3,_,C1,C2,C3)|imposible|imposible|imposible|imposible|imposible|imposible|

Para el problema de las ranas, se encontraron 48 estados posibles, asumiendo que siempre inicie un color.

La secuencia de percepción fue la siguiente:
* (C1,C2,C3,_,V1,V2,V3)
* (C1,C2,_,C3,V1,V2,V3)
* (C1,C2,V1,C3,_,V2,V3)
* (C1,C2,V1,C3,V2,_,V3)
* (C1,C2,V1,_,V2,C3,V3)
* (C1,_,V1,C2,V2,C3,V3)
* (_,C1,V1,C2,V2,C3,V3)
* (V1,C1,_,C2,V2,C3,V3)
* (V1,C1,V2,C2,_,C3,V3)
* (V1,C1,V2,C2,V3,C3,_)
* (V1,C1,V2,C2,V3,_,C3)
* (V1,C1,V2,_,V3,C2,C3)
* (V1,_,V2,C1,V3,C2,C3)
* (V1,V2,_,C1,V3,C2,C3)
* (V1,V2,V3,C1,_,C2,C3)
* (V1,V2,V3,_,C1,C2,C3)

Consta de 16 estados para solucionar el problema (15 pasos en total)

#### Monjes y Canibales
Tres misioneros se perdieron explorando una jungla. Separados de suscompañeros, sin alimento y sin radio, solo sabían que para llegar a su destino debían ir siempre hacia adelante.  

Los tres misioneros se detuvieron frente a un río que les bloqueaba el paso, preguntándose que podían hacer. De repente, aparecieron tres caníbales llevando un bote, pues también ellos querían cruzar el río. Ya anteriormente se habían encontrado grupos de misioneros y caníbales, y cada uno respetaba a los otros, pero sin confiar en ellos. 

Los caníbales se daban un festín con los misioneros cuando les superaban en número. Los tres caníbales deseaban ayudar a los misioneros a cruzar el río, pero su bote no podía llevar más de dos personas a la vez y los misioneros noquerían que los caníbales les superaran en número. 

*¿Cómo puede resolverse el problema, sin que en ningún momento hayamás caníbales que misioneros en cualquier orilla del río?*

|Estado|Cruza 1 monje|Cruzan 2 monjes|Cruza 1 canibal|Cruzan 2 canibales|Cruza 1 y 1|
|:---:|:---:|:---:|:---:|:---:|:---:|
|L 3C3M1 - R 0C0M0|problema|problema|L 2C3M0 - R 1C0M1|L 1C3M0 - R 2C0M1|L 2C2M0 - R 1C1M1|
|L 2C3M0 - R 1C0M1|imposible|imposible|L 3C3M1 - R 0C0M0|imposible|imposible|
|L 1C3M0 - R 2C0M1|imposible|imposible|L 2C3M1 - R 1C0M0|L 3C3M1 - R 0C0M0|imposible|
|L 2C2M0 - R 1C1M1|L 2C3M1 - R 1C0M0|imposible|problema|imposible|L 3C3M1 - R 0C0M0|
|L 2C3M1 - R 1C0M0|L 2C2M0 - R 1C1M1|problema|L 1C3M0 - R 2C0M1|L 0C3M0 - R 3C0M1|problema|
|L 0C3M0 - R 3C0M1|imposible|imposible|L 1C3M1 - R 2C0M0|L 2C3M1 - R 1C0M0|imposible|
|L 1C3M1 - R 2C0M0|problema|L 1C1M0 - R 2C2M1|L 0C3M0 - R 3C0M1|imposible|problema|
|L 1C1M0 - R 2C2M1|problema|L 1C3M1 - R 2C0M0|problema|problema|L 2C2M1 - R 1C1M0|
|L 2C2M1 - R 1C1M0|problema|L 2C0M0 - R 1C3M1|problema|problema|L 1C1M0 - R 2C2M1|
|L 2C0M0 - R 1C3M1|problema|L 2C2M1 - R 1C1M0|L 3C0M1 - R 0C3M0|imposible|problema|
|L 3C0M1 - R 0C3M0|imposible|imposible|L 2C0M0 - R 1C3M1|L 1C0M0 - R 2C3M1|imposible|
|L 1C0M0 - R 2C3M1|imposible|problema|L 2C0M1 - R 1C3M0|L 3C0M1 - R 0C3M0|problema|
|L 1C1M1 - R 2C2M0|L 1C0M0 - R 2C3M1|imposible|problema|imposible|L 0C0M0 - R 3C3M1|
|L 2C0M1 - R 1C3M0|imposible|imposible|L 1C0M0 - R 2C3M1|L 0C0M0 - R 3C3M1|imposible|
|L 0C0M0 - R 3C3M1|problema|problema|L 1C0M1 - R 2C3M0|L 2C0M1 - R 1C3M0|L 1C1M1 - R 2C2M0|
|L 1C0M1 - R 2C3M0|imposible|imposible|L 0C0M0 - R 3C3M1|imposible|imposible|

Para el problema de los monjes, se encontraron 16 estados posibles (sin tener en cuenta estados que harían que finalice el juego).

La secuencia de percepción fue la siguiente:
* L 3C3M1 - R 0C0M0
* L 1C3M0 - R 2C0M1
* L 2C3M1 - R 1C0M0
* L 0C3M0 - R 3C0M1
* L 1C3M1 - R 2C0M0
* L 1C1M0 - R 2C2M1
* L 2C2M1 - R 1C1M0
* L 2C0M0 - R 1C3M1
* L 3C0M1 - R 0C3M0
* L 1C0M0 - R 2C3M1
* L 2C0M1 - R 1C3M0
* L 0C0M0 - R 3C3M1

Consta de 12 estados en la solucion del problema (11 pasos en total)
