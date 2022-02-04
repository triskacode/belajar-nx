import { UserEntity } from '@belajar-nx/shared-data-types';
import { HttpAuthenticated } from '@belajar-nx/shared-utils-http';
import { config } from '@belajar-nx/shared/environments';
import { useQuery } from 'react-query';

const getUser = async (
  signal: AbortSignal | undefined
): Promise<UserEntity> => {
  const { data } = await HttpAuthenticated.get(
    `${config.api.SERVER_API_BASE_URL}/auth/user`,
    {
      signal,
    }
  );

  return data;
};

export function useAuthUserQuery() {
  return useQuery('auth.user', ({ signal }) => getUser(signal));
}

export default useAuthUserQuery;
