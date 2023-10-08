const Router = require("koa-router");
const { uploadGoods } = require("../middleware/handlerUploadGoods");
const { verifyToken } = require("../middleware/verifyToken");
const { dealPicture } = require("../controller/uploadGoods");

const uploadGoodsRouter = new Router({ prefix: "/upload" });

uploadGoodsRouter.post("/goods", verifyToken, uploadGoods, dealPicture);


module.exports = uploadGoodsRouter;
