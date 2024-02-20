import jwt from "jsonwebtoken";

const generateToken = (userId) => {
  //inside payload we can include "REGISTERED" claims only short version, such us "sub", "iss") AND our own custom claims (e.g. whatever:"whatever")
  const payload = {
    sub: userId,
  };

  // SecretOrPrivateKey is our own password needed to generate and later validate the token
  //hide that password as an .env variable!! ...and make it complicated
  const secretOrPrivateKey = "mySuperSecretPassword";

  //in singOptions we can include the "longer of private claims"
  const signOptions = {
    expiresIn: "2d",
  };

  const jsonwebtoken = jwt.sign(payload, secretOrPrivateKey, signOptions);

  return jsonwebtoken;
};

export { generateToken };
