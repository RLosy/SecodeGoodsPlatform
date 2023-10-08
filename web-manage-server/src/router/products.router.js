const Router = require("koa-router");
const {
  getAllProducts,
  deleteProduct,
  getProductsById,
} = require("../controller/products.controller");

const productsRouter = new Router({ prefix: "/products" });

productsRouter.get("/:sortValue", getAllProducts);

productsRouter.get("/", getProductsById);

productsRouter.delete("/:productsId", deleteProduct);

module.exports = productsRouter;
