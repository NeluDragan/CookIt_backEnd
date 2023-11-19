require("dotenv").config();
const express = require("express");
const database = require("./config/database");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes");
const recipeRoutes = require("./routes/recipeRoutes");
const ingredientRoutes = require("./routes/ingredientRoutes");
const cors = require("cors");
const port = 3001;
const app = express();

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.use("/", userRoutes);
app.use("/", recipeRoutes);
app.use("/", ingredientRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
