const db = require('../../../database/connection');

exports.post = (req, res) => {
  const question = req.body;

  db.insert(question).table("question")
    .then(([id]) => {
      res.status(200).json({ id, ...question })
    })
    .catch((err) => console.log(err));
}

exports.get = (_, res) => {
  db.select('*').table('question')
    .then((data) => {
      res.status(200).json({ data })
    })
    .catch((err) => console.log(err));
}

exports.getOneById = (req, res) => {
  const { id } = req.params;

  db.select('*').table('question').where({ id })
    .then(([data]) => {
      res.status(200).json({ data })
    })
    .catch((err) => console.log(err));
}

exports.put = (req, res) => {
  const { text, subject, topic, test_id } = req.body;
  const { id } = req.params;

  db.update({ id, text, subject, topic, test_id }).table('question').where({ id })
    .then(() => {
      res.status(200).json({ message: 'Questão atualizada com sucesso!' })
    })
    .catch((err) => console.log(err));
}

exports.delete = (req, res) => {
  const { id } = req.params;

  db.delete().table("question").where({ id })
    .then(() => {
      res.status(204).json({ message: "Questão excluída com sucesso!" })
    })
    .catch((err) => console.log(err));
}
