import React, { ButtonHTMLAttributes } from 'react';

import { Container, StyledButton } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  color?: string;
  backgroundColor?: string;
  style?: object;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  loading,
  color,
  backgroundColor,
  style,
  ...rest
}) => {
  return (
    <Container color={color} backgroundColor={backgroundColor} style={style}>
      <StyledButton disabled={!!loading} {...rest}>
        {loading ? 'Carregando...' : children}
      </StyledButton>
    </Container>
  );
};
