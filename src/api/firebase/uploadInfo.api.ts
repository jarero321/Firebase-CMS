import { addDoc, collection } from 'firebase/firestore';
import { db } from './config/firebase.config';
import { Psycopath } from '@/models/psycopath/psycopath.models';

const createNewCyber = async (info: Psycopath) => {
  try {
    const cyberRef = collection(db, 'cyberpsicopataas');
    await addDoc(cyberRef, info);
  } catch (error) {
    console.error(error);
  }
};

export { createNewCyber };
