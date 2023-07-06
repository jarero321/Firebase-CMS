import Image from 'next/image';
import s from './page.module.css';
import CustomButton from '@/components/UI/CustomButton/CustomButton';
export default function Home() {
  return (
    <main className={s.container}>
      <div>
        <Image
          src="/logo.webp"
          alt="cyberpunk"
          width={500}
          layout="responsive"
          height={150}
        />
      </div>
      <div className={s.buttonContainer}>
        <CustomButton text="Ver Lista de Cyberpsicopatas" variant="primary" />
        <CustomButton
          text="Registrar nuevo Cyberpsicopata"
          variant="secondary"
        />
      </div>
    </main>
  );
}
