const connection = require("../app/database");

class advertsService {
  async uploadAdverts(url, filename, business, groups) {
    const statement = `INSERT INTO adverts (url, name, business, ad_groups)
                        VALUES (?, ?, ?, ?);`;
    const results = await connection.execute(statement, [
      url,
      filename,
      business, 
      groups,
    ]);
    return results[0];    
  }

  async returnAllAdverts() {
    const statement = `SELECT * FROM adverts;`;
    const results = await connection.execute(statement);
    return results[0]; 
  }
}

module.exports = new advertsService();
