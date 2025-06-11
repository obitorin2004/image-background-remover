import express from 'express';
import upload from '../middleware/multer.js';
// import auth from '../middleware/auth.js';
import { removeBgImage } from '../controllers/imageController.js';

const imageRouter = express.Router();

// Define the /remove-bg route
imageRouter.post('/remove-bg', upload.single('image'), removeBgImage);

export default imageRouter;