import { Router, helpers } from 'https://deno.land/x/oak/mod.ts';
import pgClient from '../db/db.ts'; 

const router = new Router();
 
router.get('/api/users', async (ctx, next) => {
  const result = await pgClient.query('SELECT * FROM users;');
  console.log(result.rows);
  ctx.response.body = 'Hello Saquib';
  await next();
});
 
router.get('/api/users/:userId', (ctx) => {
  // const { userId } = helpers.getQuery(ctx, { mergeParams: true });
  // ctx.response.body = ctx.state.models.users.get(userId);
});
 
export default router;