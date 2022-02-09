import { config } from '@belajar-nx/shared/environments';
import axios from 'axios';

export const Http = axios.create({
  baseURL: config.api.SERVER_HTTP,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});