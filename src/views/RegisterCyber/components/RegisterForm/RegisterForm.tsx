'use client';
import React from 'react';
import s from './RegisterForm.module.css';
import { Form } from '@/components/UI/Form';
import { InputForm } from '@/components/UI/InputForm';

export type RegisterFormProps = {};

const RegisterForm: React.FC<RegisterFormProps> = ({}) => {
  return (
    <div className={s.container}>
      <h1 className={s.title}> Ingresa los datos del cyberpsicopata </h1>
      <div>
        <Form onSubmit={() => null}>
          <InputForm name="psycopath_name" label="uwu" />
          <InputForm name="dompe" label="uwu" />
        </Form>
      </div>
    </div>
  );
};

export default RegisterForm;
