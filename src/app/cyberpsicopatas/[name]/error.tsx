'use client'; // Error components must be Client Components

import { Button } from '@/components/UI';
import { useEffect } from 'react';
import s from './error.module.css';
import Link from 'next/link';
export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className={s.container}>
      <div className={s.main}>
        <h2 className={s.title} >
          Parece ser que no tenemos a un cyberpsicopata registrado con ese
          nombre
        </h2>
        <Link href="/registrar-cyberpsicopata">
          <Button variant="primary" text="Registrar cyberpsicopata" />
        </Link>
      </div>
    </div>
  );
}
