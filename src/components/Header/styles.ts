import styled from 'styled-components';
import { FiLogOut } from 'react-icons/fi';
import logo from '../../assets/images/logo_fastprobr.png';

export const Container = styled.div`
  height: 76px;
  width: 100%;
  background: var(--background_contrast);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.div`
  width: 165px;
  height: 50px;
  background: url(${logo}) no-repeat center;
  background-size: cover;
  margin-right: 16px;
`;

export const AuthUserName = styled.div`
  color: var(--background);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogoutButton = styled.div`
  margin-left: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 9999999;
  width: 30px;
  height: 30px;
`;

export const LogoutIcon = styled(FiLogOut)`
  font-size: 22px;
  color: var(--background);
`;
