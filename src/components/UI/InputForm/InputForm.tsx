'use client';
import React, { type ReactNode } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import {
  type FilledTextFieldProps,
  type OutlinedTextFieldProps,
  TextField,
} from '@mui/material';
import { inputValidation } from './input.validations';
import { PrimaryTextField } from './InputForm.variants';

export type InputFormProps = {
  name: string;
  label: string;
  required?: boolean;
  variant?: 'outlined';
  type?: string;
  InputProps?: any;
};

const rulesTypes: Record<string, string> = {
  first_name: 'text',
  last_name: 'text',
  password: 'password',
  email: 'email',
  confirm_password: 'confirm_password',
  new_password: 'password',
};

const InputForm: React.FC<InputFormProps> = ({
  name,
  label,
  type = 'text',
  required = false,
  InputProps,
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const typeRules = rulesTypes[name] || 'text';

  const textFieldProps: FilledTextFieldProps | OutlinedTextFieldProps = {
    autoComplete: 'off',
    error: !!errors[name],
    fullWidth: true,
    helperText: errors[name]?.message as ReactNode,
    InputProps: { ...InputProps },
    label,
    type,
    variant: 'outlined',
  };

  return (
    <Controller
      control={control}
      name={name}
      rules={inputValidation(typeRules, required)}
      render={({ field }) => (
        <PrimaryTextField fullWidth {...field} {...textFieldProps} />
      )}
    />
  );
};

export default InputForm;
