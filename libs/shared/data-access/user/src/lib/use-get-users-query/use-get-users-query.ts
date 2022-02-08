import { UserEntity } from '@belajar-nx/shared-data-types';
import { getToken } from '@belajar-nx/shared-utils-cookie';
import { Http } from '@belajar-nx/shared-utils-http';
import { config } from '@belajar-nx/shared/environments';
import { useQuery } from 'react-query';

const getUsers = async (
  signal?: AbortSignal | undefined
): Promise<UserEntity[]> => {
  const { data } = await Http.get(`${config.api.SERVER_API_BASE_URL}/users`, {
    signal,
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });

  return data;
};

export const USERS_QUERY_KEY = 'users';

export function useGetUsersQuery() {
  return useQuery(USERS_QUERY_KEY, ({ signal }) => getUsers(signal), {
    retry: 3,
  });
}
