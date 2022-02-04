import React from 'react';
import { StyledMain } from './main.style';

export interface MainProps {
  children: React.ReactNode;
}

export function Main({ children }: MainProps) {
  return (
    <StyledMain>
      <div className="container">{children}</div>
    </StyledMain>
  );
}

export default Main;
