require("dotenv").config();
const jwt = require("jsonwebtoken");

const secretOrPrivateKey = process.env["JWT_SECRET_" + process.env.RUN_MODE];
const jwtSignOptions = {
  algorithm: process.env["JWT_ALGORITHM_" + process.env.RUN_MODE],
  expiresIn: process.env["JWT_TOKEN_LIFE_" + process.env.RUN_MODE],
  issuer: process.env["JWT_ISSUER_" + process.env.RUN_MODE],
  audience: process.env["JWT_AUDIENCE_" + process.env.RUN_MODE],
  subject: process.env["JWT_SUBJECT_" + process.env.RUN_MODE],
};

const generateToken = async (payload) => {
  const token = jwt.sign(payload, secretOrPrivateKey, jwtSignOptions);
  return token;
};

const verifyJsonWebToken = async (token) => {
  return jwt.verify(token, secretOrPrivateKey);
};

module.exports = { generateToken, verifyJsonWebToken };
