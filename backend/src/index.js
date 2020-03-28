const express = require('express');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333);


/**
 *  Rota /Recurso
 * /
 */
/**
 * Metodos HTTP:
 * 
 * GET: e o metdoto de busca ele busca uma informaçao do back-end
 * POST: Criar uma informaçao no fornt-end
 * PUT: Alterar uma informaçao no seu beck-end
 * DELETE: Deletar uma informaçao no seu back-end
 */

 /**
  * Tipos de paramentros:
  * 
  * Query Params: Parametros nomeandos enviandos na rota apos "?" (Filtros,paginaçao)
  * Route params: Parametros utilizandos para indetificar resursos
  * Request body: Corpos da requisiçao, utilizando para criaçao ou alteraçao recursos
  */

  /**
   * SQL: MySQL, SQLite,PostgreSQL, Oracle, Microsoft SQL Serve
   * NoSQL: MongoDB, CouchDB,etc
   */
