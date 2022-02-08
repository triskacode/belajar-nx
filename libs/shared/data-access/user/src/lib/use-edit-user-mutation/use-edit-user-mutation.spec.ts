import { act, renderHook } from '@testing-library/react-hooks';
import useEditUserMutation from './use-edit-user-mutation';

describe('useEditUserMutation', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => useEditUserMutation());

    expect(result.current.count).toBe(0);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
});
