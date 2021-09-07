import express from 'express';
const router = express.Router();
import * as TestController from '../modules/test/controller/TestController.js';
// const ReferenceController = require('../modules/reference/controller/ReferenceController');
// const QuestionController = require('../modules/question/controller/QuestionController');
// const OptionController = require('../modules/option/controller/OptionController');
// const ExerciseController = require('../modules/exercise/controller/ExerciseController');

router.post('/api/test', TestController.post);
router.get('/api/tests', TestController.get);
router.get('/api/test/:id', TestController.getOneById);
router.put('/api/test/:id', TestController.put);
router.delete('/api/test/:id', TestController.destroy);

// router.post('/api/reference', ReferenceController.post);
// router.get('/api/references', ReferenceController.get);
// router.get('/api/reference/:id', ReferenceController.getOneById);
// router.put('/api/reference/:id', ReferenceController.put);
// router.delete('/api/reference/:id', ReferenceController.delete);

// router.post('/api/question', QuestionController.post);
// router.get('/api/questions', QuestionController.get);
// router.get('/api/question/:id', QuestionController.getOneById);
// router.put('/api/question/:id', QuestionController.put);
// router.delete('/api/question/:id', QuestionController.delete);

// router.post('/api/option', OptionController.post);
// router.get('/api/options', OptionController.get);
// router.get('/api/option/:id', OptionController.getOneById);
// router.put('/api/option/:id', OptionController.put);
// router.delete('/api/option/:id', OptionController.delete);

// router.post('/api/exercise', ExerciseController.post);
// router.get('/api/exercises', ExerciseController.get);
// router.delete('/api/exercise/:id', ExerciseController.delete);

export default router;
