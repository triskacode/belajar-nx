import axios from 'axios';

export const Http = axios.create({
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});