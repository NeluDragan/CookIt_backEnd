const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/updateRoleToAdmin", userController.updateRoleToAdmin);
router.post("/updateRoleToUser", userController.updateRoleToUser);
router.post("/createUser", userController.createUser);
router.post("/getUsers", userController.getUsers);
router.post("/signIn", userController.signIn);
router.post("/updateUser", userController.updateUser);
router.get("/getFavoriteRecipes", userController.getFavoriteRecipes);
router.post("/handleFavoriteRecipes", userController.handleFavoriteRecipe);
router.get("/getUserByToken", userController.getUserByToken);

module.exports = router;
