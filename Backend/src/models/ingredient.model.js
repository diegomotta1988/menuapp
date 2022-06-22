const { Schema, model } = require('mongoose');

const IngredientSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  ingredientType: {
    type: Schema.Types.Object,
    ref: 'IngredientType',
    required: true,
  },
});

IngredientSchema.method('toJSON', function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

module.exports = model('Ingredient', IngredientSchema);
