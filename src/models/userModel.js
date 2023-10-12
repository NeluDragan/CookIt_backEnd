const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: true,
    },
    image: {
      type: Date,
      required: false,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["USER", "ADMIN"],
      default: "USER",
    },
  },
  { collection: "User" }
);

userSchema.pre("save", async function (next) {
  const user = this;
  console.log("Just before saving before hashing", user.password);
  if (!user.isModified("password")) {
    return next();
  }
  user.password = await bcrypt.hash(user.password, 8);
  console.log("Just before saving after hashing", user.password);
  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
