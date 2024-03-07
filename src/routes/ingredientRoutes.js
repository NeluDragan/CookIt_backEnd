const express = require("express");
const router = express.Router();
const IngredientController = require("../controllers/ingredientController");

router.get("/ingredient", IngredientController.getIngredients);
router.post("/addIngredient", IngredientController.addIngredient);
router.get("/getIngredientById/:id", IngredientController.getIngredientsById);
router.post("/editIngredient/:id", IngredientController.updateIngredient);
router.get(
  "/getIngredientByName/:name",
  IngredientController.getIngredientsByName
);
router.get("/getIngredientsName", IngredientController.getIngredientsName);

module.exports = router;
