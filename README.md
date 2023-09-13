# clases-react

> Las clases calidah

## Tablón

**Soto**: ❤️❤️❤️❤️
**Bastidas**: 💩❤️💩❤️
**Torres**: 💩💩💩💩

## Reglas de JSX

- No usar palabras reservadas como atributos (for = htmlFor, class = className)

- Solo puedes retornar un elemento padre (los parentesis abren un nuevo scope)

- Al renderizar listas, cada elemento debe tener una propiedad "key" única

- No se debe INVOCAR al manejador dentro de los eventos

## Reglas de Hooks

- Solo pueden utilizarse DENTRO de un componente JSX

## Actividades (Clase 1)

### Actividad 1

**PARTE 1:**

- Crear un componente llamado **Actividad** dentro de `/components/actividades/actividad1`

- Crear un nuevo componente llamado **Profile** dentro de `/components/actividades/actividad1`

  - Debe recibir como props: (definir ustedes mismo los tipos)

    - id
    - firstName
    - lastName
    - age
    - email
    - nickname

  - Renderizar todos los props (como ustedes quieran)

  - El campo nickname no es obligatorio

    - En caso de que el componente reciba "nickname", renderizar el campo en lugar de firstName y lastName

  - Si age es mayor (o igual) a 18, renderizar "puedes tomar cerveza"

  - Si age es menor a 18, renderizar "puedes tomar tetero"

- Importar el componente **Profile** dentro **Actividad**

- Importar el componente **Actividad** dentro de **App**

**PARTE 2:**

- Renderizar una lista de múltiples **Profile** dentro de **Actividad**

**PARTE 3:**

- Agregar un botón de **Profile** para que, al hacer click sobre él:
  - Haga un console log donde se muestre un mensaje con la siguiente forma: `id: email`
  - Ejemplo: `1: kike@email.com`

---

## Actividades (Clase 2)

### Actividad 1

**PARTE 1:**

- Crear el directorio `actividades2` dentro de `/components/actividades/`

- Crear un componente llamado **Actividad** `/components/actividades/actividad2/`

  - Crear una función llamada `saludar` dentro de **Actividad** que recibe como parámetro `mensaje`
  - Al ser invocada, la función debe hacer console log de `mensaje`

- Agregar un `button` dentro del componente **Actividad**

- El button debe, al hacer clic en él, llamar a la función `saludar`, pasando un mensaje (a elección de cada quien) a la función

**PARTE 2:**

- Crear un componente llamado **Boton** en `/components/actividades/actividad2/` que debe recibir como props:

  - texto (string) [lo que dice el botón]
  - mensaje (string)
  - manejarClick (funcion)

- Al hacer click en el botón, debe llamar a la función que se pasó como prop: `manejarClick`

- A esa función se le debe pasar como parámetro: `texto`

- Utilizar ese componente `Boton` para reemplazar el código de la **Parte 1**
  - El prop `manejarClick` será la función `saludar` creada en la **Parte 1**

**PARTE 3:**

- Renderizar múltiples botones (el componente **Boton**) que reciban distintos textos
  - Tips:
    - Crear un arreglo de objetos ( dentro de **Actividad**) con la información de cada botón
    - Mapear ese arreglo dentro de **Actividad**
    - Renderizar un **Boton** para cada objeto

---

## Actividades (Clase 3)

### Actividad 1

Crear el directorio `actividades3` dentro de `/components/actividades/`

Crear un componente llamado **Actividad** `/components/actividades/actividad3/`

Importar (y renderizar) el componente **Actividad** dentro de `App.tsx`

Realizar una consulta/fetchear (GET) la data del siguiente endpoint: `https://pokeapi.co/api/v2/pokemon/` utilizando `useEffect`

Crear un `ul` dentro del cual cada `li` debe mostrar el nombre del pokémon y la url del mismo en el siguiente formato:

```html
<ul>
  <li>Bulbasaur: https://pokeapi.co/api/v2/pokemon/1/</li>
  <li>Ivysaur: https://pokeapi.co/api/v2/pokemon/2/</li>
  <li>Venusaur: https://pokeapi.co/api/v2/pokemon/3/</li>
  ...
</ul>
```

Mientras se está fetcheando la data, se debe renderizar lo siguiente:

```html
<h1>Buscando información...</h1>
```

### Actividad 2

Repetir todo lo hecho anteriormente, pero:

La data debe fetchearse cuando el usuario haga click en un botón:

```html
<button>Buscar datos!</button>
```

### Opcional

Crear un componente en el que exista un input y un boton:

```html
<input type="text" placeholder="Escribir un id" />
<button>Buscar datos!</button>
```

En ese input, el usuario debe escribir el ID de un pokémon. Por ejemplo, 1 para Bulbasaur

Una vez se haga click en el botón, se debe fetchear la data de ese pokémon

Hay que darle feedback al usuario de que está se está fetcheando la data

Hay que darle feedback al usuario en caso de error (por ejemplo, escribir un ID inexistente como 1290379081274124)

---

## Clase 6.5

- Crear un formulario :D

- Debe tener los campos:
  name
  status (alive, dead, unknown)
  gender (female, male, genderless, unknown)

- Debe tener un botón de submit que, al hacer click en él, haga fetch a API de Ricky Martin:
  https://rickandmortyapi.com/api/character/

- Este endpoint puede recibir parámetros de búsqueda, por ejemplo:
  https://rickandmortyapi.com/api/character/?name=rick&status=alive

- La idea es QUEEEEEE... Al hacer click en el botón de submit:

  - Se haga el fetch con lo que el usuario haya escrito en cada campo
  - Traiga la data de la API y los muestre en pantalla
  - En caso de que la API no consiga datos (ejemplo, asginar "salchichon" en name), darle feedback de ello al usuario

- La API solo acepta status si el valor es: alive, dead o unkown (validar)

- La API solo acepta gender si el valor es: female, male, genderless o unknown (validar)

- Usar useReducer para manejar el estado del formulario (valores de cada campo)
