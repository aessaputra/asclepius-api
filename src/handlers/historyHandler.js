import { getAllData } from '../services/getAllData.js';

export async function predictHistories(req, res, next) {
  try {
    const allData = await getAllData();

    const formatAllData = allData.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id,
        history: {
          result: data.result,
          createdAt: data.createdAt,
          suggestion: data.suggestion,
          id: doc.id
        }
      };
    });

    res.status(200).json({
      status: 'success',
      data: formatAllData
    });
  } catch (error) {
    console.error('Error fetching data:', error);
    next(error);
  }
}