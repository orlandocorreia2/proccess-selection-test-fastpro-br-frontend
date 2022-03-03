import styled from 'styled-components';

import { darken } from 'polished';

interface ContainerProps {
  color?: string;
  backgroundColor?: string;
  style?: object;
}

export const Container = styled.div<ContainerProps>`
  button {
    background-image: linear-gradient(
      90deg,
      ${props => props.backgroundColor || '#ffdb38'},
      ${props => darken(0.1, props.backgroundColor || '#ffdb38')}
    );
    padding: 10px;
    width: 100%;
    color: ${props => props.color || '#343a40'};
    font-weight: bolder;
    border: 0;
    transition: color, 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }

    > svg {
      margin-right: 0.3vw;
    }

    @media (max-width: 765px) {
      flex: 1;
    }
  }
`;

export const StyledButton = styled.button``;
