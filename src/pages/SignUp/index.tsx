import React, { useCallback, useRef, useState } from 'react';
import { FiFileText, FiMail, FiPhone, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Input } from '../../components/Form/Input';
import { Button } from '../../components/Form/Button';
import { getValidationErrors } from '../../utils';
import { useToast } from '../../hooks/toast';
import { api } from '../../services/api';

import {
  Container,
  Content,
  AnimationContainer,
  Background,
  ButtonText,
  ButtonLogonContainer,
  ButtonLogonLink,
} from './styles';

interface SignUpFormData {
  name: string;
  phone: string;
  email: string;
  password: string;
  password_confirmation: string;
}

export const SignUp: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const formRef = useRef<FormHandles>(null);

  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: SignUpFormData) => {
      setLoading(true);

      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          phone: Yup.string().required('Telefone obrigatório'),
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().min(
            8,
            'A senha deve conter no mínimo 8 dígitos',
          ),
          password_confirmation: Yup.string()
            .required('Confirmação da senha obrigatório')
            .oneOf(
              [Yup.ref('password'), null],
              'Os campos senha e confirmar senha devem ser iguais',
            ),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const { name, phone, email, password } = data;

        await api.post('users', {
          name,
          phone,
          email,
          password,
        });

        window.location.href = '/login';
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);
          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Erro na criação do usuário',
          description: 'Ocorreu um erro ao criar o usuário, tente mais tarde.',
        });
      } finally {
        setLoading(false);
      }
    },
    [addToast],
  );

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <Form
            initialData={{
              name: '',
              phone: '',
              email: '',
              password: '',
            }}
            onSubmit={handleSubmit}
            ref={formRef}
          >
            <Input
              name="name"
              type="text"
              placeholder="Digite"
              icon={FiFileText}
              label="Nome"
            />

            <Input
              name="phone"
              type="text"
              placeholder="Digite"
              icon={FiPhone}
              label="Telefone"
              mask="phone"
            />

            <Input
              name="email"
              type="email"
              placeholder="Digite"
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

            <Input
              name="password_confirmation"
              type="password"
              placeholder="Confirme"
              icon={FiLock}
              label="Digite"
            />

            <Button loading={loading} type="submit">
              <ButtonText>ENTRAR</ButtonText>
            </Button>

            <ButtonLogonContainer>
              <ButtonLogonLink href="/login">Voltar para logon</ButtonLogonLink>
            </ButtonLogonContainer>
          </Form>
        </AnimationContainer>
      </Content>

      <Background />
    </Container>
  );
};
