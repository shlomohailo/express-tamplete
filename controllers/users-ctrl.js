const users = require("../models/model-users");
const {
  validEmail,
  passwordValid,
  checkAgeOver,
} = require("../validation/valid");

const createNewUser = (req, res) => {
  if (
    validEmail(req.body.user.email) &&
    passwordValid(req.body.user.password, req.body.user.currentPassword)
    &&
    checkAgeOver(req.body.user.userDate)
  ) {
    users.push({
      ...req.body.user,
      id: users.length + 1,
      token: Math.floor(Math.random() * 10000),
    });
    res.send({ message: "success", email: users[users.length - 1].email, token: users[users.length - 1].token });
  }
  res.send("not create");
};

module.exports = {
  createNewUser,
};
