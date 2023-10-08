const {
  getUrlLists,
  getGoodsCategory,
  returnSearchGoods,
} = require("../service/goodsService");

class goodsController {
  async goodsUrlLists(ctx, next) {
    const result = await getUrlLists();

    ctx.body = result[0];
  }

  async getCategoryGoods(ctx, next) {
    const { category } = ctx.request.params;

    const result = await getGoodsCategory(category);

    ctx.body = result;
  }

  async getSearchGoods(ctx, next) {
    const { searchValue } = ctx.request.params;
    const result = await returnSearchGoods(searchValue);

    ctx.body = result;    
  }
}

module.exports = new goodsController();
