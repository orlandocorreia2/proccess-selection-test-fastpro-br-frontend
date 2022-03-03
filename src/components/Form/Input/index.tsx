import React, {
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
  useCallback,
  FormEvent,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { FiAlertCircle } from 'react-icons/fi';
import { useField } from '@unform/core';
import { Container, Content, Error, Prefix } from './styles';
import { Label } from '../Label';
import { cep, cnpj, cpf, number, currency, phone } from './masks';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  type?: string;
  color?: string;
  icon?: React.ComponentType<IconBaseProps>;
  label?: string;
  labelColor?: string;
  mask?: 'cep' | 'cpf' | 'cnpj' | 'number' | 'currency' | 'phone';
  prefix?: string;
}

export const Input: React.FC<InputProps> = ({
  name,
  type,
  color,
  icon: Icon,
  label,
  labelColor,
  mask,
  prefix,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, defaultValue, error, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputRef.current?.value);
  }, [inputRef]);

  const handleInputKeyUp = useCallback(
    (event: FormEvent<HTMLInputElement>) => {
      event.preventDefault();
      const maskTypes = ['cep', 'cpf', 'cnpj', 'number', 'currency', 'phone'];

      if (mask && maskTypes.includes('number') && inputRef.current) {
        const fnMasks = {
          cep: () => {
            cep(event);
          },
          cpf: () => {
            cpf(event);
          },
          cnpj: () => {
            cnpj(event);
          },
          number: () => {
            number(event);
          },
          currency: () => {
            currency(event);
          },
          phone: () => {
            phone(event);
          },
        };

        fnMasks[mask]();
      }
    },
    [mask],
  );

  return (
    <Container>
      {label && <Label name={label} color={labelColor} />}
      <Content
        isErrored={!!error}
        isFocused={isFocused}
        isFilled={isFilled}
        color={color}
      >
        {Icon && <Icon />}
        {prefix && <Prefix>{prefix}</Prefix>}
        <input
          name={name}
          type={type || 'text'}
          defaultValue={defaultValue}
          ref={inputRef}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          onKeyUp={handleInputKeyUp}
          {...rest}
        />
        {error && (
          <Error title={error}>
            <FiAlertCircle color="#C52828" size={20} />
          </Error>
        )}
      </Content>
    </Container>
  );
};
