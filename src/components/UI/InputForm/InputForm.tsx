'use client';
import React, { type ReactNode } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import {
  type FilledTextFieldProps,
  type OutlinedTextFieldProps,
  TextField,
} from '@mui/material';
import { inputValidation } from './input.validations';

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
  variant = 'filled',
  InputProps,
}) => {
  const {
    control,
    formState: { errors },
    watch,
  } = useFormContext();
  const password = watch('new_password');

  const typeRules = rulesTypes[name] || 'text';

  const textFieldProps: FilledTextFieldProps | OutlinedTextFieldProps = {
    autoComplete: 'off',
    error: !!errors[name],
    fullWidth: true,
    helperText: errors[name]?.message as ReactNode,
    InputProps: { ...InputProps, disableUnderline: true },
    label,
    type,
    variant: 'outlined',
  };

  return (
    <Controller
      control={control}
      name={name}
      defaultValue=""
      rules={inputValidation(typeRules, required)}
      render={({ field }) => <TextField {...field} {...textFieldProps} />}
    />
  );
};

export default InputForm;
