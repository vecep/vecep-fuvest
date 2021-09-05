const express = require('express');

const router = express.Router();
// const QuestionController = require('../modules/question/controller/QuestionController');
const ReferenceController = require('../modules/reference/controller/ReferenceController');
const TestController = require('../modules/test/controller/TestController');

// router.get('/api/getAllQuestions', QuestionController.getAllQuestions);
// router.post('/api/createQuestion', QuestionController.createQuestion);

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

module.exports = router;
