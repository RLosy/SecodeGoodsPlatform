const Router = require("koa-router");
const { verifyToken } = require("../middleware/verifyToken");
const { uploadGoods } = require("../middleware/handlerUploadGoods");

const testRouter = new Router({ prefix: "/usermsg" });

testRouter.get("/", verifyToken, (ctx, next) => {
  console.log(ctx.userToken);
  ctx.body = ctx.userToken;
});

testRouter.post("/goods", uploadGoods, (ctx, next) => {
  console.log(ctx.req.files);
  console.log(ctx.req.body);
  ctx.body = "hasdhasd";
});

module.exports = testRouter;
