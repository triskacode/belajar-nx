import { render } from '@testing-library/react';

import DashboardPostsFeatureDetailPost from './dashboard-posts-feature-detail-post';

describe('DashboardPostsFeatureDetailPost', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DashboardPostsFeatureDetailPost />);
    expect(baseElement).toBeTruthy();
  });
});
