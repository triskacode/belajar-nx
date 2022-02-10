import styled from 'styled-components';

export const StyledDashboardPostsFeatureDetailPost = styled.div`
  flex: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > .container {
    color: #64748b;
    border: 1px solid rgb(0 0 0/0.1);
    max-width: 450px;
    width: 100%;
    padding: 2rem;
    border-radius: 10px;
    h1 {
      margin-bottom: 1rem;
      text-align: center;
    }
    form {
      label {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin-bottom: 1rem;
        span {
          font-size: 14px;
        }
        input,
        textarea,
        select {
          padding: 0.5rem 0.75rem;
          border-radius: 5px;
          border: none;
          background-color: #e2e8f0;
          font-size: 16px;
          margin-top: 0.25rem;
          &:focus {
            outline: none;
          }
        }
        textarea {
          resize: vertical;
        }
      }
    }
    button {
      padding: 0.5rem 0.75rem;
      width: 100%;
      font-size: 16px;
      border-radius: 5px;
      background-color: #94a3b8;
      border: none;
      color: #fff;
      cursor: pointer;
      font-weight: bold;
      margin-top: 0.5rem;
    }
  }
`;
