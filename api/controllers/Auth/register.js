const db = require("../../models");
const User = db.Mongoose.model("usercollection", db.User, "usercollection");

const jwt = require("jsonwebtoken");
const authConfig = require("../../config/auth.json");

function generateToken(params = {}) {
  return jwt.sign(params, authConfig.secret, {
    expiresIn: 86400,
  });
}

exports.Register = async (req, res) => {
  try {
    const user = await User.create(req.body);

    return res.send({ user, token: generateToken({ id: user.id }) });
  } catch (e) {
    return res.status(400).send({ error: e });
  }
};
