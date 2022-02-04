import { getToken } from '@belajar-nx/shared-utils-cookie';
import axios from 'axios';

export const Http = axios.create({
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export const HttpAuthenticated = axios.create(
  (() => {
    return {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${getToken() || ''}`,
      },
    };
  })()
);
