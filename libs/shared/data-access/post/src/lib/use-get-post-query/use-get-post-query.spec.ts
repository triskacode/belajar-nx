import { act, renderHook } from '@testing-library/react-hooks';
import useGetPostQuery from './use-get-post-query';

describe('useGetPostQuery', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => useGetPostQuery());

    expect(result.current.count).toBe(0);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
});
