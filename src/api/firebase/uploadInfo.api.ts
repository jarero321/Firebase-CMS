import { addDoc, collection } from 'firebase/firestore';
import { db } from './config/firebase.config';
import { Psycopath } from '@/models/psycopath/psycopath.models';
import { toast } from 'react-toastify';

const createNewCyber = async (info: Psycopath) => {
  try {
    const cyberRef = collection(db, 'cyberpsicopataas');
    await addDoc(cyberRef, info);
  } catch (_error) {
    toast.error('Hubo un error al crear al cyberpsicopata intenta mas tarde');
  }
};

export { createNewCyber };
