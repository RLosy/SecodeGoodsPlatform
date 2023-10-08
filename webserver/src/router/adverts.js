const Router = require("koa-router");
const { saveUploadAdvert } = require("../middleware/saveAdverts");
const { saveAdverts, getAllAdverts } = require("../controller/adverts");

const advertsRouter = new Router({ prefix: "/adverts" });

advertsRouter.post("/upload", saveUploadAdvert, saveAdverts);

advertsRouter.get("/", getAllAdverts);

module.exports = advertsRouter; 
     