![Pizzería](./images/encabezado.png)
# Título del proyecto:

#### Pizzería la QQteña 
***
## Índice
1. [Características](#características)
2. [Contenido del proyecto](#contenido-del-proyecto)
3. [Tecnologías](#tecnologías)
4. [IDE](#ide)
5. [Instalación](#instalación)
6. [Demo](#demo)
7. [Autor(es)](#autores)
8. [Institución Académica](#institución-académica)
***

#### Características:

  - Proyecto con lectura de datos json a través de la API fecth JavaScript
  - Carga dinámica del JSON 
  - Archivo json con el menu de la Pizzeria: [ver](https://raw.githubusercontent.com/madarme/persistencia/main/pizza.json)
  - Uso de Bootstrap como base de estilo en CSS: [ver](https://getbootstrap.com/)
***
  #### Contenido del proyecto
  - [index.html](https://gitlab.com/leiderMartinez/pizzeria-la-qqtena/-/blob/master/index.html): Archivo principal donde se invoca una funcion al cargarse y muestra un formulario donde se ingresa la cantidad de pizzas y sus tamaños respectivos.
  - [html/opciones.html](https://gitlab.com/leiderMartinez/pizzeria-la-qqtena/-/blob/master/html/opciones.html): Archivo en el cual se invoca una funcion al cargarse que inserta un formulario, donde se llena los sabores de las pizzas y los adicionales del pedido leyendo todo el menu desde un JSON.
  - [html/factura.html](https://gitlab.com/leiderMartinez/pizzeria-la-qqtena/-/blob/master/html/factura.html): Archivo en el cual se calcula la factura a pagar dependiendo de los tamaños, sabores y adicionales. Se invoca una funcion al cargarse que inserta una tabla donde aparece la descripcion detallada del pedido y sus precios, ademas de mostrar el total a pagar.
  - [js/proceso.js](https://gitlab.com/leiderMartinez/pizzeria-la-qqtena/-/blob/master/js/pizzeria.js): Archivo JS con el proceso de lectura del JSON y sus funciones adicionales para la impresión de resultados, claculo de precios, comparaciones y demas procedimientos necesarios.

***
#### Tecnologías

  - HTML5
  - JavaScript
  - Bootstrap

Usted puede ver el siguiente marco conceptual sobre la API fetch:

  - [Vídeo explicativo lectura con fetch()](https://www.youtube.com/watch?v=DP7Hkr2ss_I)
  - [Gúia de Mozzilla JSON](https://developer.mozilla.org/es/docs/Learn/JavaScript/Objects/JSON)
  - [Breve esplicación del JSON](https://www.w3schools.com/whatis/whatis_json.asp)

Usted puede ver el siguiente marco conceptual sobre Bootstrap:
  - [Vídeo explicativo de Bootstrap](https://www.youtube.com/watch?v=59pex8k8Xr8)

Usted puede ver el siguiente marco conceptual sobre HTML5:
  - [Guia completa de HTML5](https://www.w3schools.com/html/default.asp)

Usted puede ver el siguiente marco conceptual sobre JavaScript:
  - [Guia completa de JavaScript](https://www.w3schools.com/js/default.asp)

  ***
#### IDE

- El proyecto se desarrolla usando sublime text 3 
- Visor de JSON - [ir](http://jsonviewer.stack.hu/)

***
### Instalación

Firefox Devoloper Edition-> [descargar](https://www.mozilla.org/es-ES/firefox/developer/).
El software es necesario para ver la interacción por consola y depuración del código JS


```sh
-Descargar proyecto
-Invocar página index.html desde Firefox 
```

***
### Demo

El proyecto se desplego en el servidor madarme.co y para ver el demo de la aplicación puede dirigirse a: [Pizzería la QQteña](http://ufps22.madarme.co/Pizzeria/index.html).

***
### Autor(es)
Proyecto desarrollado por [Leider Martinez] (<leideryesidmm@ufps.edu.co>).


***
### Institución Académica   
Proyecto desarrollado en la Materia programación web del  [Programa de Ingeniería de Sistemas] de la [Universidad Francisco de Paula Santander]


   [Programa de Ingeniería de Sistemas]:<https://ingsistemas.cloud.ufps.edu.co/>
   [Universidad Francisco de Paula Santander]:<https://ww2.ufps.edu.co/>
