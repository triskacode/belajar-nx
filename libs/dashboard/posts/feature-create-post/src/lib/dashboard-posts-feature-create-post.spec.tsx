import { render } from '@testing-library/react';

import DashboardPostsFeatureCreatePost from './dashboard-posts-feature-create-post';

describe('DashboardPostsFeatureCreatePost', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DashboardPostsFeatureCreatePost />);
    expect(baseElement).toBeTruthy();
  });
});
