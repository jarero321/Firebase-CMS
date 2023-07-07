import { getPsycopaths } from '@/api/firebase/getInfo.api';
import s from './page.module.css';
import { CyberInfo } from '@/views/CyberPshicopaths/components/CyberInfo';
import Link from 'next/link';
async function CyberPhysicotic() {
  const cyberInfo = await getPsycopaths();
  return (
    <main className={s.container}>
      {cyberInfo?.map((item) => (
        <Link
          href={`/cyberpsicopatas/${item.name}`}
          style={{ textDecoration: 'none', color: 'white' }}
        >
          <CyberInfo info={item} />
        </Link>
      ))}
    </main>
  );
}

export default CyberPhysicotic;
