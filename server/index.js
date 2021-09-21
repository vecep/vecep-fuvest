import express from 'express';
import cors from 'cors';
import router from './src/routes/routes.js';

const app = express();

app.use(express.static('public'));
app.use(express.json({ limit: '1050mb' }));
app.use(express.urlencoded({ limit: '1050mb', extended: true }));
app.use(cors());
app.use(router);

app.listen(3001, () => {
	console.log('Hello VECEP!');
});

app.get('/', (_req, _res) => {
	console.log('Hello VECEP!');
});
