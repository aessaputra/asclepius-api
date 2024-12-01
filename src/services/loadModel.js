import * as tf from '@tensorflow/tfjs-node';
import dotenv from 'dotenv';

dotenv.config();

export async function loadModel() {
  const modelUrl = process.env.MODEL_URL;
  if (!modelUrl) {
    throw new Error('Model URL is not defined in the environment variables.');
  }

  return tf.loadGraphModel(modelUrl);
}
