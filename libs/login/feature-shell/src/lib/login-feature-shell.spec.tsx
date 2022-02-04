import { render } from '@testing-library/react';

import LoginFeatureShell from './login-feature-shell';

describe('ChattingAppLoginFeature', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LoginFeatureShell />);
    expect(baseElement).toBeTruthy();
  });
});
