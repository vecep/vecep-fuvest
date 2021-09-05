const express = require('express');

const router = express.Router();
// const QuestionController = require('../modules/question/controller/QuestionController');
const ReferenceController = require('../modules/reference/controller/ReferenceController')

// router.get('/api/getAllQuestions', QuestionController.getAllQuestions);
// router.post('/api/createQuestion', QuestionController.createQuestion);

router.post('/api/reference', ReferenceController.post);
router.get('/api/references', ReferenceController.get);
router.get('/api/reference/:id', ReferenceController.getOneById);
router.put('/api/reference/:id', ReferenceController.put);
router.delete('/api/reference/:id', ReferenceController.delete);

module.exports = router;
