const service = require('../service/OptionService');

exports.post = async (req, res, next) => {
  const option = req.body;

  try {
    await service.post(option);
    res.status(200).send();
    next();
  } catch (err) {
    res.status(500) && next(err);
  }
}

exports.get = async (_, res, next) => {
  try {
    const data = await service.get();
    res.status(200).json(data)
    next();
  } catch (err) {
    res.status(500) && next(err);
  }
}

exports.getOneById = async (req, res, next) => {
  const { id } = req.params;

  try {
    const data = await service.getOneById(id);
    res.status(200).json(data)
    next();
  } catch (err) {
    res.status(500) && next(err);
  }
}

exports.put = async (req, res, next) => {
  const data = req.body;
  const { id } = req.params;

  try {
    await service.put(id, data);
    res.status(200).send();
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
