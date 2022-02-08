import { act, renderHook } from '@testing-library/react-hooks';
import useDeleteUserMutation from './use-delete-user-mutation';

describe('useDeleteUserMutation', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => useDeleteUserMutation());

    expect(result.current.count).toBe(0);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
});
