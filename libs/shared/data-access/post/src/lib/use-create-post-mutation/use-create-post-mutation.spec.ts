import { act, renderHook } from '@testing-library/react-hooks';
import useCreatePostMutation from './use-create-post-mutation';

describe('useCreatePostMutation', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => useCreatePostMutation());

    expect(result.current.count).toBe(0);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
});
