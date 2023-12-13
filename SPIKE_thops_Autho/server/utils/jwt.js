import jwt from "jsonwebtoken";

const issueToken = (userID) => {
  const signOptions = {
    expiresIn: "2 days",
    issuer: "CAB",
  };
  const payload = {
    sub: userID,
  };

  const secretOrPrivateKey = "some really complicated password here"; //create an .env variable and use it here

  const token = jwt.sign(payload, secretOrPrivateKey, signOptions);

  return token;
};

export { issueToken };
