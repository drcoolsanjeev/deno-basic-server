import { Application } from 'https://deno.land/x/oak/mod.ts';

import { APP_HOST, APP_PORT } from './config/config.ts';
import routes from './routes/index.ts';


const app = new Application();

app.use(routes.user.allowedMethods());
app.use(routes.user.routes());

console.log(`Listening on port:${APP_PORT}...`);
const whenClosed = app.listen(`${APP_HOST}:${APP_PORT}`);
await whenClosed;
console.log(`Shutting down http :${APP_PORT}, bye!!`);