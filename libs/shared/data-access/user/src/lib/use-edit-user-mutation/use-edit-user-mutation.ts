import { UserEntity } from '@belajar-nx/shared-data-types';
import { deleteToken, getToken } from '@belajar-nx/shared-utils-cookie';
import { Http } from '@belajar-nx/shared-utils-http';
import { config } from '@belajar-nx/shared/environments';
import { AxiosError } from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import * as yup from "yup";
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

const editUser = async (
  id: string,
  paylaod: EditUserDto
): Promise<UserEntity> => {
  const { data } = await Http.patch(
    `${config.api.SERVER_HTTP}/users/${id}`,
    paylaod,
    {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }
  );

  return data;
};

export function useEditUserMutation(id: string) {
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