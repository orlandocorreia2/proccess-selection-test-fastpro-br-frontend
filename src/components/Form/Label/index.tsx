import React from 'react';

import { Container } from './styles';

interface LabelProps {
  name: string;
  color?: string;
}

export const Label: React.FC<LabelProps> = ({ name, color }) => {
  return (
    <Container color={color}>
      <span>{name}</span>
    </Container>
  );
};
