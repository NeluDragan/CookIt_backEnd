const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  ingredients: [
    {
      id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Ingredient",
        required: false,
      },
      quantity: {
        type: Number,
        required: false,
      },
    },
  ],
  preparationTime: {
    type: Number,
    required: true,
  },
  instructions: {
    type: [String],
    required: true,
  },
  type: {
    type: String,
    enum: [
      "Lunch",
      "Breakfast",
      "Salad",
      "Dinner",
      "Dessert",
      "Drinks",
      "Other",
    ],
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: false,
  },
  image: {
    type: String,
    required: false,
  },
});

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
