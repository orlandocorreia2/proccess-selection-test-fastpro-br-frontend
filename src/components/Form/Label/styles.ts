import styled, { css } from 'styled-components';

interface ContainerProps {
  color?: string;
}

export const Container = styled.div<ContainerProps>`
  span {
    letter-spacing: 0px;
    color: var(--background_contrast);

    ${props =>
      props.color &&
      css`
        color: ${props.color};
      `}
  }
`;
