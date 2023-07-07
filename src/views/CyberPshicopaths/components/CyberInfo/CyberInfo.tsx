import React from 'react';
import styles from './CyberInfo.module.css';
import { Psycopath } from '@/models/psycopath/psycopath.models';
import Image from 'next/image';
import { Button } from '@/components/UI';

export type CyberInfoProps = {
  info?: Psycopath;
};

const CyberInfo: React.FC<CyberInfoProps> = ({ info }) => {
  return (
    <div className={styles.cyberinfo}>
      <div className={styles.image}>
        <Image src={info?.url_image ?? ''} layout="fill" alt="" />
      </div>
      <p className={styles.text}> Estado actual: {info?.status} </p>
      <Button variant="primary" text={info?.name} />
    </div>
  );
};

export default CyberInfo;
