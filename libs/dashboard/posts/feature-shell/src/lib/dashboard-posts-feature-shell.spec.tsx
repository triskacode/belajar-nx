import { render } from '@testing-library/react';

import DashboardPostsFeatureShell from './dashboard-posts-feature-shell';

describe('DashboardPostsFeatureShell', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DashboardPostsFeatureShell />);
    expect(baseElement).toBeTruthy();
  });
});
