import { act, renderHook } from '@testing-library/react-hooks';
import useGetPostsQuery from './use-get-posts-query';

describe('useGetPostsQuery', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => useGetPostsQuery());

    expect(result.current.count).toBe(0);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
});
