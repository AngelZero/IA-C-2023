# Introducción a la Inteligencia Artificial: Práctica 5, Identificación de Colores

## Actividad 1: Ensayo sobre el proceso de solución del problema

### Introducción: 
La creación y desarrollo de algoritmos constituye un proceso esencial en el ámbito de la informática y la resolución de problemás computacionales. Sin embargo, en medio de la urgencia por encontrar soluciones rápidas, es fácil pasar por alto la importancia crucial de detenerse a reflexionar y analizar a fondo el problema antes de embarcarse en la búsqueda de una solución.

La reflexión previa a la acción es un componente fundamental en el proceso de desarrollo de algoritmos, ya que sienta las bases para un diseño más eficiente y efectivo. Al enfrentarnos a un problema algorítmico, es esencial comprender la naturaleza del mismo, identificar sus características y limitaciones, así como considerar las posibles implicaciones de diferentes enfoques de solución.

Esta pausa reflexiva permite a los desarrolladores anticipar posibles desafíos, evaluar la complejidad del problema y considerar diversas estrategias antes de comprometerse con una solución específica. Un análisis exhaustivo en esta etapa inicial no solo ahorra tiempo en fases posteriores del desarrollo, sino que también contribuye a evitar errores conceptuales y a mejorar la eficiencia y escalabilidad del algoritmo resultante.

La reflexión profunda fomenta la innovación al propiciar la exploración de enfoques creativos y soluciones novedosas. Al considerar diversas perspectivas y abordajes, los desarrolladores pueden descubrir alternativas más elegantes, eficientes o incluso revolucionarias, contribuyendo así al avance continuo en el campo de la ciencia de la computación.

Es por ello que detenerse a reflexionar y analizar un problema antes de abordar su solución es un componente esencial en el desarrollo de algoritmos. Esta práctica no solo promueve la eficiencia y efectividad en el proceso de resolución de problemas, sino que también abre la puerta a la innovación y al descubrimiento de soluciones más avanzadas y creativas.

Para comenzar con el proceso de solución, es necesario definir el problema a resolver.

#### Problema:

Contar número de elementos del mismo color en imagen

#### Proceso de Desarrollo:

Puesto que ya se resolvió el algoritmo para contar elementos pertenecientes al mismo color en una imagen en blanco y negro, para resolver este problema se seguirá la misma lógica del algortimo recursivo, solo tomando en cuenta también los ajustes necesarios para trabajar con una imagen que tiene multiples colores.

La parte complicada de este problema es el manejo de los colores de la imagen, puesto que para una imagen de este tipo, ya no existe un solo valor por pixel, sino que existen 3 canales de color por cada uno si se está trabajando con el modelo rgb. 
Esto resulta en una cantidad excesiva de comparaciones por cada pixel de la imagen, lo cual no es para nada factible, es por eso que la mejor opción es convertir la imagen a otro modelo de color, en este caso se estará usando el modelo HSV, el cual trabaja con un solo valor para determinar el color y por ende el proceso es más sencillo al momento de comparar.

Una vez que se tiene convertida la imagen, es necesario elegir un umbral correspondiente para el color que se va a buscar. Ya que en este caso es el color rojo y este se encuentra en ambos extremos de los valores posibles del modelo HSV, será necesario usar dos umbrales, los cuales posteriormente servirán para crear una máscara para la imagen, la cual permita tener solo dos colores, blanco y negro y de esta manera sea más fácil hacer la identificación de los elementos aplicando el algoritmo previamente desarrollado.

De esta manera, se procede a aplicar el algoritmo, el cual solo tiene unos ligeros cambios para poder identificar las coordenadas de cada isla.

#### El algoritmo queda de la siguiente manera. 

* Ir recorriendo la matriz, de izquierda a derecha y de arriba abajo.
* Una vez que se encuentre un pixel de otro color diferente al fondo, se llama una función A, la cual recibirá las coordenadas del pixel encontrado y un arreglo de cuatro elementos para almacenar las coordenadas de la isla.
* La función A realiza lo siguiente:
     * Se pinta del mismo color del fondo el pixel de las coordenadas recibidas.
    * Si la coordenada x del pixel actual es menor a la coordenada más a la izquierda de la isla, la nueva coordenada x izquierda de la isla será la x del pixel actual.
    * Si la coordenada y del pixel actual es menor a la coordenada más hacia arriba de la isla, la nueva coordenada y arriba de la isla será la y del pixel actual.
    * Si la coordenada x del pixel actual es mayor a la coordenada más a la derecha de la isla, la nueva coordenada x derecha de la isla será la x del pixel actual.
    * Si la coordenada y del pixel actual es mayor a la coordenada más hacia abajo de la isla, la nueva coordenada y abajo de la isla será la y del pixel actual.
    * Se verifica si su pixel a la derecha está dentro de la imagen y es de un color diferente al fondo. En caso de serlo, se ejecuta la función A con las coordenadas de dicho pixel y las coordenadas actuales de la isla.
    * Se verifica si el pixel de abajo está dentro de la imagen y es de un color diferente al fondo. En caso de serlo, se ejecuta la función A con las coordenadas de dicho pixel y las coordenadas actuales de la isla.
    * Se verifica si su pixel a la izquierda está dentro de la imagen y es de un color diferente al fondo. En caso de serlo, se ejecuta la función A con las coordenadas de dicho pixel y las coordenadas actuales de la isla.
    * Se verifica si el pixel de arriba está dentro de la imagen y es de un color diferente al fondo. En caso de serlo, se ejecuta la función A con las coordenadas de dicho pixel y las coordenadas actuales de la isla.
* Una vez que termine de ejecutarse la función A regresa el arreglo con las coordenadas de la isla.
* A la imagen resultado se le dibuja un rectángulo con las coordenadas del arreglo que identifica la isla encontrada.
* Se incrementa el contador de islas encontradas.
* Se continua el recorrido de la matriz hasta que encuentre otro pixel de un color distinto al fondo.
* Se muestra la cantidad de islas encontradas una vez termine de recorrerse la matriz, así como la imagen resultado con los elementos encontrados correspondientes al color dentro del umbral elegido.

### Programación del método Recursivo con coordenadas


```python
def contar_isla(i,j, coor):
    isla[i,j]=0
    if i<coor[0]:
        coor[0]=i
    if j<coor[2]:
        coor[2]=j
    if i>coor[1]:
        coor[1]=i
    if j>coor[3]:
        coor[3]=j
    if (j+1)<w and isla[i,j+1]==255:
        coor = contar_isla(i,j+1, coor)
    if (i+1)<w and isla[i+1,j]==255:
        coor = contar_isla(i+1,j, coor)
    if (j-1)<w and isla[i,j-1]==255:
        coor = contar_isla(i,j-1, coor)
    if (i-1)<w and isla[i-1,j]==255:
        coor = contar_isla(i-1,j, coor)
    return coor
```

La programación del método recursivo es similar a la del iterativo, sin embargo aquí no es necesario hacer uso de un ciclo ya que la función en sí es el ciclo.

Cada que se manda llamar, se le agregan dos valores, referentes a la coordenada del pixel actual y una lista de coordenadas, para saber donde inicia y termina la isla. 

Inmediatamente después ese pixel se pinta, de manera que no se toma en cuenta después.

A diferencia de la actividad anterior, en este ciclo recursivo también se están comparando las coordenadas. Se hacen 4 comparaciones, una por cada valor de coordenada y se verifica si alguna de las de el pixel actual, puede sustituir a las anteriores registradas, de ser así, esta se actualiza y se sigue con la comparación de los otros pixeles.

Se van verificando los pixeles alrededor de este, en caso de ser diferentes al fondo, se llama la función con los valores de el pixel en cuestión y la lista de coordenadas.

Al final, la isla analizada termina pintada por completo del color del fondo, significando que se identificó en su totalidad.

### Programa principal

Se comienza importando la libreria de OpenCV


```python
import cv2 as cv
```

Posteriormente se carga la imagen a analizar y se cambia su modelo de color para poder trabajar mejor.


```python
img = cv.imread('C:/Users/zerog/Documents/Noveno Semestre/IA/images/act5.png')
imgRGB = cv.cvtColor(img, cv.COLOR_BGR2RGB) #cambia modelo de color
imgHSV = cv.cvtColor(imgRGB, cv.COLOR_RGB2HSV)
```

Se define el umbral del color a identificar, en este caso el rojo ya que son los elementos a encontrar.

_En este caso se usan dos umbrales, debido a que el rojo en el modelo HSV se encuentra en los dos extremos de valores permitidos_

![Imagen de islas](/images/act5.png)
Después se crea la máscara que servirá para hacer el análisis (aislando el color seleccionado de todo el resto de la imagen), y una copia para usar el método, así como también la imagen resultado que se estará editando conforme se encuentren los elementos. Dicha máscara es la suma de ambas máscaras (una por cada umbral).


```python
#Rojo
umbralBRojo=(0,145,90)
umbralARojo=(6,255,255)
umbralBRojo2=(170,120,110)
umbralARojo2=(180,255,255)

#Solamente Tomar los elementos de la imagen que esten comprendidos entre el rango de color que acabo de probar.
mascara1=cv.inRange(imgHSV,umbralBRojo,umbralARojo)
mascara2=cv.inRange(imgHSV,umbralBRojo2,umbralARojo2)

mascaraDef=mascara1+mascara2
isla=mascaraDef.copy()
resultado = cv.bitwise_and(img, img, mask=mascaraDef)
```

Se inician el contador de islas y se declara el ciclo para recorrer la matriz de la imagen. Recorre pixel por pixel la máscara y cuando identifica el color manda llamar las funciones. 

Una vez terminan de ejecutarse se incrementa el contador y en la imagen resultado se pinta un rectángulo de color verde para identificar el elemento del color en cuestión. Después se sigue con el recorrido de la matriz. 


```python
w,h = isla.shape
islas=0
for i in range(w):
    for j in range(h):
        if isla[i,j]!=0:
            coor=contar_isla(i,j,[i,i,j,j])
            resultado=cv.rectangle(resultado,(coor[2]-1,coor[0]-1),(coor[3]+1,coor[1]+1),(0,255,0),1)
            islas=islas+1
print(f"La cantidad de elementos del color encontrados fue de: {islas}")
```

    La cantidad de elementos del color encontrados fue de: 234
    

Por último se crea la ventana de la imagen original y la imagen resultado después de la identificación y se muestra en pantalla.


```python
# Crea una ventana para la imagen
cv.namedWindow('Deteccion')
cv.imshow('Deteccion', resultado)
cv.namedWindow('BGR')
cv.imshow('BGR', img)

# Muestra la imagen y espera hasta que se presione la tecla 'Esc' para salir
while True:
    cv.imshow('Deteccion', resultado)
    cv.imshow('BGR', img)

    key = cv.waitKey(1)
    if key == 27:  # Presionar la tecla 'Esc' para salir
        break
```
