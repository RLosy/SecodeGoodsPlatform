const Router = require("koa-router");
const { userLogin, issueToken } = require("../controller/userLogin");

const loginRouter = new Router({ prefix: "/login" });

loginRouter.post("/", userLogin, issueToken);

module.exports = loginRouter;
