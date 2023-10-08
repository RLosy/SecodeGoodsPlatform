const path = require("path");
const Koa = require("koa");
const staticServer = require("koa-static"); // 导入配置模块
const bodyParser = require("koa-bodyparser");
const cors = require("koa2-cors");
const useRoutes = require("../router");

const app = new Koa();

app.use(cors())

app.useRoutes = useRoutes;

// 解析前端携带body里的json数据
app.use(bodyParser());

app.useRoutes();

const staticPath = "../../upload";
app.use(staticServer(path.join(__dirname, staticPath)));

module.exports = app;

