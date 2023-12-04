# Introducción a la Inteligencia Artificial: Práctica 7, El papel de la heurística

## Actividad 1: Definir que es la Heurística y cual es su papel en la resolución de problemas

### _La Heurística: Navegando por el Laberinto del Pensamiento_

La heurística, término derivado del griego **"heuriskein"** que significa **"encontrar"** o **"descubrir"**, es una herramienta cognitiva fundamental en la resolución de problemas. Se trata de un enfoque práctico que nos permite abordar situaciones complejas utilizando reglas generales y métodos intuitivos. Su papel en la resolución de problemas, particularmente en contextos matemáticos y en la navegación a través de laberintos, revela la capacidad humana de encontrar soluciones eficientes y creativas.

En el corazón de la heurística está la idea de simplificar la toma de decisiones. Frente a problemas intrincados, la mente humana recurre a atajos mentales y reglas empíricas para llegar a soluciones rápidas. En problemas matemáticos, donde la complejidad puede abrumar incluso a las mentes más agudas, la heurística actúa como guía, permitiendo a los individuos sortear obstáculos aparentemente insuperables.

En el ámbito de las **matemáticas**, la heurística se manifiesta de diversas maneras. Uno de sus ejemplos más destacados es la estrategia de "prueba y error". Cuando nos enfrentamos a un problema matemático desafiante, la heurística nos invita a probar diferentes enfoques sin la garantía de éxito inmediato. Este método iterativo no solo acelera la búsqueda de soluciones, sino que también fomenta la creatividad al permitir la exploración de diversas vías.

Otra forma en que la heurística se despliega en la **resolución de problemas matemáticos** es a través de la simplificación. Al abstraer la complejidad de un problema y enfocarse en aspectos clave, los individuos pueden desarrollar una heurística específica que les permita acercarse a la solución. Este enfoque simplificado no solo facilita la comprensión, sino que también allana el camino hacia la resolución efectiva del problema.

Además de su papel en las matemáticas, la heurística se destaca en la **resolución de laberintos**, tanto mentales como físicos. Un laberinto, con sus caminos entrelazados y elecciones aparentemente interminables, representa un desafío que va más allá de lo puramente matemático. Aquí, la heurística se manifiesta como la capacidad de tomar decisiones informadas basadas en la experiencia y el conocimiento acumulado.

Cuando nos aventuramos en un laberinto, ya sea en el mundo físico o en el abstrato de la mente, la heurística nos guía. Identificamos patrones, recordamos rutas previas exitosas y aplicamos principios de orientación para avanzar hacia la salida. Estos atajos mentales nos permiten sortear la complejidad aparentemente caótica de un laberinto y encontrar una solución eficiente.

Se peude decir que la heurística es la brújula que guía nuestros esfuerzos en la resolución de problemas. Ya sea enfrentándonos a desafíos matemáticos o a laberintos complejos, de manera que las heurística nos permite simplificar, explorar y encontrar soluciones efectivas. Su papel es crucial en el desarrollo de la creatividad y la eficiencia cognitiva, mostrando que, en el vasto laberinto del pensamiento humano, la heurística es la llave que desbloquea puertas hacia soluciones sorprendentes.


## Actividad 2: Desarrollo de algoritmo de solución mediante recursividad

Se busca encontrar la ruta más corta desde un nodo de inicio hasta un nodo objetivo en una matriz, teniendo en cuenta tanto el costo acumulado hasta el momento como una estimación heurística del costo restante.

**Pasos del Algoritmo**

1. **Inicialización:**
   - Se inicia con el nodo de inicio y se asigna un valor de costo inicial de 0.
   - Se calcula y asigna una estimación heurística del costo desde el nodo actual hasta el objetivo.
2. **Exploración de Vecinos:**
   - Se examinan los vecinos del nodo actual.
   - Se calcula el costo acumulado desde el nodo de inicio hasta cada vecino.
   - Se calcula la estimación heurística desde cada vecino hasta el objetivo.
3. **Actualizar y Ordenar:**
   - Se actualiza el costo acumulado y la estimación total para cada vecino.
   - Se ordena la lista abierta de nodos por la suma del costo acumulado y la estimación heurística.
4. **Selección del Siguiente Nodo:**
   - Se selecciona el nodo con el menor valor de la suma mencionada en el paso anterior.
5. **Repetición:**
   - Se repiten los pasos anteriores hasta llegar al nodo objetivo o hasta que no haya más nodos para explorar.

**Notas Importantes:**
* Se cuenta con 2 listas, la cerrada y la abierta. En la lista cerrada deben estar los nodos por donde ya se ha pasado, y en la lista abierta están todos los nodos que se han explorado, pero que aún no se han visitado.
* Cada nodo debe apuntar hacia su nodo padre (desde el cual se exploró/visitó). El padre solo cambia cuando hay una actualización de valores y esta arroja una estimación total menor que con el padre anterior.
* No se puede visitar un nodo que ya esté en la lista cerrada.
* Para conocer la ruta más corta, será necesario ir siguiendo el camino de nodos "Padre" desde el nodo final.


## Actividad 3: Programación y Explicación del Algoritmo de Solución Recursivo

Se comienza definiendo el laberinto a resolver como una lista de listas. En este caso se han definido dos laberintos, uno de menor y otro de mayor dificultad.


```python
laberinto = [
    [1,1,1,1,1,1,1,0,1],
    [0,0,0,0,0,0,1,0,1],
    [1,1,1,0,1,1,1,0,1],
    [1,0,0,0,1,0,1,0,1],
    [1,0,1,1,1,0,1,0,1],
    [1,0,0,0,0,0,0,0,1],
    [1,0,1,1,1,0,1,0,1],
    [1,0,1,0,0,0,1,0,1],
    [1,1,1,1,1,1,1,1,1]
]

laberinto2 = [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1],
    [1,1,1,0,1,1,1,0,1,1,1,1,0,1,1,1,0,1],
    [1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1],
    [1,0,1,1,1,0,1,0,0,0,0,1,1,1,0,1,0,1],
    [1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1],
    [1,0,1,1,1,0,1,0,1,1,0,1,1,1,0,1,0,1],
    [1,0,1,0,0,0,1,0,1,0,0,1,1,1,0,1,0,1],
    [1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1],
    [1,1,1,0,1,1,1,0,1,1,1,1,0,1,1,1,0,1],
    [1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,0,1],
    [1,0,1,1,1,0,1,0,0,1,0,1,1,1,0,1,0,1],
    [1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1],
    [1,0,1,1,1,0,1,0,1,1,0,1,1,1,0,1,0,1],
    [1,0,1,0,0,0,1,0,1,0,0,1,1,1,0,1,0,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1]
]
```

Después se declaran las listas a utilizar, en este caso son:
* Lista abierta: Vecinos explorados pero no visitados
* Lista cerrada: Nodos visitados
* Lista Casillas: Todas las casillas en el laberinto, con su numero de casilla, su coordenada, nodo padre, g, f, h y si es muro o senda.
* Lista filas: Lista auxiliar para la creacion de las listas anteriores.
* Camino: Lista que guardará el camino mas corto encontrado.

Y se detallan las coordenadas de inicio y fin para el laberinto utilizado.


```python
lista_abierta = []
lista_cerrada = []
lista_casillas=[]
lista_filas = []
camino = []
n=0

coordenada_inicio = (1,0)
coordenada_final = (0,7)
```

Se realiza un ciclo que llenará la lista de casillas con valores por default, de esta manera esta lista representa todas las casillas del laberinto.


```python
#Numero(0),j(1),i(2), padre(3), g(4), h(5), f(6), valor(7)

for numero_fila,valor_fila in enumerate(laberinto, start=0):
    for numero_columna,valor_columna in enumerate(valor_fila, start=0):
        lista_filas.append([n,numero_fila,numero_columna,None,None,0,0,valor_columna])
        n+=1
    lista_casillas.append(lista_filas)
    lista_filas=[]
```

Se define la función "es_valido" la cual indica si un vecino es valido o no para su exploración.

Toma en cuenta que sus coordenadas estén dentro de los límites del laberinto y que la casilla en cuestión sea una senta y no un muro.


```python
def es_valido(pos):
        return 0 <= pos[0] < len(laberinto) and 0 <= pos[1] < len(laberinto[pos[0]]) and laberinto[pos[0]][pos[1]] == 0
```

La función "calcular_camino" es el método recursivo en cuestión. Como parámetro recibe una coordenada (j,i).

Lo primero que realiza esta función es una separación de los valores de la coordenada para un mejor entendimiento.
Posteriormente agrega a la lista cerrada la casilla actual, pues llamar a la funcion con unas coordenadas siginifica que la casilla a la que pertenecen esas coordenadas está siendo visitada.


```python
def calcular_camino(coordenada):
    j=coordenada[0]
    i=coordenada[1]
    lista_cerrada.append(lista_casillas[j][i][0])
    
    '''
    Se comienza calculando H de la casilla actual restando los valores absolutos de las coordenadas actuales con las 
    finales y multiplicando el resultado por 10, el peso por desplazarse de manera recta entre casillas.
    '''
    #calcular H
    lista_casillas[j][i][5]=(abs(j-coordenada_final[0])+abs(i-coordenada_final[1]))*10
    
    '''
    De igual manera se crea una lista con los vecinos de la casilla actual y se verifican uno por uno si son válidos.
    '''
    vecinos = [(j - 1, i-1,1), (j - 1, i,0), (j-1, i + 1,1),
               (j, i-1,0), (j, i + 1,0),
               (j + 1, i-1,1), (j + 1, i,0), (j+1, i + 1,1)
              ]
    vecinos_validos = [vecino for vecino in vecinos if es_valido(vecino) and lista_casillas[vecino[0]][vecino[1]][0] not in lista_cerrada]

    '''
    Se extraen los datos de los vecinos válidos. Sus coordenadas x, y, y si se encuentran a los lados o en diagonal (valor d).
    '''   

    for vecino in vecinos_validos:
        y=vecino[0]
        x=vecino[1]
        d=vecino[2]
        
        '''
        Los vecinos encontrados se agregan a la lista abierta (en caso de no existir ya en esta) y se comienzan a calcular sus valores para cada uno.
        '''
        #Agregar lista abierta
        if [lista_casillas[y][x][0],lista_casillas[y][x][1],lista_casillas[y][x][2]] not in lista_abierta:
            lista_abierta.append([lista_casillas[y][x][0],lista_casillas[y][x][1],lista_casillas[y][x][2]])
        
        
        '''
        Se comienza calculando G. y se sigue el siguiente proceso:
        * Se comprueba si el vecino es nulo en G.
        * En caso de serlo, se comprueba si la casilla actual es nula (Primera iteración), en caso de serlo se le asigna el valor G de 0 y el padre -1.
        * Si la casilla vecina está en diagonal, su G se calculará como la suma de la G de su padre más 14, en caso de no ser diagonal será más 10.
        * Se agrega como padre del vecino el número de la casilla actual, se calcula H para el vecino y F como la suma de G y H.
        En caso de no ser nula en G (significa que ya se había realizado un cálculo previo con otro Padre).
        * Se verifica si es diagonal o no y si el nuevo cálculo de G sería menor que el anterior, en caso de serlo se actualiza junto a su F, si no, se ignora.
        '''    
        #Calcular G
        if lista_casillas[y][x][4] is None:
            if lista_casillas[j][i][4] is None:
                lista_casillas[j][i][4]=0
                lista_casillas[j][i][3]=-1
            if d==1:
                lista_casillas[y][x][4]=lista_casillas[j][i][4] + 14
            else:
                lista_casillas[y][x][4]=lista_casillas[j][i][4] + 10
            #Agregar padre de esa casilla (solo numero de casilla)
            lista_casillas[y][x][3]=lista_casillas[j][i][0]
            #calcular H
            lista_casillas[y][x][5]=(abs(y-coordenada_final[0])+abs(x-coordenada_final[1]))*10
            #Calcular F
            lista_casillas[y][x][6]=lista_casillas[y][x][4] +lista_casillas[y][x][5]
        else:
            if d==1:
                if lista_casillas[j][i][4] + 14 < lista_casillas[y][x][4]:
                    lista_casillas[y][x][4]=lista_casillas[j][i][4] + 14
                    #Agregar padre de esa casilla (solo numero de casilla)
                    lista_casillas[y][x][3]=lista_casillas[j][i][0]
                    #Calcular F
                    lista_casillas[y][x][6]=lista_casillas[y][x][4] +lista_casillas[y][x][5]
            else:
                if lista_casillas[j][i][4] + 10 < lista_casillas[y][x][4]:
                    lista_casillas[y][x][4]=lista_casillas[j][i][4] + 10
                    #Agregar padre de esa casilla (solo numero de casilla)
                    lista_casillas[y][x][3]=lista_casillas[j][i][0]
                    #Calcular F
                    lista_casillas[y][x][6]=lista_casillas[y][x][4] +lista_casillas[y][x][5]
    '''
    Se crea una nueva lista auxiliar, la cual contendrá los a las casillas de la lista abierta, pero con más datos, 
    estos serán: [Número de casilla, F, Y, X]
    '''        
    lista_abierta2=[]
    for casilla in lista_abierta:
        lista_abierta2.append([casilla[0],lista_casillas[casilla[1]][casilla[2]][6],casilla[1],casilla[2]])
    '''
    Para Posteriormente ordenarlas en otra lista, de acuerdo a su F, con la menor hasta el final de la lista.
    Se saca esa casilla, la de la F menor, se saca el valor correspondiente de la Lista abierta general.
    Se verifica si la H de la casilla actual es 0, y en caso de serlo, significaría que se llegó al punto. Se sale de
    la función y se agrega ese ultimo valor a la lista de padres (lista_filas)
    En caso de no ser H==0 solo se agrega a la lista de padres y se llama la función con las coordenadas de la casilla
    de menor F.
    '''
    lista_ordenada_inversa = sorted(lista_abierta2, key=lambda x: x[1], reverse=True)
    if lista_ordenada_inversa:
        f_menor = lista_ordenada_inversa.pop()
        lista_abierta.remove([f_menor[0],f_menor[2],f_menor[3]])
        if lista_casillas[j][i][5] == 0:
            lista_filas.append([lista_casillas[j][i][0],lista_casillas[j][i][3]])
            return
        else:
            lista_filas.append([lista_casillas[j][i][0],lista_casillas[j][i][3]])
            calcular_camino((f_menor[2],f_menor[3]))
        
```

La función camino_final recibe una lista con dos elementos, el numero de casilla y el padre de la casilla. De lo que se encarga es de encontrar el camino relacionando el padre de una casilla, con el padre del padre de esa casilla y así sucesivamente.

Cada que encuentra al padre genera una lista que contiene unicamente los valores de número de casilla del camino más corto.


```python
def camino_final(padre=None):
    if padre is None:
        ultimo = lista_filas.pop()
        camino.append(ultimo[0])
        camino_final(ultimo)
    else:
        if padre[1] == -1:
            return
        else:
            ultimo = next(sublista for sublista in lista_filas if sublista[0] == padre[1])
            camino.append(ultimo[0])
            camino_final(ultimo)
        
   
```

Se manda llamar la funcion de calcular_camino con la coordenada de inicio y una vez que termine, la función para obtener el camino final.


```python
calcular_camino(coordenada_inicio)
camino_final()
```

La ultima parte del código solo presenta el resultado de una manera gráfica.
Imprime en pantalla el laberinto y la ruta encontrada en rojo.


```python
# Códigos ANSI para texto y fondos de diferentes colores
codigo_texto_blanco = "\x1b[97m"
codigo_fondo_blanco = "\x1b[107m"

codigo_texto_negro = "\x1b[30m"
codigo_fondo_negro = "\x1b[40m"

codigo_texto_rojo = "\x1b[31m"
codigo_fondo_rojo = "\x1b[41m"

# Restaurar el color a su estado original
restaurar_color = "\x1b[0m"

codigo_muro = codigo_texto_blanco + codigo_fondo_negro
codigo_camino = codigo_texto_negro + codigo_fondo_rojo
codigo_normal = restaurar_color

for fila in lista_casillas:
    for columna in fila:
        if columna[7]==1:
            print(f"{codigo_muro}{columna[0]:3}",end=" ")
        elif columna[0]  in camino:
            print(f"{codigo_camino}{columna[0]:3}",end=" ")
        else:
            print(f"{codigo_normal}{columna[0]:3}",end=" ")
    print(f"{restaurar_color}")
    
print(f"\n {codigo_texto_negro}■{restaurar_color} Muro\t{codigo_texto_rojo}■{restaurar_color} Ruta más corta\n\nLa ruta más corta fue: ")

camino.reverse()
for valor in camino:
    print(f"{valor} ",end="")
        
        
```

    [97m[40m  0 [97m[40m  1 [97m[40m  2 [97m[40m  3 [97m[40m  4 [97m[40m  5 [97m[40m  6 [30m[41m  7 [97m[40m  8 [0m
    [30m[41m  9 [30m[41m 10 [30m[41m 11 [0m 12 [0m 13 [0m 14 [97m[40m 15 [30m[41m 16 [97m[40m 17 [0m
    [97m[40m 18 [97m[40m 19 [97m[40m 20 [30m[41m 21 [97m[40m 22 [97m[40m 23 [97m[40m 24 [30m[41m 25 [97m[40m 26 [0m
    [97m[40m 27 [0m 28 [30m[41m 29 [0m 30 [97m[40m 31 [0m 32 [97m[40m 33 [30m[41m 34 [97m[40m 35 [0m
    [97m[40m 36 [30m[41m 37 [97m[40m 38 [97m[40m 39 [97m[40m 40 [0m 41 [97m[40m 42 [30m[41m 43 [97m[40m 44 [0m
    [97m[40m 45 [0m 46 [30m[41m 47 [30m[41m 48 [30m[41m 49 [30m[41m 50 [30m[41m 51 [0m 52 [97m[40m 53 [0m
    [97m[40m 54 [0m 55 [97m[40m 56 [97m[40m 57 [97m[40m 58 [0m 59 [97m[40m 60 [0m 61 [97m[40m 62 [0m
    [97m[40m 63 [0m 64 [97m[40m 65 [0m 66 [0m 67 [0m 68 [97m[40m 69 [0m 70 [97m[40m 71 [0m
    [97m[40m 72 [97m[40m 73 [97m[40m 74 [97m[40m 75 [97m[40m 76 [97m[40m 77 [97m[40m 78 [97m[40m 79 [97m[40m 80 [0m
    
     [30m■[0m Muro	[31m■[0m Ruta más corta
    
    La ruta más corta fue: 
    9 10 11 21 29 37 47 48 49 50 51 43 34 25 16 7 
