/*para que funcione en terminal colocar nodemon src/app.js o tambien npm run dev*/
const express = require('express'); //REQUERIMOS EXPRESS
const path = require('path'); //ESTE MODULO ES DE NODE Y UNE DIRECTORIOS
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');


const app = express(); //INICIALIZAMOS EXPRESS EN LA VARIABLE APP

/*IMPORTANDO RUTAS*/
const customerRoutes = require('./routes/customer'); //

//CONFIGURAR EXPRESS - SEETINGS
app.set('port', process.env.PORT || 3000); // revisa si el sistema operativo te da un puerto y si no escucha el 3000

//CREAMOS LA CARPETA VIEWS PARA LOS MOTORES DE PLANTILLAS Y CONFIGURAR EL MOTOR DE PLANTILLA EJS
app.set('view engine', 'ejs');

//INDICAMOS DONDE ESTAN LAS CARPETAS DE LAS VISTAS
app.set('views', path.join(__dirname, 'views')) //DIRMANEM ME INDICA LA RUTA DEL ARCHIVO DESDE DONDE EJECUTO, en este caso lo une a views

//CONFIGURAR LOS MIDDLEWARES, SON FUNCIONES QUE SE EJECUTAN ANTES DE LAS PETICIONES DE LOS USUARIOS
app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'crudnodejsmysql'
}, 'single'));

//enteder los datos que vienen desde el formualario
// extended: false --> sin imagenes o ni datos codificados
app.use(express.urlencoded({ extended: false }));

//ROUTES - RUTAS DEL SERVIDOR
app.use('/', customerRoutes); //CADA QUE UN USUARIO LLEGUE A LA RUTA INICIAL, UTILIZA ESTA RUTA indicado en el row 12 de app.js

//ARCHIVOS ESTATICOS
app.use(express.static(path.join(__dirname, 'public')));

//INICIALIZANDO EL SERVIDOR
app.listen(app.get('port'), () => { //INICIALIZA EL SERVIDOR
    console.log('SERVIER ON PORT 3000'); //ESCUCHA EL PUESTO 3000
});