import React from 'react';
import { Header } from '../../Header';

import { Container } from './styles';

export const Default: React.FC = ({ children }) => {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  );
};
