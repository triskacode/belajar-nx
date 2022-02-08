import { deleteToken, getToken } from '@belajar-nx/shared-utils-cookie';
import { Http } from '@belajar-nx/shared-utils-http';
import { config } from '@belajar-nx/shared/environments';
import { AxiosError } from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { USERS_QUERY_KEY } from '../use-get-users-query/use-get-users-query';

const deleteUser = async (id: string): Promise<void> => {
  return await Http.delete(`${config.api.SERVER_HTTP}/users/${id}`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
};

export function useDeleteUserMutation() {
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
