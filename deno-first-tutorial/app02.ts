import { serve } from 'https://deno.land/std/http/server.ts';

const s = serve({port: 8000});
console.log("Servidor iniciado...");

for await (const req of s){
    req.respond({body: "Hola mundo!"});
}