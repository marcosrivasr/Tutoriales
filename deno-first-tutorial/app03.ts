import * as expressive from "https://raw.githubusercontent.com/NMathar/deno-express/master/mod.ts";

const port = 3000;
const app = new expressive.App();

app.use(expressive.simpleLog());
app.use(expressive.static_("./public"));
app.use(expressive.bodyParser.json());

app.get('/api/user/{user_id}', async (req, res) =>{
    await res.json({id: req.params.user_id, name: 'Marcos', phone: '33456113'});

});

const s = await app.listen(port);
console.log("Servidor iniciado...");

