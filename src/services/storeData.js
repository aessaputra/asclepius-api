import { Firestore } from '@google-cloud/firestore';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();
const pathKey = path.resolve(process.env.FIRESTORE_KEY_PATH);

export async function storeData(id, data) {
  try {
    const db = new Firestore({
      projectId: 'leukovision-project',
      keyFilename: pathKey,
    });

    const predictCollection = db.collection('predictions');
    await predictCollection.doc(id).set(data);
  } catch (error) {
    console.error(error);
    throw new Error('Failed to store data in Firestore');
  }
}
