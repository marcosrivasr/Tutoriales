const express = require('express');
const router = express.Router(); //metodo de expreess. Devuelve obj de javascript donde se agregan rutas para despues reutilizarlas
const customerController = require('../controllers/customerController.js');


/* CUANDO RECIVAS LA RUTA INICIAL AL SERVIDOR VAMOS A EMPEZAR CON UNA FUNCIÓN */
router.get('/', customerController.list); //es como tener la funcion de list del archivo customerController.js

/*insertar datos del formulario -  en accion esta /add */
router.post('/add', customerController.save); //esta funcion esta en controller/customerController.js

/*eliminar datos del formulario -  en accion esta /add */
router.get('/delete/:id', customerController.delete); //esta funcion esta en controller/customerController.js

/*actualizar datos del formulario -  en accion esta /add */
router.get('/update/:id', customerController.edit); //esta funcion esta en controller/customerController.js
router.post('/update/:id', customerController.update); //esta funcion esta en controller/customerController.js







module.exports = router;