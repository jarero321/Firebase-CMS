import React from 'react';
import styles from './CyberInfoDetail.module.css';
import { Psycopath } from '@/models/psycopath/psycopath.models';
import Image from 'next/image';
import { Button } from '@/components/UI';
import Link from 'next/link';

export type CyberInfoDetailProps = {
  info?: Psycopath;
};

const CyberInfoDetail: React.FC<CyberInfoDetailProps> = ({ info }) => {
  return (
    <div className={styles.cyberinfo}>
      <div className={styles.image}>
        <Image src={info?.url_image ?? ''} layout="fill" alt="" />
      </div>
      <h2 className={styles.title}>{info?.name}</h2>
      <p className={styles.text}> Rango de agresividad: {info?.range} </p>
      <p className={styles.text}> Estado actual: {info?.status} </p>
      <Link href="/cyberpsicopatas">
        <Button text="Regresar" variant="secondary" />
      </Link>
    </div>
  );
};

export default CyberInfoDetail;
