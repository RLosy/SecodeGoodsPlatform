const userService = require("../service/userService");

class registerController {
  async register(ctx, next) {
    const result = await userService.register(ctx.request.body.registerMsg);
    ctx.body = result;
  }
}

module.exports = new registerController();
