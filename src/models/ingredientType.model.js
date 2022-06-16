const { Schema, model } = require('mongoose');

const IngredientTypeSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

IngredientTypeSchema.method('toJSON', function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

module.exports = model('IngredientType', IngredientTypeSchema);
