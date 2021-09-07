const model = require('../model/ExerciseModel');

exports.post = async exercises => {
  try {
    await model.post(exercises);
  } catch (err) {
    throw new Error(err.message);
  }
}

exports.get = async () => {
  try {
    const [data] = await model.get();

    const parsedData = data.map(d => {
      return ({
        ...d,
        options: JSON.parse(d.options),
        references: JSON.parse(d.references)
      })
    })

    return parsedData;
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
