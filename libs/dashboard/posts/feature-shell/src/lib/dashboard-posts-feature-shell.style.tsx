import styled from 'styled-components';

export const StyledDashboardPostsFeatureShell = styled.div`
  flex: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > .container {
    width: 100%;
    height: 100%;
    background-color: #f9fafb;
    padding: 1rem;
    border-radius: 0.5rem;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    & > .header-card {
      display: flex;
      justify-content: space-between;
      align-items: center;
      & > h1 {
        font-size: 18px;
        margin: 0.5rem 0.25rem 1rem;
        color: #334155;
      }
      & > button {
        padding: 0.25rem 0.75rem;
        border: none;
        margin-left: 0.5rem;
        border-radius: 0.25rem;
        font-weight: bold;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        background-color: #bae6fd;
        color: #0c4a6e;
      }
      & > button:hover {
        background-color: #93c5fd;
      }
    }
    & > .table-wrapper {
      overflow-x: auto;
      & > table {
        width: 100%;
        min-width: 850px;
        border-collapse: collapse;
        & > thead {
          & > tr {
            background-color: #e2e8f0;
            border-bottom: 1px solid #cbd5e1;
            & > th {
              position: relative;
              padding: 0.75rem;
              font-weight: bold;
            }
            & > th::before {
              content: '';
              position: absolute;
              left: 0;
              top: 50%;
              width: 1px;
              height: 50%;
              transform: translateY(-50%);
              background-color: #94a3b8;
            }
            & > th:first-child::before {
              width: 0;
            }
          }
        }
        & tbody {
          & > tr {
            & > td {
              padding: 0.5rem 0.75rem;
              color: #334155;
              & > button {
                padding: 0.25rem 0.75rem;
                border: none;
                margin-left: 0.5rem;
                border-radius: 0.25rem;
                font-weight: bold;
                cursor: pointer;
                transition: all 0.2s ease-in-out;
              }
              & > button:first-child {
                margin-left: 0;
              }
              & > button:nth-child(1) {
                background-color: #bae6fd;
                color: #0c4a6e;
              }
              & > button:nth-child(1):hover {
                background-color: #93c5fd;
              }
              & > button:nth-child(2) {
                background-color: #a7f3d0;
                color: #064e3b;
              }
              & > button:nth-child(2):hover {
                background-color: #6ee7b7;
              }
              & > button:nth-child(3) {
                background-color: #fecdd3;
                color: #881337;
              }
              & > button:nth-child(3):hover {
                background-color: #fda4af;
              }
            }
          }

          & > tr:hover {
            background-color: #f1f5f9;
          }
        }
      }
    }
  }
`;
