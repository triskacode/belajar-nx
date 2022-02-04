import { render } from '@testing-library/react';

import HomeFeatureShell from './home-feature-shell';

describe('ChattingAppHomeFeature', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HomeFeatureShell />);
    expect(baseElement).toBeTruthy();
  });
});
