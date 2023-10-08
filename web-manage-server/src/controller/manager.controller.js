const { loginService } = require("../service/manager.service");

class ManagerController {
  // 管理员登录
  async managerLogin(ctx, next) {
    const { account, password } = ctx.request.body;
    const result = await loginService(account, password);
    if (result.length > 0) {
      ctx.body = {
        stateCode: 200,
        message: "登录成功",
      };
    } else {
      ctx.body = {
        stateCode: 400,
        message: "登录失败",
      };
    }
  }
}

module.exports = new ManagerController();
