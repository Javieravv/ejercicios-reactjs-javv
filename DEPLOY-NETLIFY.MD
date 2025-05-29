# Desplegar cualquiera de estos ejercicios en NetliFy

Todos los ejercicios que hay en este repositorio son independientes unos de otros. No comparten código ni ninguna dependencia.

Como hacen parte de un único repositorio, no es posible desplegarlos en NetliFy a través de github, por lo que es necesario desplegarlos desde el CLI de netlify.

## ¿Cómo desplegar cualquier ejercicio en un proyecto de NetliFy?

1. Dentro del directorio de la aplicación hacer un build: ```yarn build```

2. Utilizar el CLI de Netlify.

Asegurarse de tener instalado ```netlify CLI```. Para instalarlo:

```
npm install -g netlify-cli
```

Iniciar sesión en Netlify desde el CLI: 

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
El archivo ```netlify.toml``` deberá tener algo como esto:

```
[build]
publish = "dist"
```