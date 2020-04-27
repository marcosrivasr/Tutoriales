//CREAR UN OBJETO
const controller = {}; //creamos el obj

controller.list = (req, res) => {
    //res.send('hola soy el metodo list de customer controllr');
    req.getConnection((err, conn) => { //pide la conexion a mysql
        if(err) console.error(err);
        conn.query('SELECT * FROM customer', (err, customers) => {
            if (err) {
                res.json(err); //next
            }
            console.log(customers);
            res.render('customers', {
                data: customers
            }); //ejs
        });
    });
};


/*insertar datos en el formulario*/
controller.save = (req, res) => {

    const data = req.body;
    console.log(data);
    req.getConnection((err, conn) => {
        if(err) console.error(err);
        // conn.query('INSERT INTO customer set ?', [data], (err, customer) => {
        conn.query('INSERT INTO customer (id,nombre,direccion,telefono) VALUES("","Marina","ESTADO DE MEX","246810")', (err, customer) => {
            if(err) console.error(err);
            console.log(customer);
            //res.redirect('/');
            res.send('Datos guardados');
        });
    });
}

controller.edit = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM customer WHERE id=?', [id], (err, customer) => {
            res.render('customer_edit', {
                data: customer[0]
            });
        });
    });
}

controller.update = (req, res) => {
    const { id } = req.params;
    const newCustomer = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE customer set telefono = "12345678" where id="2"', [newCustomer, id], (err, rows) => {
            res.redirect('/');
        });
    });
}

/*eliminar datos en el formulario*/
controller.delete = (req, res) => {
    // console.log(req.params.id);
    const { id } = req.params;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM customer WHERE id = ?', [id], (err, rows) => {
            res.redirect('/');
        });
    });
};




module.exports = controller;