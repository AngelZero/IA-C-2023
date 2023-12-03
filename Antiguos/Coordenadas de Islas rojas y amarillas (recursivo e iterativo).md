```python
import cv2 as cv
import numpy as np
```

## Iterativo


```python
def contar_isla2(i,j):
    pila = [(i,j)]
    
    while pila:
        x, y = pila.pop()
        isla2[x,y]=0
        
        if isla2[x+1,y]!= 0:
            pila.append((x+1,y))
        if isla2[x-1,y]!= 0:
            pila.append((x-1,y))
        if isla2[x,y+1]!= 0:
            pila.append((x,y+1))
        if isla2[x,y-1]!= 0:
            pila.append((x,y-1))
    
```

## Recursivo sin coordenadas


```python
def contar_isla3(i,j):
    isla3[i,j]=0
    if isla3[i,j+1]==255:
        contar_isla3(i,j+1)
    if isla3[i+1,j]==255:
        contar_isla3(i+1,j)
    if isla3[i,j-1]==255:
        contar_isla3(i,j-1)
    if isla3[i-1,j]==255:
        contar_isla3(i-1,j)
```

## Recursivo con coordenadas


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


```python
img = cv.imread('C:/Users/zerog/Documents/Noveno Semestre/IA/tr.png')
imgRGB = cv.cvtColor(img, cv.COLOR_BGR2RGB) #cambia modelo de color
imgHSV = cv.cvtColor(imgRGB, cv.COLOR_RGB2HSV)

#Rojo
umbralBRojo=(0,145,90)
umbralARojo=(6,255,255)
umbralBRojo2=(170,120,110)
umbralARojo2=(180,255,255)

#Amarillo
umbralBAmarillo=(21,110,110)
umbralAAmarillo=(32,255,255)

mascara1=cv.inRange(imgHSV,umbralBRojo,umbralARojo)#Solamente Tomar los elementos de la imagen que esten comprendidos entre el rango de color que acabo de probar.
mascara2=cv.inRange(imgHSV,umbralBRojo2,umbralARojo2)
mascara3=cv.inRange(imgHSV,umbralBAmarillo,umbralAAmarillo)

mascaraDef=mascara1+mascara2+mascara3
isla=mascaraDef.copy()
isla2=mascaraDef.copy()
isla3=mascaraDef.copy()

resultado = cv.bitwise_and(img, img, mask=mascaraDef)

```


```python
w,h = isla.shape
islas=0
for i in range(w):
    for j in range(h):
        if isla[i,j]!=0:
            coor=contar_isla(i,j,[i,i,j,j])
            resultado=cv.rectangle(resultado,(coor[2]-1,coor[0]-1),(coor[3]+1,coor[1]+1),(0,255,0),1)
            islas=islas+1
print(islas)
            
```

    777
    


```python
islas2=0
for i in range(w):
    for j in range(h):
        if isla2[i,j]!=0:
            contar_isla2(i,j)
            islas2=islas2+1
print(islas2)
```

    777
    


```python
islas3=0
for i in range(w):
    for j in range(h):
        if isla3[i,j]!=0:
            contar_isla3(i,j)
            islas3=islas3+1
print(islas3)
```

    777
    


```python
#cv.imshow('resultado',resultado)
#cv.imshow('mascara',mascaraDef)
#cv.imshow('BGR',img)
#cv.imshow('islas',isla)
#cv.imshow('RGB',imgRGB)
#cv.imshow('HSV',imgHSV)
#cv.waitKey(0)
#cv.destroyAllWindows()
```


```python
# Función para ampliar y mostrar un píxel en un área de 100x100 píxeles
def crear_callback(parama):
    def ampliar_pixel(event, x, y, flags, param):
        ventana = None
        if parama == 'Deteccion':
            ventana = resultado.copy()
        elif parama == 'BGR':
            ventana = img.copy()

        if event == cv.EVENT_LBUTTONDOWN:  # Detecta un clic izquierdo
            tamano_pixel = 42
            n_matriz = 17
            n = tamano_pixel*n_matriz

            newx = int(x - (n_matriz-1)/2)
            newy = int(y - (n_matriz-1)/2)

            # Crea una imagen en blanco del tamaño deseado (100x100 píxeles) y establece el valor del píxel
            zoomed_img = np.zeros((n, n, 3), dtype=np.uint8)

            for i in range(n_matriz):
                for j in range(n_matriz):
                    # Extrae el valor RGB del píxel clicado
                    pixel = ventana[newy+i, newx+j]
                    zoomed_img[i*tamano_pixel:(i+1)*tamano_pixel , j*tamano_pixel:(j+1)*tamano_pixel] = pixel 
            
            #Valor HSV del pixel
            zoomed_imgHSV = cv.cvtColor(zoomed_img, cv.COLOR_BGR2HSV)
            for i in range(n_matriz):
                for j in range(n_matriz): 
                    pixel=zoomed_imgHSV[j*tamano_pixel,i*tamano_pixel]
                    pixel2=zoomed_img[j*tamano_pixel,i*tamano_pixel]
                    color = tuple(map(int,(255-pixel2[0], 255-pixel2[1], 255-pixel2[2])))
                    tamano_fuente=tamano_pixel/120
                    cv.putText(zoomed_img, "H: "+str(pixel[0]), (i*tamano_pixel,15+j*tamano_pixel), cv.FONT_HERSHEY_SIMPLEX, tamano_fuente, color, 1)
                    cv.putText(zoomed_img, "S: "+str(pixel[1]), (i*tamano_pixel,15+int(j*tamano_pixel+30*tamano_fuente)), cv.FONT_HERSHEY_SIMPLEX, tamano_fuente, color, 1)
                    cv.putText(zoomed_img, "V: "+str(pixel[2]), (i*tamano_pixel,15+int(j*tamano_pixel+60*tamano_fuente)), cv.FONT_HERSHEY_SIMPLEX, tamano_fuente, color, 1)


            # Muestra el píxel ampliado en una ventana separada
            cv.imshow('Pixel Ampliado', zoomed_img)
            cv.waitKey(0)
            cv.destroyWindow('Pixel Ampliado')  # Cierra la ventana emergente
    return ampliar_pixel

# Crea una ventana para la imagen
cv.namedWindow('Deteccion')
cv.imshow('Deteccion', resultado)
cv.namedWindow('BGR')
cv.imshow('BGR', img)

# Establece la función de detección de clics
cv.setMouseCallback('Deteccion', crear_callback('Deteccion'))
cv.setMouseCallback('BGR', crear_callback('BGR'))

# Muestra la imagen y espera hasta que se presione la tecla 'Esc' para salir
while True:
    cv.imshow('Deteccion', resultado)
    cv.imshow('BGR', img)

    key = cv.waitKey(1)
    if key == 27:  # Presionar la tecla 'Esc' para salir
        break

```
