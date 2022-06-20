import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { UserService } from "./index";
import { UnauthorizedException } from "../exceptions";

class AuthService {
  async login (email: string, password: string) {
    const userService = new UserService();
    const secret = "140";

    const user = await userService.getUserByEmail(email);

    if (!user) {
      throw new UnauthorizedException();
    };

    const passwordMatches = await bcrypt.compare(password, user.password);

    if (!passwordMatches) {
      throw new UnauthorizedException();
    }

    const token = jwt.sign({
      sub: user.id,
      iat: Date.now(),
      email: user.email
    }, secret);
    return {
      token
    };
  };
};

export default AuthService;
