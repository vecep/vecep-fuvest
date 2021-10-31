const references_questions = [
	{
		question_id: 1,
		reference_id: 1
	},
	{
		question_id: 3,
		reference_id: 2
	},
	{
		question_id: 4,
		reference_id: 3
	},
	{
		question_id: 5,
		reference_id: 4
	},
	{
		question_id: 6,
		reference_id: 5
	},
	{
		question_id: 7,
		reference_id: 6
	},
	{
		question_id: 9,
		reference_id: 7
	},
	{
		question_id: 10,
		reference_id: 8
	},
	{
		question_id: 11,
		reference_id: 9
	}
];

module.exports = references_questions.map((rq) => Object.values(rq));
