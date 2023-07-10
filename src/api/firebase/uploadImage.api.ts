import {
  ref,
  uploadBytes,
  UploadResult,
  getDownloadURL,
  StorageReference,
} from 'firebase/storage';
import { storage } from './config/firebase.config';
import { toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';

const uploadDocInStorage = async (
  file: Blob,
  psychoName: string
): Promise<string> => {
  try {
    const uuid = uuidv4();
    const fileName = `${psychoName}${uuid}_${file.name}`;
    const storageRef = ref(storage, `images/${fileName}`);
    const snapshot: UploadResult = await uploadBytes(storageRef, file);
    const image_url = await getImageUrl(snapshot.ref);
    return image_url;
  } catch (error) {
    console.error(error);
    toast.error('Hubo un error al subir la imagen del cyberpsicopata');
    return '';
  }
};

const getImageUrl = async (ref: StorageReference): Promise<string> => {
  try {
    const imageUrl = await getDownloadURL(ref);
    return imageUrl;
  } catch (error) {
    console.error(error);
    return '';
  }
};

export { getImageUrl, uploadDocInStorage };
