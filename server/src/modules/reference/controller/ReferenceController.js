const db = require('../../../database/connection');

exports.post = (req, res) => {
  const reference = req.body;

  db.insert(reference).table("reference")
    .then(([id]) =>
      res.status(200).json({ id, ...reference })
    )
    .catch((err) => console.log(err));
}

exports.get = (_, res) => {
  db.select('*').table('reference')
    .then((data) => {
      res.status(200).json({ data })
    })
    .catch((err) => console.log(err));
}

exports.getOneById = (req, res) => {
  const { id } = req.params;

  db.select('*').table('reference').where({ id })
    .then(([data]) => {
      res.status(200).json({ ...data })
    })
    .catch((err) => console.log(err));
}

exports.put = (req, res) => {
  const { text, author, source, image_path } = req.body;
  const { id } = req.params;

  db.update({ id, text, author, source, image_path }).table('reference').where({ id })
    .then(() => {
      res.status(200).json({ message: 'Referência atualizada com sucesso!' })
    })
    .catch((err) => console.log(err));
}

exports.delete = (req, res) => {
  const { id } = req.params;

  db.delete().table("reference").where({ id })
    .then(() => {
      res.status(204).json({ message: "Referência excluída com sucesso!" })
    })
    .catch((err) => console.log(err));
}
