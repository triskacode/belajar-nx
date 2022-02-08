import { AccessTokenEntity } from '@belajar-nx/shared-data-types';
import { deleteToken, setToken } from '@belajar-nx/shared-utils-cookie';
import { Http } from '@belajar-nx/shared-utils-http';
import { config } from '@belajar-nx/shared/environments';
import { AxiosError } from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import * as yup from 'yup';
import { AUTH_USER_QUERY_KEY } from '../use-auth-user-query/use-auth-user-query';

export interface LoginDto {
  email: string;
  password: string;
}

export const loginValidationSchema = yup.object({
  email: yup
    .string()
    .email('Invalid email address')
    .required('Email is required'),
  password: yup
    .string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters'),
});

const login = async (paylaod: LoginDto): Promise<AccessTokenEntity> => {
  const { data } = await Http.post(
    `${config.api.SERVER_HTTP}/auth/login`,
    paylaod
  );

  return data;
};

export function useLoginMutation() {
  const queryClient = useQueryClient();

  return useMutation(login, {
    onSuccess: (data) => {
      setToken(data.accessToken);
      queryClient.invalidateQueries(AUTH_USER_QUERY_KEY);
    },
    onError: (error: AxiosError) => {
      if (error.response?.status === 401) {
        deleteToken();
      }
    },
  });
}

