import express from "express"

// @types/express
const app = express();

/**
 * GET    => Buscar uma informação
 * POST   => Inserir/Criar uma informação
 * PUT    => Alterar uma informação
 * DELETE => Deletar uma informação
 * PATCH  => Alterar uma informação específica
 */

/**
 * Tipos de Parâmetros
 * Routes Params => http://localhost:3000/produtos/123456789
 * Query Params => http://localhost:3000/produtos?name=teclado&description=tecladobom
 * 
 * Body Params =>{
 * "name": "teclado",
 * "description": "teclado bom"
 * }
 */

app.get("/test", (request, response) => {
  //Request => Entrando
  //Response => Saindo
  return response.send("Olá NLW")
});

app.post("/test-post", (request, response) => {
  return response.send("Olá NLW método Post")
});

// http://localhost:3000
app.listen(3000, () => console.log("Server is running NLW"));

//APÓSTOFRO = [ ` ]