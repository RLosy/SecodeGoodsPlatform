const { returnuUerMsg } = require("../service/userService");

class isloginController {
  async checkLogin(ctx, next) {
    const { id } = ctx.userToken;
    const results = await returnuUerMsg(id);
    ctx.body = results[0]
  }
}
 
module.exports = new isloginController();
