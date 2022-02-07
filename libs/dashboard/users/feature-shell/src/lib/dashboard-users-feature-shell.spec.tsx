import { render } from '@testing-library/react';

import DashboardUsersFeatureShell from './dashboard-users-feature-shell';

describe('DashboardUsersFeatureShell', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DashboardUsersFeatureShell />);
    expect(baseElement).toBeTruthy();
  });
});
