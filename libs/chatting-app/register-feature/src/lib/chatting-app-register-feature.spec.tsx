import { render } from '@testing-library/react';

import ChattingAppRegisterFeature from './chatting-app-register-feature';

describe('ChattingAppRegisterFeature', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ChattingAppRegisterFeature />);
    expect(baseElement).toBeTruthy();
  });
});
