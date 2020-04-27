
const usuarios = [
    {id: 1,nombre: 'Marcos',},
    {id: 2,nombre: 'Lena'}
];

const telefonos = [
    {id: 1,telefono: 12345678}, 
    {id: 2,telefono: 87654321}
];

const edades = [
    {id: 1,edad: 10},
    {id: 2, edad: 20}];

const obtenerUsuario = (id, callback, error) =>{
    if(usuarios.find(usuario => usuario.id === id)){
        console.log('El usuario existe!');
        //callback
        callback(id);
    }else{
        //error
        error('El usuario no existe');
    }
};

const obtenerTelefono = (id, callback, error) =>{
    if(telefonos.find(telefono => telefono.id === id)){
        console.log('El telefono existe!');
        //callback
        callback(id);
    }else{
        //error
        error('El teléfono no existe');
    }
}

const obtenerEdad = (id, callback, error) =>{
    const edad = edades.find(edad => edad.id === id);
    if(edad){
        //callback
        callback('El usuario tiene ' + edad.edad + ' años');
    }else{
        //error
        error('No se encontró la edad');
    }
};

obtenerUsuario(2, id =>{
    // siguiente función
    obtenerTelefono(id, resTelefono =>{
        // seguir mi código
        obtenerEdad(resTelefono, resEdad =>{
            console.log(resEdad);
        }, errorEdad =>{
            console.error(errorEdad);
        });
    }, errorTelefono =>{
        console.error(errorTelefono);
    });
}, error =>{
    console.error(error);
});
