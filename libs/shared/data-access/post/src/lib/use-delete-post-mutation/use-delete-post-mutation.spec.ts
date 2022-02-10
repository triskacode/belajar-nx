import { act, renderHook } from '@testing-library/react-hooks';
import useDeletePostMutation from './use-delete-post-mutation';

describe('useDeletePostMutation', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => useDeletePostMutation());

    expect(result.current.count).toBe(0);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
});
