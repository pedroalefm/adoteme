const db = require("../../models");
const User = db.Mongoose.model("usercollection", db.User, "usercollection");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authConfig = require("../../config/auth.json");

function generateToken(params = {}) {
  return jwt.sign(params, authConfig.secret, {});
}

exports.Login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    res.status(400).send({ error: "Usuário não encontrado!" });
  }
  if (!(await bcrypt.compare(password, user.password))) {
    return res.status(400).send({ error: "Senha incorreta, tente novamente!" });
  }

  user.password = undefined;

  res.send({
    user,
    token: generateToken({ id: user.id }),
  });
};
