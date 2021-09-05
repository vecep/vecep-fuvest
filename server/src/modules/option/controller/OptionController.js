const db = require('../../../database/connection');

exports.post = (req, res) => {
  const option = req.body;

  db.insert(option).table("option")
    .then(([id]) => {
      res.status(200).json({ id, ...option })
    })
    .catch((err) => console.log(err));
}

exports.get = (_, res) => {
  db.select('*').table('option')
    .then((data) => {
      res.status(200).json({ data })
    })
    .catch((err) => console.log(err));
}

exports.getOneById = (req, res) => {
  const { id } = req.params;

  db.select('*').table('option').where({ id })
    .then(([data]) => {
      res.status(200).json({ ...data })
    })
    .catch((err) => console.log(err));
}

exports.put = (req, res) => {
  const { text, correct_answer, question_id } = req.body;
  const { id } = req.params;

  db.update({ id, text, correct_answer, question_id }).table('option').where({ id })
    .then(() => {
      res.status(200).json({ message: 'Alternativa atualizada com sucesso!' })
    })
    .catch((err) => console.log(err));
}

exports.delete = (req, res) => {
  const { id } = req.params;

  db.delete().table("option").where({ id })
    .then(() => {
      res.status(204).json({ message: "Alternativa excluída com sucesso!" })
    })
    .catch((err) => console.log(err));
}
