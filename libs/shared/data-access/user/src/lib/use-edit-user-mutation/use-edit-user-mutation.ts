import { UserEntity } from '@belajar-nx/shared-data-types';
import { deleteToken, getToken } from '@belajar-nx/shared-utils-cookie';
import { Http } from '@belajar-nx/shared-utils-http';
import { AxiosError, AxiosResponse } from 'axios';
import { useMutation, UseMutationResult, useQueryClient } from 'react-query';
import * as yup from 'yup';
import { USERS_QUERY_KEY } from '../use-get-users-query/use-get-users-query';

export interface EditUserDto {
  email: string;
}

export const editUserValidationSchema = yup.object({
  email: yup
    .string()
    .email('Invalid email address')
    .required('Email is required'),
});

const editUser = (
  id: string,
  paylaod: EditUserDto
): Promise<AxiosResponse<UserEntity>> => {
  return Http.patch(`/users/${id}`, paylaod, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
};

export function useEditUserMutation(
  id: string
): UseMutationResult<AxiosResponse<UserEntity>, AxiosError, EditUserDto> {
  const queryClient = useQueryClient();

  return useMutation((payload: EditUserDto) => editUser(id, payload), {
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
