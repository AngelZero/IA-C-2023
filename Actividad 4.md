# Introducción a la Inteligencia Artificial: Práctica 4, Conteo de Islas

## Actividad 1: Ensayo sobre el proceso de solución del problema

### Introducción: 
La creación y desarrollo de algoritmos constituye un proceso esencial en el ámbito de la informática y la resolución de problemas computacionales. Sin embargo, en medio de la urgencia por encontrar soluciones rápidas, es fácil pasar por alto la importancia crucial de detenerse a reflexionar y analizar a fondo el problema antes de embarcarse en la búsqueda de una solución.

La reflexión previa a la acción es un componente fundamental en el proceso de desarrollo de algoritmos, ya que sienta las bases para un diseño más eficiente y efectivo. Al enfrentarnos a un problema algorítmico, es esencial comprender la naturaleza del mismo, identificar sus características y limitaciones, así como considerar las posibles implicaciones de diferentes enfoques de solución.

Esta pausa reflexiva permite a los desarrolladores anticipar posibles desafíos, evaluar la complejidad del problema y considerar diversas estrategias antes de comprometerse con una solución específica. Un análisis exhaustivo en esta etapa inicial no solo ahorra tiempo en fases posteriores del desarrollo, sino que también contribuye a evitar errores conceptuales y a mejorar la eficiencia y escalabilidad del algoritmo resultante.

La reflexión profunda fomenta la innovación al propiciar la exploración de enfoques creativos y soluciones novedosas. Al considerar diversas perspectivas y abordajes, los desarrolladores pueden descubrir alternativas más elegantes, eficientes o incluso revolucionarias, contribuyendo así al avance continuo en el campo de la ciencia de la computación.

Es por ello que detenerse a reflexionar y analizar un problema antes de abordar su solución es un componente esencial en el desarrollo de algoritmos. Esta práctica no solo promueve la eficiencia y efectividad en el proceso de resolución de problemas, sino que también abre la puerta a la innovación y al descubrimiento de soluciones más avanzadas y creativas.

Para comenzar con el proceso de solución, es necesario definir el problema a resolver.

#### Problema:
Se requiere realizar un programa capaz de contar el numero de elementos del mismo color.

#### Proceso de solución:
Puesto que las islas se componen de varios cuadrados, el argumento general para la resolución del problema sería de esta manera: ir recorriendo cada punto de la matriz, y cuando se detecte un elemento de diferente color, iniciar un algoritmo el cual sea capaz de recorrer solamente la isla, de manera que la identifique y también de alguna manera la registre, para no volverla a contar en caso de que se vuelva a encontrar en la matriz.

Dado que no cuenta como una isla individual aquellas dos que estén unidas solamente por la esquina de un cuadrado, el proceso de solución se simplifica, pues una isla solo puede estar formada por aquellos cuadrados que estén directamente unidos con cuadrados a su derecha, izquierda, arriba o abajo.

De esta manera, el algoritmo puede quedar de la siguiente forma, para un método iterativo:

##### Método Iterativo: 
* Ir recorriendo la matriz, de izquierda a derecha y de arriba abajo.
* Una vez que se encuentre un elemento de otro color diferente al fondo, este se agrega a una pila.
* Mientras la pila tenga elementos se ejecutará el siguiente ciclo.
* Se extrae el ultimo elemento de la pila.
* Se pinta del color del fondo el elemento extraído de la pila.
* Se verifica si su elemento a la derecha es de un color diferente al fondo. En caso de serlo, se agrega a la pila.
* Se verifica si el elemento de abajo es de un color diferente al fondo. En caso de serlo, se agrega a la pila.
* Se verifica si su elemento a la izquierda es de un color diferente al fondo. En caso de serlo, se agrega a la pila.
* Se verifica si el elemento de arriba es de un color diferente al fondo. En caso de serlo, se agrega a la pila.
* Se verifica si la pila sigue teniendo elementos.
* Una vez que termine el ciclo se incrementa el contador de islas encontradas.
* Se continua el recorrido de la matriz hasta que encuentre otro elemento de un color distinto al fondo.
* Se muestra la cantidad de islas encontradas una vez termine de recorrerse la matriz.

Y para un método recursivo, se sigue un proceso similar:

##### Método Recursivo:
* Ir recorriendo la matriz, de izquierda a derecha y de arriba abajo.
* Una vez que se encuentre un elemento de otro color diferente al fondo, se llama una función A, la cual recibirá las coordenadas del elemento encontrado.
* La función A realiza lo siguiente:
    * Se pinta del mismo color del fondo el elemento de las coordenadas recibidas.
    * Se verifica si su elemento a la derecha es de un color diferente al fondo. En caso de serlo, se ejecuta la función A con las coordenadas de dicho elemento.
    * Se verifica si el elemento de abajo es de un color diferente al fondo. En caso de serlo, se ejecuta la función A con las coordenadas de dicho elemento.
    * Se verifica si su elemento a la izquierda es de un color diferente al fondo. En caso de serlo, se ejecuta la función A con las coordenadas de dicho elemento.
    * Se verifica si el elemento de arriba es de un color diferente al fondo. En caso de serlo, se ejecuta la función A con las coordenadas de dicho elemento.
* Una vez que termine de ejecutarse la función A se incrementa el contador de islas encontradas.
* Se continua el recorrido de la matriz hasta que encuentre otro elemento de un color distinto al fondo.
* Se muestra la cantidad de islas encontradas una vez termine de recorrerse la matriz.


### Programación del método Iterativo


```python
def contar_isla_iterativo(i,j):
    pila = [(i,j)]
    
    while pila:
        x, y = pila.pop()
        isla_i[x,y]=0
        
        if isla_i[x+1,y]!= 0:
            pila.append((x+1,y))
        if isla_i[x-1,y]!= 0:
            pila.append((x-1,y))
        if isla_i[x,y+1]!= 0:
            pila.append((x,y+1))
        if isla_i[x,y-1]!= 0:
            pila.append((x,y-1))
```

Como se describió en la parte anterior, lo que se realiza en este fragmento del código es:
* Inicializar la pila con el pixel actual.
* Entrar a un ciclo que, mientras la pila tenga elementos dentro, irá sacando el último elemento, pintando ese pixel del color del fondo (para no tomarlo en cuenta después) e ir verificando los pixeles a su alrededor.
* Mientras sean diferentes al fondo, esos pixeles se agregarán a la pila. 

Esto garantiza que todos los pixeles pertenecientes a una isla sean identificados.

### Programación del método Recursivo


```python
def contar_isla_recursivo(i,j):
    isla_r[i,j]=0
    if isla_r[i,j+1]!=0:
        contar_isla_recursivo(i,j+1)
    if isla_r[i+1,j]!=0:
        contar_isla_recursivo(i+1,j)
    if isla_r[i,j-1]!=0:
        contar_isla_recursivo(i,j-1)
    if isla_r[i-1,j]!=0:
        contar_isla_recursivo(i-1,j)
```

La programación del método recursivo es similar a la del iterativo, sin embargo aquí no es necesario hacer uso de un ciclo ya que la función en sí es el ciclo.

Cada que se manda llamar, se le agregan dos valores, referentes a la coordenada del pixel actual. 

Inmediatamente después ese pixel se pinta, de manera que no se toma en cuenta después y se van verificando los pixeles alrededor de este, en caso de ser diferentes al fondo, se llama la función con los valores de el pixel en cuestión.

Al final de ambos métodos, la isla analizada termina pintada por completo del color del fondo, significando que se identificó en su totalidad.

### Programa principal

Se comienza importando la libreria de OpenCV


```python
import cv2 as cv
```

Posteriormente se carga la imagen a analizar y se cambia su modelo de color para poder trabajar mejor.


```python
img = cv.imread('C:/Users/zerog/Documents/Noveno Semestre/IA/images/islas.png')
imgRGB = cv.cvtColor(img, cv.COLOR_BGR2RGB) #cambia modelo de color
imgHSV = cv.cvtColor(imgRGB, cv.COLOR_RGB2HSV)
```

Se define el umbral del color a identificar, en este caso el negro ya que la imagen contiene islas de ese color.
![Imagen de islas](/images/islas.png)
Después se crea la máscara que servirá para hacer el análisis (aislando el color seleccionado de todo el resto de la imagen), y dos copias, una para trabajar con cada método.


```python
#Negro
umbralNegro=(0,0,0)

#Solamente Tomar los elementos de la imagen que esten comprendidos entre el rango de color que acabo de probar.
mascara=cv.inRange(imgHSV,umbralNegro,umbralNegro)

isla_i=mascara.copy()
isla_r=mascara.copy()
```

Se inician los dos contadores de islas (uno para cada método) y se declara el ciclo para recorrer la matriz de la imagen. Recorre pixel por pixel la máscara y cuando identifica el color manda llamar las funciones. 

Una vez terminan de ejecutarse se incrementa el contador y se sigue con el recorrido de la matriz. 


```python
islas_i=0
islas_r=0

w,h = isla_i.shape
for i in range(w):
    for j in range(h):
        if isla_i[i,j]!=0:
            contar_isla_iterativo(i,j)
            islas_i=islas_i+1
        if isla_r[i,j]!=0:
            contar_isla_recursivo(i,j)
            islas_r=islas_r+1
print(f"La cantidad de islas encontradas con cada metodo fue de: \nMétodo iterativo: {islas_i}\nMétodo recursivo: {islas_r}")
```

Por último se crea la ventana de la imagen original y se muestra en pantalla.


```python
# Crea una ventana para la imagen
cv.namedWindow('BGR')
cv.imshow('BGR', img)
# Muestra la imagen y espera hasta que se presione la tecla 'Esc' para salir
while True:
    cv.imshow('BGR', img)

    key = cv.waitKey(1)
    if key == 27:  # Presionar la tecla 'Esc' para salir
        break
```
