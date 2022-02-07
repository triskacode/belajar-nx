import { act, renderHook } from '@testing-library/react-hooks';
import useGetUserQuery from './use-get-user-query';

describe('useGetUserQuery', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => useGetUserQuery());

    expect(result.current.count).toBe(0);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
});
