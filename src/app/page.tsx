import Image from 'next/image';
import s from './page.module.css';
import CustomButton from '@/components/UI/CustomButton/CustomButton';
import Link from 'next/link';
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
        <Link href="/cyberpsicopatas" className={s.link}>
          <CustomButton text="Ver Lista de Cyberpsicopatas" variant="primary" />
        </Link>
        <Link href="/registrar-cyberpsicopata" className={s.link}>
          <CustomButton
            text="Registrar nuevo Cyberpsicopata"
            variant="secondary"
          />
        </Link>
      </div>
    </main>
  );
}
