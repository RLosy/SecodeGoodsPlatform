const {
  returnAllProducts,
  removeProduct,
  returnProductsById,
} = require("../service/products.service");

class productsController {
  async getAllProducts(ctx, next) {
    const { sortValue } = ctx.request.params;

    const result = await returnAllProducts(sortValue);

    ctx.body = {
      stateCode: 200,
      data: result,
    };
  }

  async deleteProduct(ctx, next) {
    const { productsId } = ctx.request.params;
    const result = await removeProduct(productsId);
    ctx.body = {
      stateCode: 203,
      data: result,
    };
  }

  async getProductsById(ctx, next) {
    const { id, category } = ctx.request.query;
    let selectCondition = "";
    let result = [];
    if (id) {
      selectCondition = "products.id";
      result = await returnProductsById(id, selectCondition);
    } else {
      selectCondition = "products.category"; 
      result = await returnProductsById(category, selectCondition);
    }

    ctx.body = {
      stateCode: 200,
      data: result,
    };
  }
}

module.exports = new productsController();
