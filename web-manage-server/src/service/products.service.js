const connection = require("../app/database");

class productsService {
  async returnAllProducts(sortValue) {
    const statement = `SELECT 
    products.id id, url, description, deal_way,category,products.createAt,
    JSON_OBJECT('id', user.id, 'account', user.account,
    'nickName', user.nickName) user
    FROM products LEFT JOIN user ON products.user_id=user.id ORDER BY products.createAt DESC;`;
    const statement1 = `SELECT 
    products.id id, url, description, deal_way,category,products.createAt,
    JSON_OBJECT('id', user.id, 'account', user.account,
    'nickName', user.nickName) user
    FROM products LEFT JOIN user ON products.user_id=user.id ORDER BY products.createAt ASC;`;
    if (sortValue === "1") {
      const results = await connection.execute(statement, [sortValue]);
      return results[0];
    }
    const results = await connection.execute(statement1, [sortValue]);
    return results[0];
  }

  async removeProduct(productsId) {
    const statement = `DELETE FROM products WHERE id=?;`;
    const results = await connection.execute(statement, [productsId]);

    return results[0];
  }

  async returnProductsById(value, selectCondition) {
    const statement = `
    SELECT 
    products.id id, url, description, deal_way,category,products.createAt,
    JSON_OBJECT('id', user.id, 'account', user.account,
    'nickName', user.nickName) user
    FROM products LEFT JOIN user ON products.user_id=user.id WHERE ${selectCondition}=?;`;
    const results = await connection.execute(statement, [value]);

    return results[0];
  }
}

module.exports = new productsService();
