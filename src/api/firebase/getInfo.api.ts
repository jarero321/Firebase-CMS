import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from './config/firebase.config';
import { Psycopath } from '@/models/psycopath/psycopath.models';

const getPsycopaths = async (): Promise<Psycopath[]> => {
  const psychopathsRef = collection(db, 'cyberpsicopataas');
  const querySnapShot = await getDocs(psychopathsRef);
  const psycopathsColection = querySnapShot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return psycopathsColection as unknown as Psycopath[];
};

const getPsycopathDetail = async (name: string): Promise<Psycopath[]> => {
  const psychopathsRef = collection(db, 'cyberpsicopataas');
  const querySnapShot = query(psychopathsRef, where('name', '==', name));
  const queryInfo = await getDocs(querySnapShot);
  const psycopathsColection = queryInfo.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return psycopathsColection as unknown as Psycopath[];
};

export { getPsycopaths, getPsycopathDetail };
