'use client';
import React, { useState } from 'react';
import s from './RegisterForm.module.css';
import { Form } from '@/components/UI/Form';
import { InputForm } from '@/components/UI/InputForm';
import { UploadImage } from '@/components/UI/UploadImage';
import { Button } from '@/components/UI';
import { uploadDocInStorage } from '@/api/firebase/uploadImage.api';
import { adapterPsycopath } from '@/adapters/psychopath/psycopath.adapter';
import { createNewCyber } from '@/api/firebase/uploadInfo.api';

const RegisterForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (data: any) => {
    setLoading(true);
    try {
      const image_url = await uploadDocInStorage(
        data.psycopath_photography,
        data.psycopath_name
      );
      const infoAdapted = adapterPsycopath(data, image_url);
      await createNewCyber(infoAdapted);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <main className={s.main}>
      <div className={s.mainContainer}>
        <div className={s.container}>
          <h1 className={s.title}> Ingresa los datos del cyberpsicopata </h1>
          <div className={s.formContainer}>
            <Form className={s.form} onSubmit={(data) => handleSubmit(data)}>
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
                  loading={loading}
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
