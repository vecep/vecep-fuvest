const model = require('../model/ReferenceModel');

exports.post = async reference => {
  try {
    await model.post(reference);
  } catch (err) {
    throw new Error(err.message);
  }
}

exports.get = async () => {
  try {
    return await model.get();
  } catch (err) {
    throw new Error(err.message);
  }
}

exports.getOneById = async id => {
  try {
    return await model.getOneById(id);
  } catch (err) {
    throw new Error(err.message);
  }
}

exports.put = async (id, data) => {
  try {
    await model.put(id, data);
  } catch (err) {
    throw new Error(err.message);
  }
}

exports.delete = async id => {
  try {
    await model.delete(id);
  } catch (err) {
    throw new Error(err.message);
  }
}
