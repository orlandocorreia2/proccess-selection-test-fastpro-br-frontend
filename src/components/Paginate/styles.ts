import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: -1rem;
  width: 100%;
  z-index: 999999999;

  ul {
    list-style: none;

    li {
      padding: 0.3rem 1rem;
      border-top: 1px solid var(--gray-dark);
      border-bottom: 1px solid var(--gray-dark);
      border-left: 1px solid var(--gray-dark);

      &:last-of-type {
        border-right: 1px solid var(--gray-dark);
      }
    }
  }

  .pagination {
    display: flex;
  }

  .active {
    background: var(--gray-dark);
    color: #fff;
  }
`;
