const {
  returnAllUsers,
  toRemoveUser,
  returnUserDatas,
  removeProduct,
  returnTalks,
  toDelete,
  removeAdvert,
} = require("../service/user.service");

class userController {
  // 获取所有用户
  async getAllUsers(ctx, next) {
    const result = await returnAllUsers();
    ctx.body = result;
  }

  // 删除用户
  async removeUser(ctx, next) {
    const { userId } = ctx.request.params;
    const result = await toRemoveUser(userId);

    ctx.body = {
      data: result,
      stateCode: 203,
    };
  }

  // 删除商品
  async removeUserProduct(ctx, next) {
    const { proId } = ctx.request.params;
    const result = await removeProduct(proId);
    ctx.body = {
      stateCode: 200,
      data: result,
    };
  }

  // 获取用户信息
  async getUerData(ctx, next) {
    const { condition, seekValue } = ctx.request.params;
    let seekField = "";
    switch (condition) {
      case "1":
        seekField = "id";
        break;
      case "2":
        seekField = "account";
        break;
      case "3":
        seekField = "telNumber";
        break;
      default:
        break;
    }

    const result = await returnUserDatas(seekField, seekValue);

    ctx.body = {
      ...result,
    };
  }

  // 获取所有聊天信息
  async getAllTalk(ctx, next) {
    const result = await returnTalks();
    ctx.body = result;
  }

  async deleteTalk(ctx, next) {
    const { id } = ctx.request.params;
    const result = await toDelete(id);

    ctx.body = {
      stateCode: 200,
      data: result,
    };
  }

  async deleteAdvert(ctx, next) {
    const { id } = ctx.request.params;
    const result = await removeAdvert(id);
    ctx.body = {
      stateCode: 200,
      data: result, 
    };
  }
}

module.exports = new userController();
