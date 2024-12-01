import { Firestore } from '@google-cloud/firestore';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();
const pathKey = path.resolve(process.env.FIRESTORE_KEY_PATH);

export async function predictHistories(req, res, next) {
  try {
    const db = new Firestore({
      projectId: process.env.GCLOUD_PROJECT_ID,
      keyFilename: pathKey,
    });
    const predictCollection = db.collection('predictions');
    const snapshot = await predictCollection.get();

    const result = snapshot.docs.map((doc) => ({
      id: doc.id,
      history: doc.data(),
    }));

    res.status(200).json({
      status: 'success',
      data: result,
    });
  } catch (error) {
    next(error);
  }
}
