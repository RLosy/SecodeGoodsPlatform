const Router = require("koa-router");
const {
  goodsUrlLists,
  getCategoryGoods,
  getSearchGoods,
} = require("../controller/mainGoods");

const mainGoodsRouter = new Router({ prefix: "/maingoods" });

mainGoodsRouter.get("/", goodsUrlLists);

mainGoodsRouter.get("/:category", getCategoryGoods);

mainGoodsRouter.get("/search/:searchValue", getSearchGoods);

module.exports = mainGoodsRouter;
 