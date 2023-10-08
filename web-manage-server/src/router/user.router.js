const Router = require("koa-router");
const {
  getAllUsers,
  removeUser,
  getUerData,
  removeUserProduct,
  getAllTalk,
  deleteTalk,
  deleteAdvert,
} = require("../controller/user.controller");

const userRouter = new Router({ prefix: "/user" });

userRouter.get("/", getAllUsers);
userRouter.delete("/:userId", removeUser);

userRouter.delete("/deletePro/:proId", removeUserProduct);
userRouter.get("/:condition/:seekValue", getUerData);

userRouter.get("/talk", getAllTalk);
userRouter.delete("/talk/:id", deleteTalk);

userRouter.delete("/advert/:id", deleteAdvert);

module.exports = userRouter;
 