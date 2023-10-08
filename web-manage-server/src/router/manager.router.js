const Router = require("koa-router");
const { managerLogin } = require("../controller/manager.controller");

const managerRouter = new Router({ prefix: "/manager" });

managerRouter.post("/login", managerLogin);

module.exports = managerRouter;
