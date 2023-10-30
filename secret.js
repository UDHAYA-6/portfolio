const crypto = require("crypto");

const generateAuthSecret = () => {
  return crypto.randomBytes(32).toString("hex");
};

console.log(generateAuthSecret());
