import { render } from '@testing-library/react';

import SharedUiHomeLayout from './shared-ui-home-layout';

describe('SharedUiHomeLayout', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedUiHomeLayout />);
    expect(baseElement).toBeTruthy();
  });
});
