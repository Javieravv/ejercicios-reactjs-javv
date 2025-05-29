# React NavBar Responsive

Objetivo: crear un componente navbar responsivo en React, con las siguientes características:

1. Se adapta a dispositivos móviles.

2. Usa un menú hamburguesa para abrir y cerrar en dispositivo móvil.

3. Los ítems que se manejen podrán tener submenús, en un solo nivel. 

3.1. Cuando estén visualizándose en dispositivos móviles podrán abrirse las opciones del submenú sin que se cierren las que ya están abiertas.

3.2. Pero cuando esté en desktop, entonces solo podrá estar abierto un submenú a la vez. Si está abierto un submenú y hay otro abierto, entonces se cerrará.

4. Al dar click por fuera del NavBar, entonces:

4.1. Cerrar el menú, en caso de estar en dispositivos móviles.

4.2. Cerrar el submenú que esté activo, en caso de que esté en desktop.

5. Para practicar CSS, entonces se trabajará con SASS. Pero bien pudiera hacerse con tailwind.

6. Los íconos que se necesitan podrán extraerse de boxicons.
