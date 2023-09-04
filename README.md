# loldle
> Las clases calidah

## Reglas de JSX
- No usar palabras reservadas como atributos (for = htmlFor, class = className)

- Solo puedes retornar un elemento padre (los parentesis abren un nuevo scope)

- Al renderizar listas, cada elemento debe tener una propiedad "key" única

- No se debe INVOCAR al manejador dentro de los eventos

## Reglas de Hooks
- Solo pueden utilizarse DENTRO de un componente JSX

## Actividades

### Actividad 1

**PARTE 1:**

- Crear un componente llamado **Actividad1** dentro de /components/

- Crear un nuevo componente llamado **Profile** dentro de /components/
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

- Importar el componente **Profile** dentro **Actividad1**

- Importar el componente **Actividad1** dentro de **App**

**PARTE 2:**

- Renderizar una lista de múltiples **Profile** dentro de **Actividad1**

**PARTE 3:**

- Agregar un botón de **Profile** para que, al hacer click sobre él:
  - Haga un console log donde se muestre un mensaje con la siguiente forma: `id: email`
  - Ejemplo: `1: kike@email.com`
