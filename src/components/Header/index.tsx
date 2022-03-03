import React, { useCallback } from 'react';
import { useAuth } from '../../hooks/auth';

import {
  Container,
  AuthUserName,
  LogoutButton,
  LogoutIcon,
  Left,
  Right,
  Logo,
} from './styles';

export const Header: React.FC = () => {
  const { user, signOut } = useAuth();

  const handleSignOut = useCallback(() => {
    signOut();
  }, [signOut]);

  const handleClick = useCallback(() => {
    window.open('https://fastprobr.com/', '_blank');
  }, []);

  return (
    <Container>
      <Left onClick={handleClick}>
        <Logo />
      </Left>

      <Right>
        <AuthUserName>{user.name}</AuthUserName>
        <LogoutButton onClick={handleSignOut}>
          <LogoutIcon />
        </LogoutButton>
      </Right>
    </Container>
  );
};
