import { ExtractJwt, Strategy as JwtStrategy } from "passport-jwt";
import userModel from "../models/userModel.js";

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: "some really complicated password here",
};

const jwtStrategy = new JwtStrategy(jwtOptions, async function (
  jwt_payload,
  done
) {
  try {
    const user = await userModel.findOne({ _id: jwt_payload.sub });
    if (user) {
      console.log("token valid, user info inserted in request");
      return done(null, user);
    }
    if (!user) {
      console.log("token invalid");
      return done(null, false);
    }
  } catch (err) {
    console.log("error");
    return done(err, false);
  }
  //   userModel.findOne({ _id: jwt_payload.sub }, function (err, user) {
  //     if (err) {
  //       return done(err, false);
  //     }
  //     if (user) {
  //       return done(null, user);
  //     } else {
  //       return done(null, false);
  //       // or you could create a new account
  //     }
  //   });
});

const passportConfig = (passport) => {
  passport.use(jwtStrategy);
};

export default passportConfig;
