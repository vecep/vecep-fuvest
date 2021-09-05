const express = require('express');

const router = express.Router();
const QuestionController = require('../modules/question/controller/QuestionController');
const ReferenceController = require('../modules/reference/controller/ReferenceController');
const TestController = require('../modules/test/controller/TestController');

router.post('/api/reference', ReferenceController.post);
router.get('/api/references', ReferenceController.get);
router.get('/api/reference/:id', ReferenceController.getOneById);
router.put('/api/reference/:id', ReferenceController.put);
router.delete('/api/reference/:id', ReferenceController.delete);

router.post('/api/test', TestController.post);
router.get('/api/tests', TestController.get);
router.get('/api/test/:id', TestController.getOneById);
router.put('/api/test/:id', TestController.put);
router.delete('/api/test/:id', TestController.delete);

router.post('/api/question', QuestionController.post);
router.get('/api/questions', QuestionController.get);
router.get('/api/question/:id', QuestionController.getOneById);
router.put('/api/question/:id', QuestionController.put);
router.delete('/api/question/:id', QuestionController.delete);

module.exports = router;
