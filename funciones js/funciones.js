
// función tradicional
function suma(x, y){
    // procedimiento
    return x + y;
}


// otra forma de hacerlo
const resta = function(x, y){
    // procedimientos necesarios

    return x - y;
}

resta(5, 7);
suma(8, 10);

// función de flecha
const multiplicacion = (x, y) => {
    // procedimientos

    return x * y;
};

const cuadrado = x => x * x;




const f = ([a, b] = [1, 2], {x: c} = {x: a + b}) => a + b + c;

f(); // 6




// this
const obj = {
    edad: 5,
    mostrarEdad: function(){
        console.log(this.edad++);
    }
};

function inicioSesion(username, password){
    if(existeUsuario(username)){
        if(passwordValido(password, username)){
            usuario = obtenerUsuario(username);
            return true;
        }else{
            return false;
        }
    }else{
        return false;
    }
}

function existeUsuario(username){
    const conn = new Connection();
    const query = 'SELECT username FROM users WHERE username = "' + username + '"';
    const res = conn.execute(query);
    return res;
}

function passwordValido(password, username){
    const conn = new Connection();
    const query = 'SELECT password FROM users WHERE username = "' + username + '"';
    const res = conn.execute(query);
    return comparaPasswords(password, res);
}

function obtenerUsuario(username){
    const conn = new Connection();
    const query = 'SELECT * FROM users WHERE username = "' + username + '"';
    const res = conn.execute(query);
    return res.object();
}

function inicioSesion(username, password){
    const usuario = obtenerUsuario(username);
    if(usuario == null) return false;
    if(!comparaPasswords(usuario.password, password)) return false;
    return true;
}


function enviarCorreo(destinatario, sujeto, mensaje){
    validarConectividad();
    if(!existeDestinatario(destinatario)) return false;
    if(mensaje.isNull && sujeto.isNull) return false;

    prepararAplicacion();
    const correo = new correo(destinatario, sujeto, mensaje);
    if(correo.enviar()){
        app.actualizarUI();
    }else{
        const error = new Error();
        error.show('No se pudo enviar el correo');
        app.actualizarUI();

        label.text = "Intenta de nuevo...";
        this.contador--;
    }
}

function enviarCorreo(destinatario, sujeto, mensaje){
    if(!existeDestinatario(destinatario)) return false;
    if(mensaje.isNull && sujeto.isNull) return false;

    const correo = new correo(destinatario, sujeto, mensaje);
    return correo.enviar();
}


























































