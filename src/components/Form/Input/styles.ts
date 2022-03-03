import styled, { css } from 'styled-components';

import { Tooltip } from '../../Tooltip';

export const Container = styled.div`
  & + div {
    margin-top: 16px;
  }
`;

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
  color?: string;
}

export const Content = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  border: 0;
  box-shadow: 0px 2px 6px #00000029;
  width: 100%;
  padding: 0 16px;
  color: #6d6d6d;

  ${props =>
    props.isErrored &&
    css`
      border: 2px solid var(--red);
      color: var(--red);
    `}

  ${props =>
    props.isFocused &&
    css`
      border: 2px solid var(--green);
      color: var(--green);
    `}

  ${props =>
    props.isFilled &&
    css`
      color: var(--green);
    `}

  input {
    background: transparent;
    padding: 16px;
    border: 0;
    width: 100%;
    color: ${props => (props.color ? props.color : '#444')};

    &::placeholder {
      color: #6d6d6d;
    }

    svg {
      margin-right: 16px;
    }

    @media (max-width: 400px) {
      width: 90%;
    }
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;

  svg {
    margin: 0;
  }

  span {
    background: var(--red);

    &::before {
      border-color: var(--red) transparent;
    }
  }
`;

export const Prefix = styled.span`
  color: grey;
  margin-top: -3px;
`;
