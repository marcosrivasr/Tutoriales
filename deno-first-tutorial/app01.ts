import { exists, existsSync } from 'https://deno.land/std/fs/mod.ts';

const res = await exists('./archivo.txt');

console.log(res);
