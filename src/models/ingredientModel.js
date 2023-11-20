const mongoose = require("mongoose");

const ingredientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  unit: {
    type: String,
    enum: ["ml", "g", "piece"],
    required: true,
  },
  diet: {
    type: [String],
    enum: [
      "vegan",
      "meatless",
      "vegetarian",
      "gluten-free",
      "sugar-free",
      "alcohol-free",
    ],
    required: false,
  },
  type: {
    type: String,
    enum: [
      "fruit",
      "vegetable",
      "grain",
      "protein",
      "dairy",
      "herb",
      "spice",
      "sweetener",
      "sauce",
      "other",
    ],
    required: false,
  },
  photo: {
    type: String,
    required: false,
  },
  nutritionalInfo: {
    calories: {
      type: Number,
      required: false,
    },
    fat: {
      type: Number,
      required: false,
    },
    carbs: {
      type: Number,
      required: false,
    },
    sodium: {
      type: Number,
      required: false,
    },
    fibre: {
      type: Number,
      required: false,
    },
    vitaminA: {
      type: Number,
      required: false,
    },
    vitaminC: {
      type: Number,
      required: false,
    },
    calcium: {
      type: Number,
      required: false,
    },
    iron: {
      type: Number,
      required: false,
    },
    sugars: {
      type: Number,
      required: false,
    },
    protein: {
      type: Number,
      required: false,
    },
  },
});

const Ingredient = mongoose.model("Ingredient", ingredientSchema);

module.exports = Ingredient;
