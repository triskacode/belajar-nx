import { act, renderHook } from '@testing-library/react-hooks';
import useEditPostMutation from './use-edit-post-mutation';

describe('useEditPostMutation', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => useEditPostMutation());

    expect(result.current.count).toBe(0);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
});
