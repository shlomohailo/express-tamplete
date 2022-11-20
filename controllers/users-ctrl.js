const users = require("../models/model-users");
const {
  validEmail,
  passwordValid,
  checkAgeOver,
} = require("../validation/valid");

const createNewUser = (req, res) => {
  if (
    validEmail(req.body.user.email) == true &&
    passwordValid(req.body.user.password, req.body.user.currentPassword) ==
      true &&
    checkAgeOver(req.body.user.age) == true
  ) {
    users.push(req.body.user);
    res.send("success");
  }
  res.send("not create");
};

module.exports = {
  createNewUser,
};
