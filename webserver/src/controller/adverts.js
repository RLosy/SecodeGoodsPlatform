const { STATIC_ADVERT_PATH } = require("../app/constants");
const {
  uploadAdverts,
  returnAllAdverts,
} = require("../service/advertsService");

class advertsController {
  async saveAdverts(ctx, next) {
    const { filename } = ctx.req.file;
    const { input: business, selectValue: groups } = ctx.req.body;
    const url = `${STATIC_ADVERT_PATH}${filename}`;

    const result = await uploadAdverts(url, filename, business, groups);
    ctx.body = {
      stateCode: 200,
      data: result,
    };
  }

  async getAllAdverts(ctx, next) {
    const result = await returnAllAdverts();
    ctx.body = {
      stateCode: 200,
      data: result,
    };  
  } 
}

module.exports = new advertsController();
