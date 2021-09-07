const service = require('../service/ExerciseService');

exports.post = async (req, res, next) => {
  const exercises = req.body;

  try {
    await service.post(exercises);
    res.status(200).send();
    next();
  } catch (err) {
    res.status(500) && next(err);
  }
}

exports.get = async (_, res, next) => {
  try {
    const data = await service.get();
    res.status(200).json(data);
    next();
  } catch (err) {
    res.status(500) && next(err);
  }
}

exports.delete = async (req, res, next) => {
  const { id } = req.params;

  try {
    await service.delete(id);
    res.status(204).send();
    next();
  } catch (err) {
    res.status(500) && next(err);
  }
}
