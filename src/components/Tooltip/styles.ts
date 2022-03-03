import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  span {
    width: 160px;
    background: var(--red);
    padding: 8px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
    opacity: 0;
    transition: opacity 0.4s;
    color: #fff;
    visibility: hidden;

    position: absolute;
    bottom: calc(100% + 12px);
    left: 50%;
    transform: translateX(-50%);

    &::before {
      content: '';
      border-style: solid;
      border-color: var(--red) transparent;
      border-width: 6px 6px 0 6px;
      top: 100%;
      position: absolute;

      left: 50%;
      transform: translateX(-50%);
    }

    @media (max-width: 400px) {
      left: 79%;
      transform: translateX(-80%);

      &::before {
        left: 79%;
        transform: translateX(-80%);
      }
    }
  }

  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;
