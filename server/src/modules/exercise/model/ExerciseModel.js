const db = require("../../../database/connection");

exports.post = exercises => {
  return db.transaction((t) => {
    Promise.all(
      exercises.map((exercise) =>
        t
          .insert({ ...exercise.question, test_id: exercise.test_id })
          .table("question")
          .then(([question_id]) =>
            Promise.all(
              exercise.references.map((reference_id) =>
                t
                  .insert({ question_id, reference_id })
                  .table("reference_question"),
              ),
            ).then(() =>
              Promise.all(
                exercise.options.map((option) =>
                  t.insert({ ...option, question_id }).table("option"),
                ),
              ),
            ),
          ),
      ),
    )
      .then(t.commit)
      .catch(t.rollback);
  });
};

// TODO: convert all built queries to a raw database driven structure (in other words, remove knex)
exports.get = () =>
  db.raw(`
    SELECT
    JSON_OBJECT('id', t.id, 'year', t.year, 'stage', t.stage) AS test,
    JSON_OBJECT('id', q.id, 'text', q.text, 'subject', q.subject, 'topic', q.topic) AS question,
    CONCAT('[', GROUP_CONCAT(
    DISTINCT JSON_OBJECT('id', o.id, 'text', o.\`text\`, 'correct_answer', o.correct_answer)
    ), ']') as \`options\`, 
    CONCAT('[', GROUP_CONCAT(
    DISTINCT JSON_OBJECT('id', r.id, 'text', r.\`text\`, 'author', r.author, 'source', r.source, 'image_path', r.image_path)
    ), ']') as \`references\`
    FROM question q
    INNER JOIN test t
    ON t.id = q.test_id 
    INNER JOIN \`option\` o
    ON o.question_id = q.id
    INNER JOIN reference_question rq
    ON rq.question_id = q.id
    INNER JOIN reference r
    ON r.id = rq.reference_id
    GROUP BY q.id;
  `);

exports.delete = id =>
  Promise.all([
    db.delete().table('option').where({ question_id: id }),
    db.delete().table('reference_question').where({ question_id: id })
  ])
    .then(() => db.delete().table('question').where({ id }))
