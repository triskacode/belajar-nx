import { act, renderHook } from '@testing-library/react-hooks';
import useGetUsersQuery from './use-get-users-query';

describe('useGetUsersQuery', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => useGetUsersQuery());

    expect(result.current.count).toBe(0);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
});
