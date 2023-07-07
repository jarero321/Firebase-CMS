'use client';
import React from 'react';
import s from './RegisterForm.module.css';
import { Form } from '@/components/UI/Form';
import { InputForm } from '@/components/UI/InputForm';
import { UploadImage } from '@/components/UI/UploadImage';
import { Button } from '@/components/UI';

export type RegisterFormProps = {};

const RegisterForm: React.FC<RegisterFormProps> = ({}) => {
  return (
    <main className={s.main}>
      <div className={s.mainContainer}>
        <div className={s.container}>
          <h1 className={s.title}> Ingresa los datos del cyberpsicopata </h1>
          <div className={s.formContainer}>
            <Form className={s.form} onSubmit={() => null}>
              <InputForm
                required
                name="psycopath_name"
                label="Nombre del cyberpsicopata"
              />
              <InputForm
                required
                name="psycopath_range"
                label="Rango del cyberpsicopata"
              />
              <InputForm
                name="psycopath_status"
                required
                label="Estado actual del cyberpsicopata"
              />
              <UploadImage name="psycopath_photography" />
              <div>
                <Button
                  type="submit"
                  variant="primary"
                  text="Registrar Cyberpsicopata"
                />
              </div>
            </Form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default RegisterForm;
