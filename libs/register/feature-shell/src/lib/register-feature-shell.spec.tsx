import { render } from '@testing-library/react';

import RegisterFeatureShell from './register-feature-shell';

describe('ChattingAppRegisterFeature', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RegisterFeatureShell />);
    expect(baseElement).toBeTruthy();
  });
});
