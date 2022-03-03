import React, { useCallback, useRef, useState } from 'react';
import { FiMail, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Input } from '../../components/Form/Input';
import { Button } from '../../components/Form/Button';
import { useAuth } from '../../hooks/auth';
import { getValidationErrors } from '../../utils';
import { useToast } from '../../hooks/toast';

import {
  Container,
  Content,
  AnimationContainer,
  Background,
  ButtonText,
  Logo,
  ButtonRegisterContainer,
  ButtonRegisterLink,
} from './styles';

interface SignInFormData {
  email: string;
  password: string;
}

export const SignIn: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();
  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      setLoading(true);

      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().min(
            8,
            'A senha deve conter no mínimo 8 dígitos',
          ),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn({
          email: data.email,
          password: data.password,
        });
      } catch (error) {
        setLoading(false);

        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);
          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Erro na autenticação',
          description: 'Ocorreu um erro ao fazer login, cheque as credenciais.',
        });
      }
    },
    [signIn, addToast],
  );

  return (
    <Container>
      <Background />

      <Content>
        <AnimationContainer>
          <Logo data-tip={process.env.REACT_APP_NAME} />

          <Form
            initialData={{
              email: '',
              password: '',
            }}
            onSubmit={handleSubmit}
            ref={formRef}
          >
            <Input
              name="email"
              type="email"
              placeholder="Digite seu e-mail"
              icon={FiMail}
              label="E-mail"
            />

            <Input
              name="password"
              type="password"
              placeholder="Digite sua senha"
              icon={FiLock}
              label="Senha"
            />

            <Button loading={loading} type="submit">
              <ButtonText>ENTRAR</ButtonText>
            </Button>

            <ButtonRegisterContainer>
              <ButtonRegisterLink href="/sign-up">
                Cadastre-se
              </ButtonRegisterLink>
            </ButtonRegisterContainer>
          </Form>
        </AnimationContainer>
      </Content>
    </Container>
  );
};
