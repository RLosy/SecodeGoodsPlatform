const Router = require("koa-router");
const { verifyToken } = require("../middleware/verifyToken");
const { checkLogin } = require("../controller/isLogin");

const verifyLoginRouter = new Router({ prefix: "/islogin" });


// 返回用户相关信息
verifyLoginRouter.get("/", verifyToken, checkLogin);

module.exports = verifyLoginRouter;
