# Aplicación QuizApp

Esta es una aplicación de quices en la que muestra preguntas y aleatoriamente las respuestas.

Está hecha en React.

# ¿Cómo desplegarla?

## Despliegue en Netlify

Hacer un build de la aplicación: ```yarn build```

Utilizar el CLI de Netlify.

Asegurarse de tener instalado ```netlify CLI```. Para instalarlo:

```
npm install -g netlify-cli
```

Iniciar sesión: 

```
netlify login
```
Enlazar el proyecto a un proyecto en Netlify o crear un proyecto nuevo:

```
netlify link
```

Verificar el archivo de configuración ```netlify.toml```

Ejecutar el despliegue:
```
netlify deploy --prod
```

Con esta forma de deploy permitimos que este ejercicio haga parte de una única carpeta de proyectos de React, contenidos en una única carpeta y en un único repositorio.
