const jwt = require("jsonwebtoken");
const userService = require("../service/userService");
const { SECRET_KEY } = require("../app/constants");

class loginController {
  async userLogin(ctx, next) {
    const result = await userService.login(ctx.request.body);
    // result为一个数组，账号密码正确第一个元素为用户基本信息，否则为空数组
    if (result.length) {
      ctx.user = result[0];
      await next();
    } else {
      ctx.body = {
        stataCode: 401,
      };
    }
  }

  async issueToken(ctx, next) {
    const { id, account } = ctx.user; // 解构用户信息
    const user = {
      id,
      account,
    }; // 保存
    const token = jwt.sign(user, SECRET_KEY, { // 颁发token
      expiresIn: 60 * 60 * 24 * 30, // 过期时间
    });
    ctx.body = token;
  }
}

module.exports = new loginController();
