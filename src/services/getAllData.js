import { Firestore } from '@google-cloud/firestore';

export async function getAllData() {
    const db = new Firestore();
    const predictCollection = db.collection('predictions');
    
    const allData = await predictCollection.get();
    return allData;
}
