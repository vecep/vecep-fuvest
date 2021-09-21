import express from 'express';
import * as TestController from '../modules/test/controller/TestController.js';
import * as ReferenceController from '../modules/reference/controller/ReferenceController.js';
import * as QuestionController from '../modules/question/controller/QuestionController.js';
import * as OptionController from '../modules/option/controller/OptionController.js';
import * as ExerciseController from '../modules/exercise/controller/ExerciseController.js';
import * as ImageController from '../modules/image/controller/ImageController.js';
import * as CloudinaryController from '../modules/image/controller/CloudinaryController.js';

const router = express.Router();

router.post('/api/test', TestController.post);
router.get('/api/tests', TestController.get);
router.get('/api/test/:id', TestController.getOneById);
router.put('/api/test/:id', TestController.put);
router.delete('/api/test/:id', TestController.destroy);

router.post('/api/reference', ReferenceController.post);
router.get('/api/references', ReferenceController.get);
router.get('/api/reference/:id', ReferenceController.getOneById);
router.put('/api/reference/:id', ReferenceController.put);
router.delete('/api/reference/:id', ReferenceController.destroy);

router.post('/api/question', QuestionController.post);
router.get('/api/questions', QuestionController.get);
router.get('/api/question/:id', QuestionController.getOneById);
router.put('/api/question/:id', QuestionController.put);
router.delete('/api/question/:id', QuestionController.destroy);

router.post('/api/option', OptionController.post);
router.get('/api/options', OptionController.get);
router.get('/api/option/:id', OptionController.getOneById);
router.put('/api/option/:id', OptionController.put);
router.delete('/api/option/:id', OptionController.destroy);

router.post('/api/exercise', ExerciseController.post);
router.get('/api/exercises', ExerciseController.get);
router.delete('/api/exercise/:id', ExerciseController.destroy);

router.post('/api/image', ImageController.post);
router.get('/api/images', ImageController.get);
router.get('/api/image/:id', ImageController.getOneById);
router.put('/api/image/:id', ImageController.put);
router.delete('/api/image/:id', ImageController.destroy);

router.post('/api/image/webhook', CloudinaryController.webhook);

export default router;
