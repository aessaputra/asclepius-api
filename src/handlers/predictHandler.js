import crypto from 'crypto';
import { predictClassification } from '../services/inferenceService.js';
import { storeData } from '../services/storeData.js';

export async function postPredictHandler(req, res, next) {
  try {
    const image = req.file ? req.file.buffer : req.body.image;

    if (!image) {
      throw new InputError('Image data is required');
    }

    const model = req.app.get('model');
    const { confidenceScore, label, suggestion } = await predictClassification(
      model,
      image,
    );

    const id = crypto.randomUUID();
    const createdAt = new Date().toISOString();
    const data = { id, result: label, suggestion, createdAt };

    await storeData(id, data);

    res.status(201).json({
      status: 'success',
      message: 'Model is predicted successfully',
      data,
    });
  } catch (error) {
    next(error);
  }
}
