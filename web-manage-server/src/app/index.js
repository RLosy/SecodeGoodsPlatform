const Koa = require("koa");
const bodyparser = require("koa-bodyparser");
const cors = require('koa2-cors');   // 解决跨域  
const useRoutes = require("../router/index");

const app = new Koa();

app.use(cors());

app.useRoutes = useRoutes;

app.use(bodyparser());

app.useRoutes();

module.exports = app;
