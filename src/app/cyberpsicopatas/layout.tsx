import Image from 'next/image';
import s from './page.module.css';
import Link from 'next/link';
export default function PsychopathsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <nav className={s.layout}>
        <Link href="/">
          <Image className={s.image} src="/logo.webp" alt="" width={400} height={150} />
        </Link>
      </nav>
      <main className={s.main}>{children}</main>
    </section>
  );
}
