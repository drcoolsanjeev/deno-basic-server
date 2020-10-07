import { Router, helpers } from 'https://deno.land/x/oak/mod.ts';
import {
    getAccessTokenUsingAuthCode,
    getUserDataUsingAccessToken
} from '../utils/github-oauth.ts';

const router = new Router();
 
router.get('/oauth/github', async (ctx, next) => {
  const { code } = helpers.getQuery(ctx, { mergeParams: true });

  if (!code) return ctx.throw(422, 'Authorization code missing.')

  const accessToken = await getAccessTokenUsingAuthCode(code);

  const userData = await getUserDataUsingAccessToken(accessToken);
  
  // query the db using the given email address (userData.email)
  const user = null;

  if (user) {
    // process user data or authenticate user
  } else {
    // create entry in db for the new user
  }
  
  ctx.response.body = {
      email: userData.email,
      avatarURL: userData.avatar_url
  };

  await next();
});
 
export default router;