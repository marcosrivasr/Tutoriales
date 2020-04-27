
const usuarios = [
    {id: 1,nombre: 'Marcos'},
    {id: 2,nombre: 'Lena'}
];

const telefonos = [
    {id: 1,telefono: 12345678}, 
    {id: 2,telefono: 87654321}
];

const edades = [
    {id: 1, edad: 10},
    {id: 2, edad: 20}];

const obtenerUsuario = id =>{
    return new Promise((resolve, reject) =>{
        if(usuarios.find(usuario => usuario.id === id)){
            console.log('El usuario existe!');
            resolve(obtenerTelefono(id));
        }else{
            reject('El usuario no existe');
        }
    });
};

const obtenerTelefono = id =>{
    return new Promise((resolve, reject) =>{
        if(telefonos.find(telefono => telefono.id === id)){
            console.log('El telefono existe!');
            resolve(obtenerEdad(id));
        }else{
            reject('El telefono no existe');
        }
    });
};

const obtenerEdad = id =>{
    return new Promise((resolve, reject) =>{
        const edad = edades.find(edad => edad.id === id);
        if(edad){
            resolve('El usuario tiene ' + edad.edad + ' años');
        }else{
            reject('No se encontró la edad');
        }
    });
};

obtenerUsuario(2)
.then(resUsuario =>{
    return resUsuario;
})
.then(resTel =>{
    return resTel;
})
.then(mensaje =>{
    console.log(mensaje);
})
.catch(error =>{
    console.error(error);
});
let foto = document.querySelector('#foto');
fetch('https://repositoriomrr.blob.core.windows.net/archivo/curso-node.jpg')
.then(response => response.blob())
.then(myBlob => {
    var objectURL = URL.createObjectURL(myBlob);
    foto.src = objectURL;
});
