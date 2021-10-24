import app from './app.js';

app.listen(process.env.PORT || 3001, () => {
	console.log('Hello VECEP!');
});

app.get('/', (_req, _res) => {
	console.log('Hello VECEP!');
});
