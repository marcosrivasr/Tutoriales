/* creamos la bd*/
CREATE DATABASE crudnodejsmysql;

 /*usamos la bd*/
 use crudnodejsmysql;

 /*crear tabla*/
CREATE TABLE customer (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    direccion VARCHAR(100) NOT NULL,
    telefono VARCHAR(15)
);

/*MOSTRAR TABLAS*/
SHOW TABLES;

/*DESCRIBE LA TABLA*/
describe customer;