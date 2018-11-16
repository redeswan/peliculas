# GfiApp

Proyecto de prueba desarrollado con [Angular CLI](https://github.com/angular/angular-cli) versión 7.0.5.


Instrucciones para probarlo en entorno linux:

Clonar el proyecto en una carpeta local.

Agregar clave de acceso al servicio de películas:
Abrir el fichero de configuración:
src/assets/jsondata/config.json

Se muestra lo siguiente:
{
  "peliculas":{
    "url_base"    :"http://www.omdbapi.com/?apikey=xxxxxx",
    "title_param" :"t",
    "id_param"    :"i",
    "search_param":"s",
    "page_param"  :"p"
  }
}

Sustituir xxxxxx por un apikey real.


Inslalaciones necesarias:

Node.js
Descargarlo desde
https://nodejs.org/es/
Para instalar la versión más actualizada
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
sudo apt-get install nodejs

Typescript
sudo npm install -g typescript

Angular CLI
sudo npm install -g @angular/cli

Si hay una versión anterior debe desinstalarse primero:
sudo npm uninstall -g @angular/cli
sudo npm cache clean
sudo npm install -g @angular/cli

Bootstrap (emplea proper y jquery)
Agregar Popper (Empleado por Bootstrap)
npm install popper.js --save
Agregar Jquery (Empleado por Bootstrap)
npm install jquery
Agregar Bootstrap
npm install bootstrap

FontAwesome
npm install font-awesome --save


Para probar en modo desarrollo, ejecutar:
ng serve -o
