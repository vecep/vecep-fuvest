import * as model from '../model/OptionModel.js';

export const post = async option => {
  try {
    await model.post(option);
  } catch (err) {
    throw new Error(err.message);
  }
}

export const get = async () => {
  try {
    return await model.get();
  } catch (err) {
    throw new Error(err.message);
  }
}

export const getOneById = async id => {
  try {
    return await model.getOneById(id);
  } catch (err) {
    throw new Error(err.message);
  }
}

export const put = async (id, data) => {
  try {
    await model.put(id, data);
  } catch (err) {
    throw new Error(err.message);
  }
}

export const destroy = async id => {
  try {
    await model.destroy(id);
  } catch (err) {
    throw new Error(err.message);
  }
}
