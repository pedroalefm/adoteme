const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/adoteme", {
  useNewUrlParser: true,
});

const bcrypt = require("bcryptjs");

let User = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  imgProfile: String,
});

User.pre("save", async function (next) {
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;

  next();
});

module.exports = {
  Mongoose: mongoose,
  User: User,
};
