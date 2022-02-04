import { config } from '@belajar-nx/shared/environments';
import cookie from 'js-cookie';

export const getToken = () => cookie.get(config.cookie.TOKEN_COOKIE_NAME);
export const setToken = (token: string) =>
  cookie.set(config.cookie.TOKEN_COOKIE_NAME, token);
export const deleteToken = () =>
  cookie.remove(config.cookie.TOKEN_COOKIE_NAME);
