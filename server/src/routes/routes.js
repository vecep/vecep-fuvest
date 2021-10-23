import express from 'express';
import verifySignUp from '../middleware/verifySignUp.js';
import * as TestController from '../modules/test/controller/TestController.js';
import * as ReferenceController from '../modules/reference/controller/ReferenceController.js';
import * as QuestionController from '../modules/question/controller/QuestionController.js';
import * as OptionController from '../modules/option/controller/OptionController.js';
import * as ExerciseController from '../modules/exercise/controller/ExerciseController.js';
import * as ImageController from '../modules/image/controller/ImageController.js';
import * as CloudinaryController from '../modules/image/controller/CloudinaryController.js';
import * as AuthenticationController from '../modules/authentication/controller/AuthenticationController.js';
import * as UserController from '../modules/user/controller/UserController.js';
import authJwt from '../middleware/authJwt.js';

const router = express.Router();

router.use((_req, res, next) => {
	res.set('Access-Control-Allow-Headers', 'x-access-token, Origin, Content-Type, Accept');
	next();
});

router.post('/api/test', [authJwt.verifyToken, authJwt.isAdmin], TestController.post);
router.get('/api/tests', TestController.get);
router.get('/api/test/:id', TestController.getOneById);
router.put('/api/test/:id', [authJwt.verifyToken, authJwt.isAdmin], TestController.put);
router.delete('/api/test/:id', [authJwt.verifyToken, authJwt.isAdmin], TestController.destroy);

router.post('/api/reference', [authJwt.verifyToken, authJwt.isAdmin], ReferenceController.post);
router.get('/api/references', ReferenceController.get);
router.get('/api/reference/:id', ReferenceController.getOneById);
router.put('/api/reference/:id', [authJwt.verifyToken, authJwt.isAdmin], ReferenceController.put);
router.delete(
	'/api/reference/:id',
	[authJwt.verifyToken, authJwt.isAdmin],
	ReferenceController.destroy
);

router.post('/api/question', [authJwt.verifyToken, authJwt.isAdmin], QuestionController.post);
router.get('/api/questions', QuestionController.get);
router.get('/api/question/:id', QuestionController.getOneById);
router.put('/api/question/:id', [authJwt.verifyToken, authJwt.isAdmin], QuestionController.put);
router.delete(
	'/api/question/:id',
	[authJwt.verifyToken, authJwt.isAdmin],
	QuestionController.destroy
);

router.post('/api/option', [authJwt.verifyToken, authJwt.isAdmin], OptionController.post);
router.get('/api/options', OptionController.get);
router.get('/api/option/:id', OptionController.getOneById);
router.put('/api/option/:id', [authJwt.verifyToken, authJwt.isAdmin], OptionController.put);
router.delete('/api/option/:id', [authJwt.verifyToken, authJwt.isAdmin], OptionController.destroy);

router.post('/api/exercise', [authJwt.verifyToken, authJwt.isAdmin], ExerciseController.post);
router.get('/api/exercises', ExerciseController.get);
router.delete(
	'/api/exercise/:id',
	[authJwt.verifyToken, authJwt.isAdmin],
	ExerciseController.destroy
);

router.post('/api/image', [authJwt.verifyToken, authJwt.isAdmin], ImageController.post);
router.get('/api/images', ImageController.get);
router.get('/api/image/:id', ImageController.getOneById);
router.put('/api/image/:id', [authJwt.verifyToken, authJwt.isAdmin], ImageController.put);
router.delete('/api/image/:id', [authJwt.verifyToken, authJwt.isAdmin], ImageController.destroy);

router.post(
	'/api/image/webhook',
	[authJwt.verifyToken, authJwt.isAdmin],
	CloudinaryController.webhook
);

router.post(
	'/api/auth/signup',
	[verifySignUp.checkDuplicateUsernameAndEmail],
	AuthenticationController.signup
);
router.post('/api/auth/signin', AuthenticationController.signin);

router.post('/api/user/answer', [authJwt.verifyToken], UserController.answer);
router.get('/api/user/answers', [authJwt.verifyToken], UserController.getAnswers);

export default router;
