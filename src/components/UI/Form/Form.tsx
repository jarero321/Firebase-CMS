'use client';
import { TypeWithKey } from '@/models/TypeWithKey.model';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

export interface FormInterface {
  className?: string;
  children: React.ReactNode;
  // eslint-disable-next-line no-unused-vars
  onSubmit: (data: TypeWithKey<string>) => void;
}

const Form: React.FC<FormInterface> = ({ className, children, onSubmit }) => {
  const methods = useForm({ mode: 'onBlur' });
  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <form
        autoComplete="off"
        className={className}
        onSubmit={handleSubmit(onSubmit)}
      >
        {children}
      </form>
    </FormProvider>
  );
};

export default Form;
