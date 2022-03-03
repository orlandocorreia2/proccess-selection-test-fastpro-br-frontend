import { FormEvent } from 'react';

export const cep = (event: FormEvent<HTMLInputElement>): void => {
  event.currentTarget.maxLength = 9;
  event.currentTarget.value = event.currentTarget.value
    .replace(/\D/g, '')
    .replace(/^(\d{5})(\d)/, '$1-$2');
};

export const cpf = (event: FormEvent<HTMLInputElement>): void => {
  event.currentTarget.maxLength = 14;

  event.currentTarget.value = event.currentTarget.value
    .replace(/\D/g, '')
    .replace(/^(\d{3})(\d{3})(\d{3})(\d)/, '$1.$2.$3-$4');
};

export const cnpj = (event: FormEvent<HTMLInputElement>): void => {
  event.currentTarget.maxLength = 18;

  event.currentTarget.value = event.currentTarget.value
    .replace(/\D/g, '')
    .replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d)/, '$1.$2.$3/$4-$5');
};

export const number = (event: FormEvent<HTMLInputElement>): void => {
  event.currentTarget.value = event.currentTarget.value.replace(/\D/g, '');
};

export const currency = (event: FormEvent<HTMLInputElement>): void => {
  event.currentTarget.value = event.currentTarget.value
    .replace(/\D/g, '')
    .replace(/(\d)(\d{2})$/, '$1,$2')
    .replace(/(?=(\d{3})+(\D))\B/g, '.');
};

export const phone = (event: FormEvent<HTMLInputElement>): void => {
  event.currentTarget.maxLength = 14;
  event.currentTarget.value = event.currentTarget.value
    .replace(/\D/g, '')
    .replace(/^(\d{2})(\d)/, '($1) $2');
};
