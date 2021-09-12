import express, { json } from 'express';
import cors from 'cors';
import router from './src/routes/routes.js';

const app = express();

app.use(cors());
app.use(json());
app.use(router);

app.listen(3001, () => {
	console.log('Hello VECEP!');
});

app.get('/', (_req, _res) => {
	console.log('Hello VECEP!');
});
