const Router = require("koa-router");
const { verifyToken } = require("../middleware/verifyToken");

const onlyVerifyLoginRouter = new Router({ prefix: "/authvrify" });

// 验证是否登录接口
onlyVerifyLoginRouter.get("/", verifyToken, (ctx, next) => {
  ctx.body = true;
});

module.exports = onlyVerifyLoginRouter;
