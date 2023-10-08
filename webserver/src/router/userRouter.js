const Router = require("koa-router");
const {
  getPublishGoods,
  addShopCar,
  productIsExist,
  getShopCarGoods,
  deleteShopCar,
  storeUserMessage,
  getTalkMessages,
  getTalkUsers,
} = require("../controller/userController");

const userRouter = new Router({ prefix: "/user" });

userRouter.get("/:id", getPublishGoods);

// 检查需要加入购物车的商品是否存在
userRouter.get("/shopcar/:userid/:productsid", productIsExist);

userRouter.post("/addshopcar", addShopCar);

userRouter.get("/shopcar/:userid", getShopCarGoods);

userRouter.delete("/deleshopcar/:goodsid", deleteShopCar);

userRouter.post("/talk", storeUserMessage);

userRouter.get("/talk/:sendUserId/:receiveUserId", getTalkMessages);

userRouter.get("/talkusers/:userId", getTalkUsers);

module.exports = userRouter;
