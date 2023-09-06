# loldle
> Las clases calidah

## Tablón

**Soto**: ❤️
**Bastidas**: 💩
**Torres**: 💩

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
