const Ingredient = require("../models/ingredientModel");

exports.getIngredients = async (req, res) => {
  try {
    const ingredients = await Ingredient.find();
    res.json(ingredients);
  } catch (error) {
    console.error("Error fetching ingredients:", error);
    res.status(500).json({ error: "Error fetching ingredients" });
  }
};

exports.getIngredientsById = async (req, res) => {
  try {
    const { id } = req.params;
    const ingredient = await Ingredient.findById(id);

    if (!ingredient) {
      return res.status(404).json({ error: "Ingredient not found" });
    }

    res.json(ingredient);
  } catch (error) {
    console.error("Error fetching ingredient by ID:", error);
    res.status(500).json({ error: "Error fetching ingredient by ID" });
  }
};

exports.addIngredient = async (req, res) => {
  try {
    const { name, unit, diet, photo, type } = req.body;
    console.log(req.body);
    if (!diet) {
      return res
        .status(400)
        .json({ error: "Name, unit, and diet are required." });
    }

    const newIngredient = new Ingredient({
      name,
      unit,
      diet,
      photo,
      type,
    });

    const savedIngredient = await newIngredient.save();

    res.status(201).json({
      message: "Ingredient added successfully",
      ingredient: savedIngredient,
    });
  } catch (error) {
    console.error("Error adding ingredient:", error);
    res.status(500).json({ error: "Error adding ingredient" });
  }
};

exports.updateIngredient = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;
  console.log(updates);

  try {
    const updatedIngredient = await Ingredient.findByIdAndUpdate(id, updates, {
      new: true,
    });

    if (!updatedIngredient) {
      return res.status(404).json({ error: "Ingredient not found." });
    }

    res.json(updatedIngredient);
  } catch (error) {
    console.error("Error updating ingredient:", error);
    res.status(500).json({ error: "Error updating ingredient" });
  }
};
