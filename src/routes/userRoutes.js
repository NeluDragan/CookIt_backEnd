const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/updateRoleToAdmin", userController.updateRoleToAdmin);
router.post("/updateRoleToUser", userController.updateRoleToUser);
router.post("/createUser", userController.createUser);
router.post("/signIn", userController.signIn);

module.exports = router;
