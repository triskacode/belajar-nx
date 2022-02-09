import { UserEntity } from '@belajar-nx/shared-data-types';
import { deleteToken, getToken } from '@belajar-nx/shared-utils-cookie';
import { Http } from '@belajar-nx/shared-utils-http';
import { AxiosError, AxiosResponse } from 'axios';
import { useMutation, UseMutationResult, useQueryClient } from 'react-query';
import { USERS_QUERY_KEY } from '../use-get-users-query/use-get-users-query';

const deleteUser = (id: string): Promise<AxiosResponse<UserEntity>> => {
  return Http.delete(`/users/${id}`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
};

export function useDeleteUserMutation(): UseMutationResult<
  AxiosResponse<UserEntity>,
  AxiosError,
  string
> {
  const queryClient = useQueryClient();

  return useMutation((id: string) => deleteUser(id), {
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
