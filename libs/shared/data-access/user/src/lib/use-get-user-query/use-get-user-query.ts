import { UserEntity } from '@belajar-nx/shared-data-types';
import { getToken } from '@belajar-nx/shared-utils-cookie';
import { Http } from '@belajar-nx/shared-utils-http';
import { config } from '@belajar-nx/shared/environments';
import { useQuery } from 'react-query';
import { USERS_QUERY_KEY } from '../use-get-users-query/use-get-users-query';

const getUser = async (
  id: string,
  signal: AbortSignal | undefined
): Promise<UserEntity> => {
  const { data } = await Http.get(
    `${config.api.SERVER_API_BASE_URL}/users/${id}`,
    {
      signal,
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }
  );

  return data;
};

export function useGetUserQuery(id: string) {
  return useQuery(
    [USERS_QUERY_KEY, id],
    ({ signal }) => getUser(id, signal),
    {
      enabled: !!id,
      retry: 3,
    }
  );
}
