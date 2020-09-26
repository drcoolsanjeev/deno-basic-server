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
