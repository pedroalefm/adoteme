const jwt = require("jsonwebtoken");
const authConfig = require("../config/auth.json");

module.exports = (req, res, next) => {
  const authHeader = req.headers.authtorization;

  if (!authHeader) {
    return res.status(401).send({ error: "Token não encontrado" });
  }

  const parts = authHeader.split(" ");

  if (!parts.lenght === 2) {
    return res.status(401).send({ error: "token error" });
  }

  //destructing
  const [scheme, token] = parts;

  //   regex para saber se tem a palavre Bearer
  if (!/^Bearer$/i.test(scheme)) {
    return res
      .status(401)
      .send({ error: "token mal formatado", scheme: scheme, auth: authHeader });
  }

  jwt.verify(token, authConfig.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({ error: "Token inválido" });
    }

    req.userId = decoded.id;

    return next();
  });
};
