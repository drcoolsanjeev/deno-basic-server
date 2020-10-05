import { config } from 'https://deno.land/x/dotenv/mod.ts';

export const {
  DATABASE_NAME,
  DATABASE_USER,
  DATABASE_PASSWORD,
  DATABASE_HOST
} = config();

export const DATABASE_PORT: number = parseInt(config().DATABASE_PORT, 10);

export const APP_HOST = Deno.env.get('APP_HOST') || '127.0.0.1';
export const APP_PORT = Deno.env.get('APP_PORT') || 1401;

export const OAUTH = {
  GITHUB: {
    AUTHORIZATION_ENDPOINT: 'https://github.com/login/oauth/authorize',
    TOKEN_ENDPOINT: 'https://github.com/login/oauth/access_token',
    USER_INFO_ENDPOINT: 'https://api.github.com/user',
    REDIRECT_URI: config().GITHUB_OAUTH_REDIRECT_URI,
    CLIENT_ID: config().GITHUB_OAUTH_CLIENT_ID,
    CLIENT_SECRET: config().GITHUB_OAUTH_CLIENT_SECRET
  }
}
