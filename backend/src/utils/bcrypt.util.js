const bcrypt = require("bcrypt");

const bcryptPassword = async (payload) => {
  return await bcrypt.hashSync(payload, bcrypt.genSaltSync(8), null);
};

const bcryptCompare = async (newPassword, oldPassword) => {
  return await bcrypt.compare(newPassword, oldPassword);
};

module.exports = { bcryptPassword, bcryptCompare };
