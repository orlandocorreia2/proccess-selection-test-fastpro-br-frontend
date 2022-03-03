import styled, { keyframes } from 'styled-components';
import signInBackgroundImg from '../../assets/images/sign-in-background-brand-logo.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  place-content: center;
  width: 100%;
  max-width: 650px;
`;

export const Background = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: url(${signInBackgroundImg}) no-repeat center;
  background-size: cover;

  img:last-of-type {
    margin-top: 40vh;
    position: absolute;
  }

  img:first-of-type {
    width: 65%;
  }
`;

const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(+50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  animation: ${appearFromRight} 1s;

  img {
    width: 60%;
    margin-left: 5%;

    @media (max-width: 400px) {
      width: 90%;
      margin-left: 10%;
    }
  }
  form {
    margin: 30px 0;
    width: 60%;

    @media (max-width: 400px) {
      width: 90%;
    }
  }
`;

export const ButtonText = styled.strong``;

export const ButtonLogonContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: right;
  margin-top: 8px;
`;

export const ButtonLogonLink = styled.a`
  color: var(--background_contrast);
`;
