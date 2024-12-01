import express from 'express';
import multer from 'multer';
import { postPredictHandler } from '../handlers/predictHandler.js';
import { predictHistories } from '../handlers/historyHandler.js';

const router = express.Router();
const upload = multer({
  limits: { fileSize: 1000 * 1000 },
  storage: multer.memoryStorage(),
});

router.get('/', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Welcome to the Cancer Prediction API!',
  });
});

router.post('/predict', upload.single('image'), postPredictHandler);
router.get('/predict/histories', predictHistories);

export default router;
