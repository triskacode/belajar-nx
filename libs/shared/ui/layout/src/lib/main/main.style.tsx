import styled from 'styled-components';

export const StyledMain = styled.div`
  & > .container {
    min-height: calc(90vh - 1px);
    max-width: 1024px;
    padding: 1rem 1rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }
`;
