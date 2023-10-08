const { STATIC_AVATAR_PATH } = require("../app/constants");
const {
  changeUserAvatar,
  changeUserNickName,
  changeUserPassword,
} = require("../service/userService");

class userUpdateController {
  // 修改头像
  async updateAvatar(ctx, next) {
    const { id } = ctx.userToken;
    const { filename } = ctx.req.file;
    const url = `${STATIC_AVATAR_PATH}${filename}`;

    const result = await changeUserAvatar(id, url);
    ctx.body = result;
  }

  // 修改密码
  async upDatePassword(ctx, next) {
    const { id } = ctx.userToken;
    const { password } = ctx.request.body;
    const result = await changeUserPassword(id, password);
    ctx.body = result;
  }

  // 修改昵称
  async upDateNickName(ctx, next) {
    const { id } = ctx.userToken;
    const { nickeName } = ctx.request.body;

    const result = await changeUserNickName(id, nickeName);
    ctx.body = result;
  }
}

module.exports = new userUpdateController();
