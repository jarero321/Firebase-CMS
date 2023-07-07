import { getPsycopathDetail } from '@/api/firebase/getInfo.api';
import { CyberInfo } from '@/views/CyberPshicopaths/components/CyberInfo';
import s from './page.module.css';

async function PsycopathDetail({ params }: { params: { name: string } }) {
  const psycoDetail = await getPsycopathDetail(params.name);
  console.log(psycoDetail);
  return (
    <main className={s.main}>
      <div className={s.container}>
        {psycoDetail.map((item) => (
          <CyberInfo key={item.name + item.url_image} info={item} />
        ))}
      </div>
    </main>
  );
}

export default PsycopathDetail;
