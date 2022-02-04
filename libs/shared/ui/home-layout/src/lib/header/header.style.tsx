import styled from 'styled-components';

export const StyledHeader = styled.div`
  border-bottom: 1px solid rgb(0 0 0/0.1);
  & > .container {
    height: 10vh;
    max-width: 1024px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    margin: 0 auto;
    color: #334155;
    h1 {
      font-size: 24px;
      text-transform: uppercase;
      font-weight: bold;
      cursor: pointer;
    }
    ul {
      display: flex;
      list-style: none;
      li {
        margin-left: 1rem;
        letter-spacing: 0.5px;
        cursor: pointer;
      }
    }
  }
`;
