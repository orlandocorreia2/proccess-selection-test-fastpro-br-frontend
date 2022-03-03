import { ChangeEventHandler } from 'react';
import { ValidationError } from 'yup';

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
export const dump = (...args: any[]) => {
  if (args && args.length) {
    args.forEach(arg => {
      console.log(arg);
    });
  }
};

export const debounceEvent =
  (
    callback: () => void,
    wait = 500,
    timer: NodeJS.Timeout | undefined = undefined,
  ): ChangeEventHandler<HTMLInputElement> | undefined =>
  () => {
    if (timer) clearTimeout(timer);
    // eslint-disable-next-line no-param-reassign
    timer = setTimeout(() => callback(), wait);
  };

interface Errors {
  [key: string]: string;
}

export const getValidationErrors = (error: ValidationError): Errors => {
  const validationErrors: Errors = {};

  error.inner.forEach(validationError => {
    if (validationError.path) {
      validationErrors[validationError.path] = validationError.message;
    }
  });

  return validationErrors;
};
