import { UserEntity } from '@belajar-nx/shared-data-types';
import { deleteToken } from '@belajar-nx/shared-utils-cookie';
import { Http } from '@belajar-nx/shared-utils-http';
import { AxiosError, AxiosResponse } from 'axios';
import { useMutation, UseMutationResult, useQueryClient } from 'react-query';
import * as yup from 'yup';
import { USERS_QUERY_KEY } from '../use-get-users-query/use-get-users-query';

export interface CreateUserDto {
  email: string;
  password: string;
  confirmPassword: string;
}

export const createUserValidationSchema = yup.object({
  email: yup
    .string()
    .email('Invalid email address')
    .required('Email is required'),
  password: yup
    .string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters'),
  confirmPassword: yup
    .string()
    .required('Confirm password is required')
    .min(6, 'Confirm password must be at least 6 characters')
    .equals(
      [yup.ref('password'), null],
      'Confirm password must match with password'
    ),
});

const createUser = (
  paylaod: CreateUserDto
): Promise<AxiosResponse<UserEntity>> => {
  return Http.post(`/users`, paylaod);
};

export function useCreateUserMutation(): UseMutationResult<
  AxiosResponse<UserEntity>,
  AxiosError,
  CreateUserDto
> {
  const queryClient = useQueryClient();

  return useMutation(createUser, {
    onSuccess: () => {
      queryClient.invalidateQueries(USERS_QUERY_KEY);
    },
    onError: (error: AxiosError) => {
      if (error.response?.status === 401) {
        deleteToken();
      }
    },
  });
}
