import React from 'react';
import { useTransition } from 'react-spring';

import { Container } from './styles';

import { ToastMessage } from '../../hooks/toast';
import { Toaster } from './Toaster';

interface ToastProps {
  messages: ToastMessage[];
}

export const Toast: React.FC<ToastProps> = ({ messages }) => {
  const messagesWithTransition = useTransition(
    messages,
    message => message.id,
    {
      from: { right: '-120%', opacity: 0 },
      enter: { right: '-6%', opacity: 1 },
      leave: { right: '-120%', opacity: 0 },
    },
  );

  return (
    <Container>
      {messagesWithTransition.map(({ item, key, props }) => (
        <Toaster key={key} style={props} message={item} />
      ))}
    </Container>
  );
};
