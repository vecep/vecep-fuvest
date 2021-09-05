const db = require('../../../database/connection');

exports.post = (req, res) => {
  const test = req.body;

  db.insert(test).table("test")
    .then(([id]) => {
      res.status(200).json({ id, ...test })
    })
    .catch((err) => console.log(err));
}

exports.get = (_, res) => {
  db.select('*').table('test')
    .then((data) => {
      res.status(200).json({ data })
    })
    .catch((err) => console.log(err));
}

exports.getOneById = (req, res) => {
  const { id } = req.params;

  db.select('*').table('test').where({ id })
    .then(([data]) => {
      res.status(200).json({ ...data })
    })
    .catch((err) => console.log(err));
}

exports.put = (req, res) => {
  const { year, stage } = req.body;
  const { id } = req.params;

  db.update({ id, year, stage }).table('test').where({ id })
    .then(() => {
      res.status(200).json({ message: 'Prova atualizada com sucesso!' })
    })
    .catch((err) => console.log(err));
}

exports.delete = (req, res) => {
  const { id } = req.params;

  db.delete().table("test").where({ id })
    .then(() => {
      res.status(204).json({ message: "Prova excluída com sucesso!" })
    })
    .catch((err) => console.log(err));
}
