import axiod from "https://deno.land/x/axiod/mod.ts";
import { OAUTH } from '../config/config.ts';

export const getAccessTokenUsingAuthCode = async (code: string): Promise<string> => {
  const body = new URLSearchParams();
  body.append('code', code);
  body.append('redirect_uri', OAUTH.GITHUB.REDIRECT_URI);
  body.append('client_id', OAUTH.GITHUB.CLIENT_ID);
  body.append('client_secret', OAUTH.GITHUB.CLIENT_SECRET);

  const tokenDataRes = await axiod.post(OAUTH.GITHUB.TOKEN_ENDPOINT, body.toString(), {
      headers: { Accept: 'application/json', 'Content-Type': 'application/x-www-form-urlencoded' }
  });

  return tokenDataRes.data.access_token;
}

export const getUserDataUsingAccessToken = async (accessToken: string): Promise<{
  email: string, avatar_url: string, [key: string]: any
}> => {
  const userDataRes = await axiod.get(OAUTH.GITHUB.USER_INFO_ENDPOINT, {
    headers: { Authorization: `token ${accessToken}` }
  });

  // user data depends on the initial OAuth scope;
  // for basic info use scope 'read:user'
  return userDataRes.data
}
