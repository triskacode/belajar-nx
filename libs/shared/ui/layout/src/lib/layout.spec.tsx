import { render } from '@testing-library/react';

import SharedUiLayout from './layout';

describe('SharedUiLayout', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedUiLayout />);
    expect(baseElement).toBeTruthy();
  });
});
