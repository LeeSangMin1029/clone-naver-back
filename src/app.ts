import { Application } from 'oak';
import { green, yellow } from 'fmt-color';
import routes from './routes/mod.ts';

const app = new Application();

app.use(async (ctx, next) => {
  await next();
  ctx.response.headers.append('Access-Control-Allow-Origin', '*');
  ctx.response.headers.append('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
});
app.use(routes.api.allowedMethods());
app.use(routes.api.routes());

// main entry
app.addEventListener('listen', ({ hostname, port, secure }) => {
  const protocol = secure ? 'https://' : 'http://';
  const url = `${protocol}${hostname ?? 'localhost'}:${port}`;
  console.log(`${green('Listening on')}: ${yellow(url)}`);
});
await app.listen({ port: 3000 });
