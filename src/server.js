import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { loadModel } from './services/loadModel.js';
import router from './routes/index.js';
import { errorMiddleware } from './middlewares/errorMiddleware.js';

dotenv.config();

(async () => {
  const app = express();
  const port = process.env.PORT || 8000;

  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  const model = await loadModel();
  app.set('model', model);

  app.use('/', router);

  app.use(errorMiddleware);

  app.listen(port, () => {
    console.log(`Server is running at http://0.0.0.0:${port}`);
  });
})();
